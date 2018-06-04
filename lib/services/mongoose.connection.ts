import * as mongoose from 'mongoose';
(mongoose as any).Promise = global.Promise;

export class MongooseService {
    static resource: mongoose.Connection;
   

    static async connect(): Promise<mongoose.Connection> {
        const mongoUrl : string = 'mongodb://192.168.50.107:27017/signet-plan-db';

        if (MongooseService.resource) {
            return MongooseService.resource;
        }

        const db = await mongoose.connect(mongoUrl, {
            useMongoClient: true
        });

        MongooseService.resource = db;
        // console.log('connected db',db);
        return db;
    }

}