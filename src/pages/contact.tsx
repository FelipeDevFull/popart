import { Navbar } from "@/components/Navbar";
import Head from 'next/head'
import { Footer } from "@/components/Footer";
import Link from "next/link";

import styles from '@/styles/Contact.module.css'


  export default function Contact() {
  return (
    <>
      <Head>
        <title>POP ART - Contato</title>
        <meta name="description" content="Arte Moderna para a sua vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css"/>
      </Head>
        
        <Navbar/>
        <section className={styles.section_contact}>
            <header>
                <div className={styles.shape_contact}>
                  <h2>Contato</h2>
                </div>
            </header>
            <div className={styles.shape_contact}>
              <ul>
                <li>
                  <Link href='https://www.facebook.com' target="_blank"><i className="fa-brands fa-facebook"></i></Link>
                </li>
                <li>
                  <Link href='https://www.instagram.com/' target="_blank"><i className="fa-brands fa-square-instagram"></i></Link>
                </li>
                <li>
                  <Link href='https://www.whatsapp.com/?lang=pt_br' target="_blank"><i className="fa-brands fa-square-whatsapp"></i></Link>
                </li>
              </ul>
            </div>
            <div className={styles.shape_contact}> 
               <p>
                  <i className="fa-solid fa-location-dot"></i> Rua Nuttings Road 00,<br></br>
                  Jardim América, <br></br>
                  São Paulo, SP
                </p>
            </div>

        </section>
        <Footer/> 
    </>
  )
}