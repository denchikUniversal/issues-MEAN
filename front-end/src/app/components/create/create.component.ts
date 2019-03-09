import { Component, OnInit } from '@angular/core';
import { IssueService } from 'src/app/issue.service';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  constructor(private issueService: IssueService) { }

  ngOnInit() {
  }

}
