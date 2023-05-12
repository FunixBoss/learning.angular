import { Address } from "./address.model";

export class Account { 
    id: number;
    username: string;
    password: string;
    description: string;
    address: Address;
    status: boolean;
    gender: string ;
    cert: number;
    role: number;
    email: string;
}
