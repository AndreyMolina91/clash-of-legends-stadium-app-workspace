import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { DefaultLoginComponent } from './default-login.component';

describe('DefaultLoginComponent', () => {
	let component: DefaultLoginComponent;
	let fixture: ComponentFixture<DefaultLoginComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			declarations: [DefaultLoginComponent],
			imports: [FormsModule, ReactiveFormsModule]
		}).compileComponents();

		fixture = TestBed.createComponent(DefaultLoginComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
