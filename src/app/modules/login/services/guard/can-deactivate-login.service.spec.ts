import { TestBed } from '@angular/core/testing';

import { CanDeactivateLoginService } from './can-deactivate-login.service';

describe('CanDeactivateLoginService', () => {
	let service: CanDeactivateLoginService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(CanDeactivateLoginService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
