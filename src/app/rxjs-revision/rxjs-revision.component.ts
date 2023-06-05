import { Component, OnInit } from '@angular/core';
import {combineLatest, forkJoin, interval, Observable, Subject} from 'rxjs';
import {debounceTime, take, withLatestFrom} from 'rxjs/operators';

@Component({
  selector: 'app-rxjs-revision',
  templateUrl: './rxjs-revision.component.html',
  styleUrls: ['./rxjs-revision.component.css']
})
export class RxjsRevisionComponent implements OnInit {

  observable1$: Observable<number> = interval(5000);
  observable2$: Observable<number> = interval(1000);
  subject$: Subject<number> = new Subject<number>();
  nb = 0 ;
  readonly readonlyTest: string  ;
  private setTest = 0 ;

  constructor() {
    this.readonlyTest = 'walid-djebbouri';
  }

  ngOnInit() {
    console.log(this.readonlyTest);
    this.observable1$.pipe(
      withLatestFrom(this.observable2$) ,
      take(2))
      .subscribe(
      ( ([x1, x2]: [number, number]) =>  console.log( `withLatestForm ${x1} ,  ${x2}`)  )
    );
    combineLatest([
      this.observable1$.pipe( take(5) ),
      this.observable2$.pipe( take(25) ),
    ]).subscribe( ( [x1, x2]: [number , number] ) => console.log( ` combineLatest ${x1} , ${x2}` ) );
    forkJoin([
      this.observable1$.pipe(take(2)),
      this.observable2$.pipe(take(13))
    ]).subscribe(( [x1, x2]: [number, number] ) => console.log( ` forkJoin ${x1} , ${x2}` ));
    this.subject$.pipe( debounceTime(2000)).subscribe( value => console.log(value) ) ;
  }

  increment(): void {
    this.nb++ ;
    this.subject$.next(this.nb);
  }

   getAllValues() {
    return this.setTest;
  }

  set setTestValue(nb: number) {
    this.setTest = nb;
  }
}
