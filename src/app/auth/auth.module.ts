import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { RegisterComponent } from './components/register/register.component';

const routes = [{ path: 'register', component: RegisterComponent }];
//  { path: 'login', component: 'login' },
@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [],
  declarations: [RegisterComponent],
  providers: [],
})
export class AuthModule {}
