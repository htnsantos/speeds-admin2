
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabase } from 'angularfire2/database';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AuthGuard } from './auth.service';
import { routes } from './app.routes';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import * as $ from 'jquery';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { EmailComponent } from './email/email.component';
import { SignupComponent } from './signup/signup.component';
import { UsersComponent } from './users/users.component';
import { ChamadosListComponent } from './chamados/chamados-list/chamados-list.component';

export const firebaseConfig = {
    apiKey: "AIzaSyANW95gP30NCgKZGCmS49amXCWoamMLCXg",
    authDomain: "speeds-admin.firebaseapp.com",
    databaseURL: "https://speeds-admin.firebaseio.com",
    projectId: "speeds-admin",
    storageBucket: "speeds-admin.appspot.com",
    messagingSenderId: "261487848105"
  };
  
@NgModule({
  
  declarations: [
    AppComponent,
    LoginComponent,
    EmailComponent,
    SignupComponent,
    UsersComponent,
    ChamadosListComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    routes,
    BrowserAnimationsModule
  ],
  providers: [AuthGuard, LoginComponent, AngularFireDatabase],
  bootstrap: [AppComponent]
})
export class AppModule { }