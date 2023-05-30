/* eslint-disable prettier/prettier */

export class UpdateChildDto{
    readonly firstName: string;
    readonly lastName: string;
    readonly middleName: string;
    readonly dob: string;
    readonly picture: string;
    readonly allergies: [string];
}