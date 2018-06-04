import { Service } from "ts-express-decorators";
import { Plan } from "../models/crmModel";



export class CRMService {
    async getAllPlan(): Promise<Object> {

   
        try {
          
          const PlanModel = new Plan().getModelForClass(Plan);
        
          const getPlan = await     PlanModel.find();
        //   const getPlan = await PlanModel.findOne({ UUID: UUID });
          return await getPlan;
        } catch (e) {
          console.log('error',e)
        }
      }

     }
}