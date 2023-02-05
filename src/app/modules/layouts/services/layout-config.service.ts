import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import { ILayoutConfig } from '../interfaces/layout-config';

@Injectable({
	providedIn: 'root'
})
export class LayoutConfigService {
	public layoutOnChange: Subject<ILayoutConfig>;
	constructor() {
		this.layoutOnChange = new Subject<ILayoutConfig>();
	}

	/**
	 * Function to set the new config into main layout
	 * @param config says the Layout config
	 */
	public setLayoutConfig(config: ILayoutConfig): void {
		this.layoutOnChange.next(config);
	}
}
