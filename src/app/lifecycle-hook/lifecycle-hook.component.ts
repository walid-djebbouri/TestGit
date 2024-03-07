import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  OnChanges,
  OnInit,
  SimpleChanges,
  ViewChild
} from '@angular/core';
import {LifecycleChildComponent} from '../lifecycle-child/lifecycle-child.component';

@Component({
  selector: 'app-lifecycle-hook',
  templateUrl: './lifecycle-hook.component.html',
  styleUrls: ['./lifecycle-hook.component.css']
})
export class LifecycleHookComponent implements OnInit
  , AfterContentInit
  , AfterViewInit
  , AfterViewChecked
  , AfterContentChecked {

  @ViewChild( LifecycleChildComponent, {static: true}) myChild: LifecycleChildComponent;

  i = 0;
  j = 0;
  userName = 'Walid Djebbouri';
  display = false;

  constructor() {
    console.log('constructor');
    console.log(this.myChild);
  }
  ngOnInit() {
    console.log('ngOnInit');
    console.log(this.myChild);
  }

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
    console.log(this.myChild);
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
    console.log(this.myChild);
  }

  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
    console.log(this.myChild);
  }

  ngAfterContentInit(): void {
    console.log('ngAfterContentInit');
    console.log(this.myChild);  }

  increment(): void {
    this.i ++ ;
    this.userName = 'Houssem Djebbouri';
    this.display = !this.display ;
  }


}
