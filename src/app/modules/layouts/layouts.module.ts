import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { MainLayoutComponent } from './components/main-layout/main-layout.component';

@NgModule({
	declarations: [MainLayoutComponent],
	imports: [CommonModule],
	exports: [MainLayoutComponent]
})
export class LayoutsModule {}
