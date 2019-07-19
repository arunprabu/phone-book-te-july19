import { Injectable } from '@angular/core';

export interface IContact {
    id: string,
    name: string,
    phone: string,
    email: string
}

@Injectable({
    providedIn: 'root'
})
export class Contact implements IContact{
    id: string;
    name: string;
    phone: string;
    email: string;

    //util methods go here...
    getFullName(){
        return this.name + "tata elxsi";
    }
}
