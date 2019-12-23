import {Component, OnInit} from '@angular/core';
import {Task} from "../task.model";
import {TaskService} from "../task.service";

@Component({
    selector: 'app-tasks-list',
    templateUrl: './tasks-list.component.html',
    styleUrls: ['./tasks-list.component.css']
})
export class TasksListComponent implements OnInit {

    tasks: Task[] = [];

    constructor(
        private taskService: TaskService) {
    }

    ngOnInit() {
        // this.tasks.push(new Task(1,"Task1", true, "01/12/2019"));
        return this.taskService.getTasks()
            .subscribe(
                (tasks: any[]) =>{
                    this.tasks = tasks;
                },
                (error) => console.log(error));
    }

    getDueDateLabel(task: Task){
        return task.completed ? 'badge-success' : 'badge-primary';
    }

    onTaskChange(event, task: Task){
        task.completed = !task.completed;
        console.log(task);
    }

}
