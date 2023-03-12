import type { IBrands, BrandNames } from '@model/brands.model';
import Visa from '@public/image/visa.png';
import Mastercard from '@public/image/mastercard.png';
class Brands {
	// eslint-disable-next-line no-unused-vars
	constructor(public brands: IBrands[]) {}
	getBrands() {
		return this.brands;
	}
	create(newBrand: IBrands) {
		this.brands.push(newBrand);
	}
	getByName(name: BrandNames) {
		return this.brands.find((brand) => brand.name === name);
	}
}

const defaultBrands: IBrands[] = [
	{
		name: 'visa',
		image: Visa,
	},
	{
		name: 'mastercard',
		image: Mastercard,
	},
	{
		name: 'american',
		image: Mastercard,
	},
];

export const brands = new Brands(defaultBrands);
