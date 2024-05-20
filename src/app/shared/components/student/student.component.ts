import { Component } from "@angular/core";
import { Istd } from "../../models/student.interface";


@Component({
    selector : 'app-student',
    templateUrl : './student.component.html',
    styleUrls : ['./student.component.scss']
})
export class StudentComponent{
    stdArr : Array<Istd>  = [
        {
            fname : "Jhon",
            lname : "Doe",
            email : "jd@gmail.com",
            contact : 1234567890
        },
        {
            fname : "Jen",
            lname : "Doe",
            email : "jen@gmail.com",
            contact : 1234567890
        },
        {
            fname : "May",
            lname : "Doe",
            email : "may@gmail.com",
            contact : 1234567890
        },
        {
            fname : "June",
            lname : "Doe",
            email : "june@gmail.com",
            contact : 1234567890
        },
        {
            fname : "James",
            lname : "Doe",
            email : "may@gmail.com",
            contact : 1234567890
        },
        {
            fname : "Jerry",
            lname : "Doe",
            email : "june@gmail.com",
            contact : 1234567890
        },
    ]
}