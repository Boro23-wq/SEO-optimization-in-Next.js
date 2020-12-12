import styles from '../styles/Home.module.css';
import Image from 'next/image';
import Head from 'next/head';

export default function Home() {
  return (
    <main className={styles.container}>
      <Head>
        <title>Liverpool Football Club</title>
        <meta name='description' content='Liverpool Football Club Stadium' />
      </Head>

      <h1>Liverpool Football Club </h1>
      <Image
        src='/anfield.jpg'
        alt='Liverpool Football Club Stadium'
        width='800'
        height='600'
      />
    </main>
  );
}
