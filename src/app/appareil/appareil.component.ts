import { Component, OnInit } from '@angular/core';
import {BehaviorSubject, interval, Observable, of, Subject} from 'rxjs';
import set = Reflect.set;
import {filter, map, take, takeUntil, takeWhile, tap} from 'rxjs/operators';

@Component({
  selector: 'app-appareil',
  templateUrl: './appareil.component.html',
  styleUrls: ['./appareil.component.css']
})
export class AppareilComponent implements OnInit {

   observer = 10 ;
   data: Observable<number>  ;
   subject = new Subject<number>();
   behaviorSubject = new BehaviorSubject<number>(1993);
   interval$: Observable<number>;
   alive = new Subject<boolean>();



  constructor() { }



  ngOnInit() {

    console.log('hello my friend 01');

    console.log('hello my friend 02');
    console.log('hello my friend 03');
    console.log('hello my friend  conflict rebase .ts');


    // this.data = this.observableTest();
    // this.data.subscribe(value => console.log(value));
    this.alive.next( true) ;
    console.log('here i want to see a conflict rebase problem');
    this.test();
    this.subject.next(1992);
    setTimeout(() => {
      this.subject.next(1996) ;
      this.behaviorSubject.next(1995);
    } , 3000);
    this.subject
      .pipe( filter( value =>  value % 2 === 0 ) )
      .subscribe(value => console.log( `Subject ${value} `));
    // this.behaviorSubject.subscribe(value => console.log(  `BehaviorSubject ${value}`));
    this.subject.next(1994);
    // this.subject.subscribe(value =>  console.log(`2 Subject  ${value}`) );
    this.interval$ = interval(1000).pipe(
      takeUntil(this.alive),
      take(2000),
      map( e => e * 10 )
    );
    this.interval$.subscribe(data => console.log(data));
  }

  public test(): void {
    setTimeout(() => {
      this.alive.next(false) ;
    } , 150000);
  }

  public observableTest(): Observable<number> {
    let x = 1993 ;
    setTimeout(() => {
      x = 1996;
    }, 5000);
    return of(x);
  }

  public conflictTest(): void {
    console.log('hello');
  }
}
