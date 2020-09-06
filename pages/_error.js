

const CustomError = ({
	// statusCode
}) => {
	// console.log('pages/_error.js -> CustomError -> statusCode ->', statusCode);
	return (
		<div>
			This is a Custom Error
		</div>
	);
}


// This gets called on every request
export async function getServerSideProps(
	context
) {	
	console.log( 'pages -> _error.js -> getServerSideProps -> context', context );
	const {
		err,
		res
	} = context;
	return { props: {
		// statusCode: res ? res.statusCode : err ? err.statusCode : 404
	}};

	// return {
	// 	props: {
	// 		statusCode: err.response ? err.response.status : 500
	// 	}
	// };

}

export default CustomError;