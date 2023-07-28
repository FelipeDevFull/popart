import Link from "next/link";
import styles from '@/styles/Navbar.module.css'
import React, { useState } from "react";



export function Navbar() {

  const [ShowModal, setShowModal] = useState(false);

  return (
    <header className={styles.menu}>
      <div className={styles.logo}>
      <Link href='/'><span>POP ART</span></Link>
      </div>
      {/* {ShowModal ? ( */}
        <nav className={styles.menu} style={ShowModal ? {height: '92vh'} : {}}>
            <ul>
              <li>
                <Link href='/' onClick={() => setShowModal(!ShowModal)}>Home</Link>
              </li>
              <li>
                <Link href='about' onClick={() => setShowModal(!ShowModal)}>Quem Somos</Link>
              </li>
              <li>
                <Link href='gallery' onClick={() => setShowModal(!ShowModal)}>Galeria</Link>
              </li>
              <li>
                <Link href='contact' onClick={() => setShowModal(!ShowModal)}>Contato</Link>
              </li>
            </ul>  
        </nav>
        {/* ): null} */}
        <div  className={styles.container_menu_icon}>
          <i className="fa fa-bars menu-toggle" aria-hidden="true" onClick={() => setShowModal(!ShowModal)}></i>
        </div>  
    </header>
  )
}