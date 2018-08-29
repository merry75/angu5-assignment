import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { RootComponent } from '../components/root/root.component';
import {HeaderComponent} from '../components/header/header.component';
import {HomeComponent} from '../components/home/home.component';
import {LoginComponent} from '../components/login/login.component';
import {LogoutComponent} from '../components/logout/logout.component';
import {MyLibraryComponent} from '../components/my-library/my-library.component';
import {AuthService} from '../services/auth.service';
import {AuthenticatedGuardService} from '../services/authenticated-guard.service';
import {AppRoutingModule} from './app-routing.module';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MatButtonModule, MatCheckboxModule, MatSortModule, MatTableModule} from '@angular/material';

@NgModule({
  declarations: [
    RootComponent,
    HeaderComponent,
    HomeComponent,
    LoginComponent,
    LogoutComponent,
    MyLibraryComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTableModule,
    MatSortModule
  ],
  providers: [
    AuthService,
    AuthenticatedGuardService
  ],
  bootstrap: [RootComponent]
})
export class AppModule { }
