import { Component, OnInit } from '@angular/core';
import {SelectItem} from 'primeng/primeng'; // required for dropbox component
import { City } from '../themes';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.css']
})


export class DropdownComponent implements OnInit {
	cities1: SelectItem[];
	selectedCity1: City;

	constructor() {
		
	    //SelectItem API with label-value pairs
	    this.cities1 = [
	        {label:'Select City', value:null},
	        {label:'New York', value:{id:1, name: 'New York', code: 'NY'}},
	        {label:'Rome', value:{id:2, name: 'Rome', code: 'RM'}},
	        {label:'London', value:{id:3, name: 'London', code: 'LDN'}},
	        {label:'Istanbul', value:{id:4, name: 'Istanbul', code: 'IST'}},
	        {label:'Paris', value:{id:5, name: 'Paris', code: 'PRS'}}
	    ];	
	}

  ngOnInit() {
  }

}
