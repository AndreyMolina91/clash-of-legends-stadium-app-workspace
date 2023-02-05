import { Component, OnInit } from '@angular/core';
import { ILayoutConfig } from '../../interfaces/layout-config';
import { LayoutConfigService } from '../../services/layout-config.service';

@Component({
	selector: 'app-main-layout',
	templateUrl: './main-layout.component.html',
	styleUrls: ['./main-layout.component.scss']
})
export class MainLayoutComponent implements OnInit {
	public layoutConfiguration: ILayoutConfig;
	constructor(public layoutConfigService: LayoutConfigService) {
		this.layoutConfiguration = {
			title: 'home'
		};
	}

	ngOnInit(): void {
		this.layoutConfigService.layoutOnChange.subscribe({ next: (config) => (this.layoutConfiguration = config) });
	}
}
