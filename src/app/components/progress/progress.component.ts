import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss']
})
export class ProgressComponent implements OnInit {

  mode = 'determinate';
  value = '40';
  color = 'primary'

  constructor() { }

  ngOnInit() {
  }

}
