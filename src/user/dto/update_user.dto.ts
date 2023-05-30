/* eslint-disable prettier/prettier */
import { Child } from "src/child/schema/child.schema";
import { EmergencyContact } from "src/emergency-contact/schema/emergency.schema";




export class UpdateUserDto{
    readonly motherFirstName: string;
    readonly motherMiddleName: string;
    readonly motherLastName: string;
    readonly fatherFirstName: string;
    readonly fatherMiddleName: string;
    readonly fatherLastName: string;
    readonly homeAddress: string;
    readonly churchBranch: string;
    readonly children: Child;
    readonly EmergencyContact: EmergencyContact
}