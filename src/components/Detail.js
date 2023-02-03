import React from 'react';
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Image from "next/image";
import {HandThumbUpIcon} from "@heroicons/react/24/outline";

const BASE_URL = "https://image.tmdb.org/t/p/original"

function Detail({result, setIsVisible}) {

    console.log(result);
    return (
        <div className="fixed z-10 ml-20 mt-20 w-[calc(100%_-_10rem)] h-[calc(100%-10rem)]
        bg-black opacity-90">

            <div className={"flex flex-col"}>

                <div className={"flex flex-row justify-end"}>
                    <button className={"absolute z-10 pr-5 pt-5  text-white"} onClick={() => setIsVisible(false)}>
                        Close
                    </button>
                </div>

                <h1 className={" absolute pl-10 pt-5 font-bold text-sm sm:text-xl xl:text-3xl text-white"}>{result.title  || result.original_name}</h1>
                <Image
                    // layout={"responsive"}
                    src={`${BASE_URL}${result.backdrop_path || result.poster_path}`}
                    height={1000}
                    width={1920}
                    alt={"thumbnail"}

                />

                {/*<div className="video-responsive">*/}
                {/*    <iframe*/}
                {/*        width="853"*/}
                {/*        height="480"*/}
                {/*        src={`https://www.youtube.com/embed/ns54tAHmJf0?controls=0`}*/}
                {/*        frameBorder="0"*/}
                {/*        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"*/}
                {/*        allowFullScreen*/}
                {/*        title="Embedded youtube"*/}
                {/*    />*/}
                {/*</div>*/}


                <div className={""}>
                    <p className={"text-xl font-bold "}>Overview</p>
                    <p className={"pt-5 truncate max-w-md"}>{result.overview}</p>

                </div>

            </div>
        </div>
    );
}

export default Detail;

