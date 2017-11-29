import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'app-showcase-one',
	templateUrl: './showcase-one.component.html',
	styleUrls: ['./showcase-one.component.css']
})
export class ShowcaseOneComponent implements OnInit {

	/* inputSwitch */
	checked: boolean = true;
	unchecked: boolean = false;

	/* checkbox */
	selectedValuesChB: string[] = []; // or you can check it: selectedValuesChB: string[] = ['val1',''];

	/* radioButton */
	//selectedValueRB: string; // or you can check one of them:  selectedValueRB: string = 'val2';
	selectedValueRB: string = 'val2';

	/* slider */
	valueStepSL: number = 20;
	valueSmothSL: number;

	constructor() { }

	ngOnInit() {
	}

}
