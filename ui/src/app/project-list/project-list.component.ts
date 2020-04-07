import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './project-list.component.html',
  styleUrls: ['./project-list.component.css']
})
export class ProjectListComponent implements OnInit {

  public projects;
  public router;
  constructor(private routers: Router) {
    this.router = routers;
  }

  ngOnInit(): void {
  }

  addProject() {
    this.router.navigateByUrl('/add-projects');
  }

}
