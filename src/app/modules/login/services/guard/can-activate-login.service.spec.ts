import { TestBed } from '@angular/core/testing';

import { CanActivateLoginService } from './can-activate-login.service';

describe('CanActivateLoginService', () => {
	let service: CanActivateLoginService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CanActivateLoginService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
