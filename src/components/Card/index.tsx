import React from 'react';

type Brand = 'visa' | 'american' | 'mastercard';
interface Props {
	typeBrand: Brand;
	name: string;
	cardHolder: string;
}

// background: linear-gradient(90deg, hsla(350, 100%, 88%, 1) 0%, hsla(349, 100%, 92%, 1) 50%, hsla(36, 100%, 85%, 1) 100%);
const Card = () => {
	return (
		<div
			className="prueba"
			style={{
				background:
					'linear-gradient(90deg, hsla(350, 100%, 88%, 1) 0%, hsla(349, 100%, 92%, 1) 50%, hsla(36, 100%, 85%, 1) 100%)',
			}}
		>
			Soy la card
		</div>
	);
};

export { Card };
