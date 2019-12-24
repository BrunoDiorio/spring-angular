import {Component, OnInit} from '@angular/core';
import {TaskService} from "../task.service";
import {Task} from "../task.model";

@Component({
    selector: 'app-tasks-add',
    templateUrl: './tasks-add.component.html',
    styleUrls: ['./tasks-add.component.css']
})
export class TasksAddComponent implements OnInit {

    addTaskValue: String = null;

    constructor(private taskService: TaskService) {
    }

    ngOnInit() {
    }

    onTaskAdd(event){
        let task: Task = new Task(event.target.value, false, new Date().toLocaleDateString());
        this.taskService.saveTask(task).subscribe(
            (newTask: Task) =>{
                //clear input
                this.addTaskValue = '';

                //send tank pelo subscription
                this.taskService.onTaskAdded.emit(newTask);
            }
        );
    }
}
