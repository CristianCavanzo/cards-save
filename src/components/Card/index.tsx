import React from 'react';
import styled from 'styled-components';
import type { BrandNames } from '@model/brands.model';
import { brands } from 'classes/Brands';
import Image from 'next/image';
const CardComponent = styled.div`
	position: relative;
	max-width: 300px;
	min-height: 100px;
	/* p {
		position: absolute;
		z-index: 1;
	} */
`;

interface Props {
	brand: BrandNames;
	name: string;
	cardHolder: string;
}

// background: linear-gradient(90deg, hsla(350, 100%, 88%, 1) 0%, hsla(349, 100%, 92%, 1) 50%, hsla(36, 100%, 85%, 1) 100%);
const Card = ({ brand, name, cardHolder }: Props) => {
	const selectedCard = brands.getByName(brand);
	return (
		<CardComponent>
			<Image src={selectedCard.image} width={40} alt={`Icono de ${brand}`} />
			<div>
				<p>{name}</p>
				<p>{cardHolder}</p>
			</div>
		</CardComponent>
	);
};

export { Card };
