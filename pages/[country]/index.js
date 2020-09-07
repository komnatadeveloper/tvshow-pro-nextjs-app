import {
	useEffect
} from 'react';
import Link from 'next/link';
import Error from 'next/error';
import axios from 'axios';
import Thumbnail from '../../components/Thumbnail';
import cookies from 'nookies';
// import Header from '../../components/Header';

// import ThumbnailWithSass from '../../components/ThumbnailWithSass';

const Home = ({
	shows,
	country,
	statusCode
}) => {
	if( statusCode ) {
		return (
			<Error
				statusCode={statusCode}
			/>
		);
	}
	
	const renderShows = () => {
		return shows.map(
			(showItem, index) => {
				const { show } = showItem;
				return (
					<li key={index}>
						<Thumbnail
							imageUrl={
								(
									show.image
									&& show.image.medium
								)
								|| undefined
							}
							caption={show.name}
							href='/[country]/[showId]'
							as={`/${country}/${show.id}`}
						/>
					</li>
				)
			}
		)
	}

	return (
		<div className='home'>
			{/* <Header /> */}
			<ul className='tvshows-grid'>
				<Link
					href='./about'
				>
					<a>About</a>
				</Link>
				{
					renderShows()
				}
				<style jsx>{`
					.tvshows-grid {
						display: grid;
						grid-template-columns: 1fr 1fr;
						gap: 20px;
					}
				`}</style>
			</ul>
		</div>
	);
}

// This gets called on every request
export async function getServerSideProps(
	context
) {
	try {		
		// console.log('Home.getServerSideProps -> context ->', context);
		const {
			defaultCountry
		} = cookies.get(context);
		console.log('pages/[country]/index.js -> Home -> getServerSideProps -> defaultCountry ->', defaultCountry);
		// const country = context.query.country || 'us';
		const country = context.query.country ? context.query.country : (
			(
				defaultCountry && defaultCountry !== 'undefined'
			) ?  defaultCountry : 'us'
		);
		console.log('pages/[country]/index.js -> Home -> getServerSideProps -> country ->', country);
		const res = await axios.get(
			`https://api.tvmaze.com/schedule?country=${country}&date=2014-12-01`
		);
		// Pass data to the page via props
		return { props: {
			shows: res.data,
			country
		}}
	} catch (err) {
		return { props: {
			statusCode: err.response ? err.response.status : 500,
		}}
	}
}



export default Home;