import * as express from "express";
import * as bodyParser from "body-parser";
const { mongoose } = require('./config')
import { Routes } from "./routes/crmRoutes";
import { ContactController } from "./controllers/crmController";
import { CRMService } from "./services/crmService";
import { MongooseService } from "./services/mongoose.connection";
import { Plan } from "./models/crmModel";

(mongoose as any).Promise = require('bluebird');
class App {

    public app: express.Application;
    public routePrv: Routes = new Routes();
    
    public mongoUrl: string = 'mongodb://192.168.50.107:27017/signet-plan-db';


    constructor(public cRMService: CRMService, public mongooseService: MongooseService) {
        this.app = express();
        this.config();
        this.routePrv.routes(this.app);
        this.mongoSetup();
       this.getAllPlan();
        

    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
  
    async getAllPlan(): Promise<Object> {

   
        try {
          
          const PlanModel = new Plan().getModelForClass(Plan);
        
          const getPlan = await     PlanModel.find();
        //   const getPlan = await PlanModel.findOne({ UUID: UUID });
        console.log( await getPlan)
          return await getPlan;
        } catch (e) {
          console.log('error',e)
        }
      }
    private mongoSetup(): void {
        
    
        
      
    }

}

export default new App(this.cRMService,this.mongooseService).app;