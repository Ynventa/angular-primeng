import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng'; // required for buttons type inline control

@Component({
  selector: 'app-buttons',
  templateUrl: './buttons.component.html',
  styleUrls: ['./buttons.component.css']
})
export class ButtonsComponent implements OnInit {

	types: SelectItem[];
	selectedType: string;

	constructor() {
        this.types = [];
        this.types.push({label: 'More', value: 'more'});
        this.types.push({label: 'Less', value: 'less'});
	}


    checked: boolean;

    onclick() {
        //execute action
        alert("button clicked")
    }

	ngOnInit() {
	}

}
