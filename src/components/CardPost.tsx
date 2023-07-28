
import Image from 'next/image';
import React, { useState } from "react";
import styles from '@/styles/Cardpost.module.css'


interface CardPostProps {
  urlImage: string;
  nameArt:string;
  description:string;
  author:string;
}

export function CardPost({nameArt, description, author, urlImage}: CardPostProps) {

  const [ShowModal, setShowModal] = useState(false);

  return (
    <section className={styles.section_galerry_card}>
      <header>
        <Image src={urlImage} alt="imagem da obra de arte" fill={true}/>
        <h3>{nameArt}</h3>
        <hr />
        <div className={styles.section_galerry_card_description} style={ShowModal ? {display: 'block'} : {}}>
          <h4>By {author}</h4>
          <p className=''>{description}</p>
        </div>
        <span onClick={() => setShowModal(!ShowModal)}>Descrição</span>
      </header>
    </section>
  )
}