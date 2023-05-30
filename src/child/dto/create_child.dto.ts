/* eslint-disable prettier/prettier */

export class CreateChildDto{
    readonly firstName: string;
    readonly lastName: string;
    readonly middleName: string;
    readonly dob: string;
    readonly picture: string;
    readonly allergies: [string];
}