import React, { useEffect, useState } from "react";

type prop ={
    correctDate: string,
};

type Files = {
    proofreader: string;
    filename: string;
    wordcount: number;
};

export default function FileInfo(prop: prop):React.JSX.Element{
    const [fileName, setFileName] = useState('');
    const [wordCount, setWordCount] = useState<number | undefined>(0);
    const [proofreader, setProofreader] = useState('');
    useEffect(() => {
        const fetchData = async() => {
            try{
                const response = await fetch('/');
                const data = await response.json();
                
                console.log('data', data)
                setFileName(data.filename);
                setWordCount(data.wordcount);
                setProofreader(data.proofreader);
            } catch (error: any){
                console.log(error.message);
            }
        }
        fetchData();
    }, []);
    
    return (
        <>
        <section id='file_info'>
            <div id='date'>{prop.correctDate}</div>
            <div id='file_name'>{fileName}</div>
            <div id='word_count'>{wordCount}</div>
            <div id='proofreader'>{proofreader}</div>
            </section>
        </>
    )
}