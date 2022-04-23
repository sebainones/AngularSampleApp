import { Injectable } from "@angular/core";
import { Observable } from 'rxjs';
import { HttpClient } from "@angular/common/http";

@Injectable()
export class CoursesService{

    private azureUrl = "https://hotelmirandaappservice.azurewebsites.net/names";
    private localUrl ="http://localhost:4041/courses";

    constructor(private http:HttpClient)
    {
    }

    getCourses() : Observable<Array<string>>{     
         return this.http.get<Array<string>>(this.azureUrl);      
    }   
}