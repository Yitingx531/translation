import React, { useState } from 'react';
import { useEffect } from 'react';

type prop = {
    correctDate: string,
};
type NewRow = {
    id: number;
    proofreader: string;
    filename: string;
    wordcount: number;
    date: string;
};

export default function NewFileRow(props: prop): React.JSX.Element {
    const [isClicked, setIsClicked] = useState(false);
    const [fileName, setFileName] = useState('');
    const [wordCount, setWordCount] = useState<number | undefined>(0);
    const [proofreader, setProofreader] = useState('');

    const newRow: NewRow = {
        id: Math.floor(Math.random() * 10000),
        proofreader: proofreader,
        filename: fileName,
        wordcount: wordCount || 0,
        date: props.correctDate
    };

    const handleClick = async () => {
        setIsClicked(true);
        try {
            const response = await fetch('api/proofreading', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(newRow),
            });
            if (!response.ok) {
                throw new Error('Failed to post new user to the database');
            }
            console.log('User successfully added to the database');
        } catch (error: any) {
            console.log(error.message);
        }
    }
  
    return(
        <>
     <section id='new_file_row'>
                <div id='row_date'>{props.correctDate}</div>
                <input id='row_file_name' value={fileName} onChange={(e) => setFileName(e.target.value)} />
                <input id='row_word_count' type="number" value={wordCount} onChange={(e) => setWordCount(parseInt(e.target.value))} />
                <input id='row_proofreader' value={proofreader} onChange={(e) => setProofreader(e.target.value)} />
            </section>
            <button onClick={handleClick}>Send File</button>
    </>
    )
    };