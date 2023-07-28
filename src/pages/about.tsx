import { Navbar } from "@/components/Navbar";
import Head from 'next/head'
import { Footer } from "@/components/Footer";

import styles from '@/styles/About.module.css'


  export default function About() {
  return (
    <>
      <Head>
        <title>POP ART - Quem Somos</title>
        <meta name="description" content="Arte Moderna para a sua vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon"/>
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      </Head>
        
      <Navbar/>
      <section className={styles.section_about}>
        <header>
          <div className={styles.shape_about}>
            <h2>Quem Somos</h2>
          </div>
        </header>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Mollitia, doloribus ipsa nobis fugiat magni labore obcaecati ducimus libero illo rem? Atque, dolorem et harum est quam ut officia explicabo veniam.</p>
      </section>
      <Footer/> 
    </>
  )
}