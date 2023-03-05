import { StaticImageData } from 'next/image';

export type BrandNames = 'visa' | 'american' | 'mastercard';
export interface IBrands {
	name: BrandNames;
	image: StaticImageData;
}
