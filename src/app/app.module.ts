import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { RouterModule, Routes} from '@angular/router';
import { MonDeuxiemeComponent } from './mon-deuxieme/mon-deuxieme.component';
import {UserService} from './service/user.service';

const appRoutes: Routes = [
  { path: '', component: MonPremierComponent } ,
  { path: 'navBar' , component : MonDeuxiemeComponent},
  { path: 'appariel'  , component: AppareilComponent } ,

] ;



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    MonDeuxiemeComponent
  ],
  imports: [
    BrowserModule ,
    FormsModule,
    RouterModule.forRoot(appRoutes)

  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
