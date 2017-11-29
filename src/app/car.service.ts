import { Injectable } from '@angular/core';
import { Car } from './themes';
import { CARS } from './mock-cars';

@Injectable()
export class CarService {

	constructor() { }

	getCarsSmall(): Car[]{
		return CARS;
	}

}
