import { Component, OnInit } from '@angular/core';
import { Iskill } from '../shared/model/stdInterface';
import { skills } from '../shared/const/skills';

@Component({
  selector: 'app-tab-ng-for',
  templateUrl: './tab-ng-for.component.html',
  styleUrls: ['./tab-ng-for.component.scss']
})
export class TabNgForComponent implements OnInit {

  skillsArray : Array<Iskill> = skills;

  selectedSkill : string = 'javascript'
  constructor() { }

  ngOnInit(): void {
  }

}
