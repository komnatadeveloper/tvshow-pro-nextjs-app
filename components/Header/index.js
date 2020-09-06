import {
	useRouter
} from 'next/router';
import {
	useState
} from 'react';

const countries = [
	{
		label: 'us',
		name: 'United States'
	},
	{
		label: 'br',
		name: 'Brasil'
	},
];

const Header = () => {
	const router = useRouter();
	const [ selectedCountry, setSelectedCountry ] = useState( router.query.country );
	const handleChange = (e) => {
		// console.log('selected country ->', e.target.value);
		setSelectedCountry(e.target.value);
		router.push(
			`/[country]`,
			`/${e.target.value}`
		);

	}

	const renderCountries = () => {
		return countries.map(
			countryItem => {
				return (
					<option 
						key={countryItem.label}
						value={countryItem.label}
					>
						{
							countryItem.name
						}
					</option>
				);
			}
		)
	}
	return (
		<div className='header'>
			<select 
				value={selectedCountry}
				onChange={handleChange}
			>
				{
					renderCountries()
				}
			</select>
			<style jsx>{`
				.header {
					padding: 20px;
					background-color: #333;
					color: #fff;
					text-align: center;
					margin-bottom: 10px;
				}
			`}</style>
		</div>
	);
}
export default Header