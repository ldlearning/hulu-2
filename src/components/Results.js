import React, {useEffect, useState} from 'react';
import Thumbnail from "./Thumbnail";
import FlipMove from "react-flip-move";
import Detail from "@/components/Detail";

function Results({results, setIsVisible, setResult}) {

    return (
        <div>



            <div className="px-5 my-10 sm:grid md:grid-cols-2 xl:grid-cols-3 3xl:grid-cols-4">

                {results.map((result) => (
                    <Thumbnail key={result.id} result={result}  setIsVisible={setIsVisible} setResult={setResult}/>

                ))}
            </div>
        </div>
    );
}

export default Results;

