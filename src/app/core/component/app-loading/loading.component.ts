import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class AppLoadingComponent implements OnInit {
  @Input() loading: boolean;
  @Input() diameter: number = 50;

  ngOnInit() {}
}
