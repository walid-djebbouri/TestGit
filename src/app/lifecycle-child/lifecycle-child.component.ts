import {Component, Input, OnChanges, OnInit} from '@angular/core';

@Component({
  selector: 'app-lifecycle-child',
  templateUrl: './lifecycle-child.component.html',
  styleUrls: ['./lifecycle-child.component.css']
})
export class LifecycleChildComponent implements OnInit, OnChanges {

  @Input() childTitle: string;
  @Input() display: boolean;

  constructor() {}

  ngOnInit() {
    console.log('ngOnInit');
    console.log('hello from ngOnInit ');
  }

  ngOnChanges(): void {
    console.log('ngOnChanges');
    console.log('hello from ngOnChanges');
  }

  testFunction(): void {
    console.log('hello word');
  }
}
