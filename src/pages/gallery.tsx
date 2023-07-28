import Head from 'next/head'
import styles from '@/styles/Gallery.module.css'
import { GetServerSideProps } from 'next'
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { CardPost } from "@/components/CardPost";

import { gql } from "@apollo/client"
import { client } from '@/lib/apollo'



const GET_ALL_POSTS = gql`
    query GetAllPosts {
      posts {
        id
        nameArt
        description
        author
        image{
          url
        }
      }
    }
  `

  interface AllPosts {
    posts: {
      id: string;
      nameArt: string;
      description: string;
      author: string;
      lenght: number;
      with: number;
      image:{
        url: string;
      }
    }[]
  }

  export default function Gallery({ posts }: AllPosts) {
  return (
    <>
      <Head>
        <title>POP ART - Galeria</title>
        <meta name="description" content="Arte Moderna para a sua vida" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.png" type="image/x-icon"  />
        <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.2/css/all.min.css"/>
      </Head>
        
        <Navbar/>
        <section className={styles.section_gallery}>
            <header>
                <div className={styles.shape_gallery}>
                  <h2>Galeria</h2>
                </div>
                <p className={styles.sub_title}>Lorem ipsum dolor sit amet, consectetur adipisicing elit.</p>
            </header>
            <div className={styles.section_galerry_cards}>
              {posts.map((post, index) => {
                  return (
                    <CardPost
                      key={post.id}
                      nameArt={post.nameArt}
                      description={post.description}
                      author={post.author}
                      urlImage={post.image.url}
                    />
                  )
                }
              )}
            </div>
        </section>
        <Footer/> 
    </>
  )
}


export const getServerSideProps: GetServerSideProps = async (ctx) => {

  //  await new Promise((resolve) => setTimeout(resolve, 30000))
  const { data } = await client.query({ query: GET_ALL_POSTS })
  return {
    props: {
      posts: data.posts,
    }
  }
}