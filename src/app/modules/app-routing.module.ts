import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {LogoutComponent} from '../components/logout/logout.component';
import {AuthenticatedGuardService} from '../services/authenticated-guard.service';
import {PageNotFoundComponent} from '../components/page-not-found/page-not-found.component';
import {LoginComponent} from '../components/login/login.component';
import {HomeComponent} from '../components/home/home.component';
import {MyLibraryComponent} from '../components/my-library/my-library.component';

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'login', component: LoginComponent},
  {path: 'logout', component: LogoutComponent, canActivate: [AuthenticatedGuardService]},
  {path: 'my-library', component: MyLibraryComponent, canActivate: [AuthenticatedGuardService]},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
