import Head from 'next/head'
import Image from 'next/image';
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";

import styles from '@/styles/Home.module.css'


  export default function Home() {
  return (
    <>
      <Head>
        <title>POP ART - HOME</title>
        <meta name="description" content="Arte Moderna para a sua vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      </Head>
        
        <Navbar/>
        <section className={styles.section_home}>
          <header>
            <div className={styles.container_face_title}>
              <div className={styles.section_home_background_title}>
                <h1>POP ART</h1>
                <span>Galeria</span>
              </div>
              <div className={styles.section_home_face_man}>
                <Image src="/FaceHome.png" alt="my-image" fill={true}/>
              </div>
            </div>
          </header>
        </section>
        <Footer/> 
    </>
  )
}



