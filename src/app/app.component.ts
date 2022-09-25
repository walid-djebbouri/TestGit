import {Component, Input, OnInit , OnDestroy} from '@angular/core';
import {UserService} from './service/user.service';
import {subscriptionLogsToBeFn} from 'rxjs/internal/testing/TestScheduler';
import {Subscription} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})


export class AppComponent implements OnInit , OnDestroy {

  @Input() attr: string ;

  listUser: Subscription ;

  constructor(private user: UserService) {
  }
  ngOnInit() {
    this.listUser = this.user.userSubject.subscribe(
      (users: any[]) => {
        console.log(users[2]) ;
      }
      );
    this.user.envyerUser();


  }
  ngOnDestroy() {
    this.listUser.unsubscribe();
  }
  modifier_user() {
    this.user.modifierUser( 2 , 'mohamed' , 'boucetta' , 24 ) ;
  }
}
