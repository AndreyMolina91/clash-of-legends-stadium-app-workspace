import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
	{
		path: 'login',
		loadChildren: () => import('./modules/login/login.module').then((m) => m.LoginModule)
	},
	{
		path: '**',
		redirectTo: '/login'
	}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class AppRoutingModule {}
