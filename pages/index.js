import Head from 'next/head'
// import styles from '../styles/Home.module.css'
import {useRouter} from 'next/router';
import { useEffect } from 'react';
import cookies from 'nookies';

const  Home = ({
  country
}) => {    

  const router = useRouter();
  
  useEffect( () => {
      router.replace(
        '/[country]',
        `/${country}`
      );   
    }, []);    


  return (
    <div>
    </div>
  );
}




// This gets called on every request
export async function getServerSideProps(
	context
) {
  const {
    defaultCountry
  } = cookies.get(context);
  // console.log('pages/index.js -> getServerSideProps -> myAppCookies ->', myAppCookies);  
  // console.log('context.query.country ->', context.query.country );
  // console.log('defaultCountry ->', defaultCountry);
  // console.log('typeof(context.query.country) ->', typeof(context.query.country) );
  // console.log('typeof(defaultCountry) ->', typeof(defaultCountry));
  const country = context.query.country ? context.query.country : (
    (
      defaultCountry && defaultCountry !== 'undefined'
    ) ?  defaultCountry : 'us'
  );

  // console.log('pages/index.js -> getServerSideProps -> will route Now......');
  // console.log('country -> ', country);
  // context.res.end();
  return { props: {
    country: country
  }}


  
}

export default Home;
