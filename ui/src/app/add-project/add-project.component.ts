import { Component, OnInit } from '@angular/core';
import {Project} from '../models/project';

@Component({
  selector: 'app-add-project',
  templateUrl: './add-project.component.html',
  styleUrls: ['./add-project.component.css']
})
export class AddProjectComponent implements OnInit {

  public project;
  constructor() {
    this.project = new Project();
  }

  ngOnInit(): void {
  }

  addProject() {
    console.log(this.project.name);
    console.log(this.project.description);
  }

}
