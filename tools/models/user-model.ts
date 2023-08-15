import { audit } from "rxjs";
import { AuditModel } from "./audit-models";

export class UserModel {
    id: string;
    name: string;
    surname: string;
    image: string;
    email: string;
    password: string;
    passwordHash: string;
    audit: AuditModel;
}