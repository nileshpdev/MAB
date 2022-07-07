import { Component, OnInit } from '@angular/core';
import { Result } from '../interface/result'


@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.scss']
})
export class InfoComponent implements OnInit {
  infoText = `This is just some placeholder text about scrabble. 
  Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do iudtempor incidunt ut labore et dolore magna aliqua`;

  constructor() { }

  ngOnInit(): void {
  }

}
