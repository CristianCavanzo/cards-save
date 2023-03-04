import type { AppProps } from 'next/app';
import '@styles/global.css';
import { Urbanist } from 'next/font/google';
const urbanist = Urbanist({
	weight: 'variable',
	style: 'normal',
	subsets: ['latin'],
});

export default function MyApp({ Component, pageProps }: AppProps) {
	return (
		<main className={urbanist.className}>
			<Component {...pageProps} />
		</main>
	);
}
