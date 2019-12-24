import {HttpClient} from "@angular/common/http";
import {EventEmitter, Injectable} from "@angular/core";
import {Task} from "./task.model";
import {catchError, map, retry} from "rxjs/operators";
import {throwError} from "rxjs";

@Injectable()
export class TaskService{

    onTaskAdded = new EventEmitter<Task>();

    constructor(
        private http: HttpClient) {
    }

    getTasks(){
        return this.http.get('api/tasks');
    }

    saveTask(task: Task){
        return this.http.post<Task>('/api/tasks/save', task);
    }
}
