import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DummyComponent } from './components/ui/dummy/dummy.component';
import { AllUsersComponent } from './components/users/all-users/all-users.component';
import { RegisterComponent } from './components/users/register/register.component';

const routes: Routes = [
  {path: 'register', component: RegisterComponent},
  {path: 'users', component: AllUsersComponent},
  {path: 'dummy', component: DummyComponent},
  {path: '', redirectTo: 'register', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
