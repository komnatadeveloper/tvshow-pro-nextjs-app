import Head from 'next/head'
// import styles from '../styles/Home.module.css'

const  Home = ({
  browser
}) => null

// {
//   console.log('process.browser -> ', browser);
//   return (
//     <div
//     //  className={styles.container}
//     >
//       This is my Homepage
//     </div>
//   )
// }


// This gets called on every request
export async function getServerSideProps(
	context
) {
  // console.log('browser ->', process.browser);
  return { props: {
    test: 'TESTTT',
    browser: process.browser
  }}
}

export default Home;
