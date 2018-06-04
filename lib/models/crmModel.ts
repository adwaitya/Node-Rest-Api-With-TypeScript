import { InjectorService, JsonProperty } from 'ts-express-decorators';
import { prop, Typegoose, InstanceType, arrayProp, instanceMethod, pre, ModelType } from 'typegoose';




export class Plan extends Typegoose {


    name: string;


    description: string;


    cmUrl: string;

    network: string;

    username: string;


    password: string;


    playlist: string;


    ttl: number;


    UUID: string;


    deletedFlag: boolean;

}




