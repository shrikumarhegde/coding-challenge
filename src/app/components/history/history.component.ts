import { Component, Input, OnInit } from '@angular/core';
import { HistoryModel } from 'src/app/model/history.model';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.scss']
})
export class HistoryComponent implements OnInit {
  @Input() userHistory:HistoryModel[];

  constructor() { }

  ngOnInit(): void {
  }

}
