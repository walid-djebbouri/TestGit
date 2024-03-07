import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { AppareilComponent } from './appareil/appareil.component';
import { RouterModule, Routes} from '@angular/router';
import { MonDeuxiemeComponent } from './mon-deuxieme/mon-deuxieme.component';
import {UserService} from './service/user.service';
import { FormBuilderComponentComponent } from './form-builder-component/form-builder-component.component';
import { PhoneNumberValidatorDirective } from './phone-number-validator.directive';
import { RxjsRevisionComponent } from './rxjs-revision/rxjs-revision.component';
import { TestPipePipe } from './pipe/test-pipe.pipe';
import { LifecycleHookComponent } from './lifecycle-hook/lifecycle-hook.component';
import { LifecycleChildComponent } from './lifecycle-child/lifecycle-child.component';

const appRoutes: Routes = [
  { path: '', component: MonPremierComponent } ,
  { path: 'navBar' , component : MonDeuxiemeComponent},
  { path: 'appariel'  , component: AppareilComponent } ,
  { path: 'formBuilder', component: FormBuilderComponentComponent},
  { path: 'rxjs', component: RxjsRevisionComponent},
  { path: 'lifecycle-hook', component: LifecycleHookComponent}

] ;



@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    AppareilComponent,
    MonDeuxiemeComponent,
    FormBuilderComponentComponent,
    PhoneNumberValidatorDirective,
    RxjsRevisionComponent,
    TestPipePipe,
    LifecycleHookComponent,
    LifecycleChildComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    ReactiveFormsModule

  ],
  providers: [
    UserService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
