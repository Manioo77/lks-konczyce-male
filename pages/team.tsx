import Link from 'next/link'
import Layout from '@/components/Layout/Layout'

export default function Home() {
	return (
		<Layout pageTitle='Drużyna'>
			<section className='mainPage'>
				<div>
					<h1>Drużyna</h1>
					<Link href='/'>go home</Link>
				</div>
			</section>
		</Layout>
	)
}
