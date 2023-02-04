import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
	selector: 'app-default-login',
	templateUrl: './default-login.component.html',
	styleUrls: ['./default-login.component.scss']
})
export class DefaultLoginComponent implements OnInit {
	public login: FormGroup;
	public errorMessage!: string;

	constructor(private formBuilder: FormBuilder) {
		this.login = formBuilder.group('');
	}

	ngOnInit(): void {
		this.login = this.formBuilder.group({
			username: new FormControl(
				'',
				Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(50)])
			),
			password: new FormControl(
				'',
				Validators.compose([Validators.required, Validators.minLength(1), Validators.maxLength(20)])
			)
		});
	}

	public submit(): void {
		this.errorMessage = '';
		this.login.disable();
	}
}
