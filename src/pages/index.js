import Head from 'next/head'
import Image from 'next/image'
import {Inter} from '@next/font/google'
import styles from '@/styles/Home.module.css'
import Header from "@/components/Header";
import Nav from "@/components/Nav";
import Results from "@/components/Results";
import requests from "@/utils/requests";
import React, {useEffect, useState} from "react";
import Detail from "@/components/Detail";

const inter = Inter({subsets: ['latin']})

const IMDB_URL = "https://api.themoviedb.org/3/";

export default function Home({results}) {
    // console.log(results);
    const [isVisible, setIsVisible] = useState(false);

    const [result, setResult] = useState(null);

    function updateVisibility (visibility) {
        setIsVisible(visibility);
    }

    useEffect(() => {
        console.log(isVisible);
    }, [isVisible]);

    return (
        <>
            {isVisible ?
                <>
                    <Detail setIsVisible={setIsVisible} result={result}/>
                </> : null

            }

            <div className={isVisible ? "blur" : ""}>
            <Head>
                <title>Hulu 2.0</title>
                <link rel="icon" href={"/favicon.ico"}/>
            </Head>

            <Header></Header>
            <Nav></Nav>


            <Results results={results}  setIsVisible={setIsVisible} setResult={setResult}></Results>
            </div>
        </>
    )
}

export async function getServerSideProps(context) {
    const genre = context.query.genre;
    const request = await fetch(`${IMDB_URL}${requests[genre]?.url || requests.fetchTrending.url}`)
        .then(res => res.json());
    console.log(request.results);
    return {
        props: {
            results: request.results
        }
    }
}
