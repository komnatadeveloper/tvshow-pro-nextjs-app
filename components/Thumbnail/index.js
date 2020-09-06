import Link from 'next/link';
// import ThumbnailStyles from "./styles";



const Thumbnail = ({
	imageUrl = 'https://via.placeholder.com/210x295?text=NO_IMAGE',
	caption,
	href= '',
	as = '',
	small = false
}) => {
	return (
		<div className='thumbnail'>
			<Link
				// href='/[country]/[showId]'
				// as='/us/5617'
				href={href}
				as={as}
			>
				<a>
					<img 
						src={imageUrl}
						className='thumbnail__image'
					/>
					<h4
						className='thumbnail__caption'
					>
						{caption}
					</h4>
				</a>
			</Link>

			<style jsx>
				{
					`
						.thumbnail__image {
							width: ${small ? '100px' : '100%'};
							margin-right: 10px;
						}
					
						.thumbnail__caption {
							text-align:center;
							padding: 10px;
						}
					`
				}
			</style>
		</div>
	)
}
export default Thumbnail;