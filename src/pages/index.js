import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";

const inter = Inter({ subsets: ['latin'] })

const IMDB_URL = "https://api.themoviedb.org/3/";

export default function Home({results}) {
    // console.log(results);
  return (
    <>
        <Head>
            <title>Hulu 2.0</title>
            <link rel="icon" href={"/favicon.ico"} />
        </Head>

        <Header></Header>
        <Nav></Nav>
        <Results results={results}></Results>
    </>
  )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(`${IMDB_URL}${requests[genre]?.url || requests.fetchTrending.url}`)
        .then(res => res.json());
    return {
        props: {
            results: request.results
        }
    }
}
