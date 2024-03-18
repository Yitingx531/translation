import React, { useEffect } from "react";

type prop ={
    correctDate: string,
};

type Files = {
    proofreader: string;
    filename: string;
    wordcount: number;
};
export default function FileInfo(prop: prop):React.JSX.Element{
    
    
    return (
        <>
        <section id='file_info'>
            <div id='date'>{prop.correctDate}</div>
            <div id='file_name'></div>
            <div id='word_count'></div>
            <div id='proofreader'></div>
            </section>
        </>
    )
}