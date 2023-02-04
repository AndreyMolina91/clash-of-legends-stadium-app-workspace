import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { environment } from '../../../../../environments/environment';

@Injectable({
	providedIn: 'root'
})
export class CanActivateLoginService implements CanActivate {
	constructor(private router: Router) {}

	//? CanActivate the component next to login
	public canActivate(): boolean {
		//TODO: Pendiente a ser cambiado por el servicio de Autenticacion
		const result = true;
		if (result) {
			this.router.navigate([environment.homePath]);
		}
		return true;
	}
}
