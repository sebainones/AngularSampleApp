import { Component } from "@angular/core";
import { CoursesService } from "./course/courses.service";
import { Observable } from 'rxjs';

@Component({
    selector: 'courses', //<courses> "courses"
    template: `
    <h2>{{ getTittle() }}</h2>
    <ul>
        <li *ngFor="let currentCourse of this.courses">
            {{ currentCourse }}
        </li>
    </ul>
    `
})
export class CoursesComponent{
    tittle =" List of courses";
    courses:any;
    items: any;

    constructor(private coursesService:CoursesService){  
        this.getCourses();

        console.log(this.courses);
    }
    getCourses(): void 
    {     
        this.coursesService.getCourses().
        subscribe(
           
            (items) => { this.courses = items; },
            (error) => { console.log(error); });

    }
    getTittle() {
        return this.tittle;
    }
}