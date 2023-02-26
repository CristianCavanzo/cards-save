import React from 'react';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({
	weight: 'variable',
	style: 'normal',
});

const Layout = ({ children }) => {
	return <main className={urbanist.className}>{children}</main>;
};

export { Layout };
