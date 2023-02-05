import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './modules/layouts/components/main-layout/main-layout.component';

const routes: Routes = [
	{
		path: 'app',
		component: MainLayoutComponent,
		loadChildren: () => import('./modules/layouts/layouts.module').then((m) => m.LayoutsModule)
	},
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
