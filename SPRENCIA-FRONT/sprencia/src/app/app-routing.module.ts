import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ActivitiesComponent } from './component/actividades/activities.component';
import { DashboardComponent } from './component/dashboard/dashboard.component';
import { CardViewComponent } from './component/card-view/card-view.component';
import { HomeComponent } from './component/home/home.component';
import { ForgetPasswordComponent } from './component/login/forget-password/forget-password.component';
import { LoginComponent } from './component/login/login.component';
import { ResetPasswordComponent } from './component/login/reset-password/reset-password.component';
import { RegisterComponent } from './component/register/register.component';
import { ActivitiesListComponent } from './component/home/activities-list/activities-list.component';
import { OpinionsListComponent } from './component/home/opinions-list/opinions-list.component';
import { ProfileComponent } from './component/profile/profile.component';


import { RoleGuard } from './guards/role.guard';
import { ResetPasswordGuard } from './guards/reset-password.guard';
import { LoginGuard } from './guards/login.guard';
import { CreateAdminComponent } from './component/create-admin/create-admin.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  { path: 'home', component: HomeComponent },
  { path: 'actividades-list', component: ActivitiesListComponent },
  { path: 'opiniones-list', component: OpinionsListComponent },
  { path: 'registro', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forget-password', component: ForgetPasswordComponent },
  { path: 'reset-password', component: ResetPasswordComponent, canActivate: [ResetPasswordGuard] },
  { path: 'perfil', component: ProfileComponent, canActivate: [LoginGuard] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [RoleGuard] },
  { path: 'crear-admin', component: CreateAdminComponent, canActivate: [RoleGuard] },
  { path: 'actividades', component: ActivitiesComponent },
  { path: 'actividades/:id', component: CardViewComponent },
  { path: '**', redirectTo: 'home' }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
