import {HttpClient} from "@angular/common/http";
import {Injectable} from "@angular/core";
import {map} from "rxjs/operators";

@Injectable()
export class TaskService{

    constructor(
        private http: HttpClient) {
    }

    getTasks(){
        return this.http.get('api/tasks');
    }
}
