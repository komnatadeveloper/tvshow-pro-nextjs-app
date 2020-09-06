// import ThumbnailStyles from "./styles";



const ThumbnailWithSass = ({
	imageUrl,
	caption
}) => {
	return (
		<div className='thumbnail'>
			<img 
				src={imageUrl}
				className='thumbnail__image'
			/>
			<h4
				className='thumbnail__caption'
			>
				{caption}
			</h4>

			{/* <style jsx>
				{
					ThumbnailStyles
				}
			</style> */}
		</div>
	)
}
export default ThumbnailWithSass;