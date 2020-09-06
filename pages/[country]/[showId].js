import axios from 'axios';
import parse from 'html-react-parser'
import Cast from '../../components/Cast';
// import Header from '../../components/Header';
import Error from 'next/error';
// import CustomError from '../_error';



const ShowDetails = ({
	show = {},
	statusCode
}) => {
	const {
		name,
		image,
		summary,
		_embedded

	} = show;

	if( statusCode ) {
		return (
			// Version 1
			// <div>
			// 	<h1 
			// 		style={{
			// 			textAlign:'center',
			// 			marginTop:'5rem'
			// 		}}
			// 	>
			// 		There was an error!
			// 	</h1>
			// </div>

			// Version 2
			// <Error 
			// 	statusCode={statusCode}
			// 	title='Oops! There is a problem here...'
			// />

			<Error
				statusCode={statusCode}
				// title='Oops! There is a problem here...'
			/>
		);
	}
	
	return (
    <div className='show-details'>
			{/* <Header /> */}
			<div 
				className='show-details__poster'
				style={{
					backgroundImage: `url(${image.original})`
				}}
			>
			</div> 
			<h1>{name}</h1> 
			{ parse(summary) }

			{
				_embedded.cast.length > 0 
				&&	<Cast cast={_embedded.cast} />
			}
			<style jsx>{`
				.show-details__poster {
					height: 100vw;
					background-size: fit;
				}
			`}</style>
    </div>
	)
}



// This gets called on every request
export async function getServerSideProps(
	context
) {	
	try {		
		const { query } = context;
		// console.log( 'pages -> [country] -> [showId].js -> context.query', query );
	
		const res = await axios.get(
			`https://api.tvmaze.com/shows/${query.showId}?embed=cast`
		);
		// Pass data to the page via props
		return { props: {
			show: res.data,
			// country
		}};
	} catch (err) {
		console.log('pages -> [country] -> [showId].js -> getServerSideProps -> err', err);
		console.log('pages -> [country] -> [showId].js -> getServerSideProps -> err.response', err.response);
		return {
			props: {
				statusCode: err.response ? err.response.status : 500
			}
		};
	}
}

export default ShowDetails;