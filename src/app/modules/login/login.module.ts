import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { DefaultLoginComponent } from './components/default-login/default-login.component';
import { LoginRoutingModule } from './login-routing.module';

@NgModule({
	declarations: [DefaultLoginComponent],
	imports: [CommonModule, LoginRoutingModule, ReactiveFormsModule],
	exports: [DefaultLoginComponent]
})
export class LoginModule {}
