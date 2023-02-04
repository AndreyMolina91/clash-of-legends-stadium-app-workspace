import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DefaultLoginComponent } from './components/default-login/default-login.component';

const routes: Routes = [
	{
		path: '',
		component: DefaultLoginComponent
	},
	{
		// TODO: Create and define a 404 not found component
		path: '**',
		redirectTo: ''
	}
];

@NgModule({
	imports: [RouterModule.forChild(routes)],
	exports: [RouterModule]
})
export class LoginRoutingModule {}
