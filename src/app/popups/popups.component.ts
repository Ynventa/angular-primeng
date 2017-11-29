import { Component, OnInit, Input } from '@angular/core';
import {SelectItem} from 'primeng/primeng'; // required for dropbox component
import { City, Car } from '../themes';
import { CarService } from '../car.service';

@Component({
  selector: 'app-popups',
  templateUrl: './popups.component.html',
  styleUrls: ['./popups.component.css']
})

export class PopupsComponent implements OnInit {

	cities2: City[];
	selectedCity2: City;

	brands: SelectItem[];
	colors: SelectItem[];

	display1: boolean=false;
	display2: boolean=false;
	display3: boolean=false;
	display4: boolean=false;
	display5: boolean=false;
	display6: boolean=false;
	
	@Input() cars: Car[];

	constructor(private carService: CarService) {

        this.cities2 = [
            {name: 'New York', code: 'NY'},
            {name: 'Rome', code: 'RM'},
            {name: 'London', code: 'LDN'},
            {name: 'Istanbul', code: 'IST'},
            {name: 'Paris', code: 'PRS'}
        ];

        this.brands = [];
        this.brands.push({label: 'All Brands', value: null});
        this.brands.push({label: 'Audi', value: 'Audi'});
        this.brands.push({label: 'BMW', value: 'BMW'});
        this.brands.push({label: 'Fiat', value: 'Fiat'});
        this.brands.push({label: 'Honda', value: 'Honda'});
        this.brands.push({label: 'Jaguar', value: 'Jaguar'});
        this.brands.push({label: 'Mercedes', value: 'Mercedes'});
        this.brands.push({label: 'Renault', value: 'Renault'});
        this.brands.push({label: 'VW', value: 'VW'});
        this.brands.push({label: 'Volvo', value: 'Volvo'});
        
        this.colors = [];
        this.colors.push({label: 'White', value: 'White'});
        this.colors.push({label: 'Green', value: 'Green'});
        this.colors.push({label: 'Silver', value: 'Silver'});
        this.colors.push({label: 'Black', value: 'Black'});
        this.colors.push({label: 'Red', value: 'Red'});
        this.colors.push({label: 'Maroon', value: 'Maroon'});
        this.colors.push({label: 'Brown', value: 'Brown'});
        this.colors.push({label: 'Orange', value: 'Orange'});
        this.colors.push({label: 'Blue', value: 'Blue'});
	}
	
	modal: boolean = true;
	responsive: boolean = true;

	showFirstDialog() {
	    this.display1 = true;
	}
	showSecondDialog() {
	    this.display2 = true;
	}
	showThirdDialog() {
	    this.display3 = true;
	}
	showFourthDialog() {
	    this.display4 = true;
	}
	showFifthDialog() {
	    this.display5 = true;
	}
	showSixthDialog() {
	    this.display6 = true;
	}

	closeSecondDialog(){
		this.display2 = false;
	}

	closeFifthDialog(){
		this.display5 = false;
	}

	ngOnInit() {
		this.cars = this.carService.getCarsSmall();
	}

}
