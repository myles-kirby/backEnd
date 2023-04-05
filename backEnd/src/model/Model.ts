export enum WorkingPossition {
    JUNIOR = 'junior',
    PROGRAMMER = 'programmer',
    ENGINNER = 'enginner',
    EXPERT = 'expert',
    MANAGER = 'manager'
}
/*
COMMENT
*/

export interface Employee {
    name: string;
    age: number;
    admin: boolean;
    possition: WorkingPossition
}
