import React from 'react';
import styled from 'styled-components';
import type { BrandNames } from '@model/brands.model';
import { brands } from 'classes/Brands';
import Image from 'next/image';
const CardComponent = styled.div`
	position: relative;
	max-width: 300px;
	min-height: 100px;
	border: 1px solid black;
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
