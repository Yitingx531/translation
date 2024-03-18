import React, { useEffect, useState } from 'react';

type RowProps = {
    correctDate: string;
    proofreader: string;
    filename: string;
    wordcount: number;
}

export default function FileInfo(props: RowProps): React.ReactElement {
    // Initialize state
    const [files, setFiles] = useState<any[]>([]);

    // Fetch data from API
    useEffect(() => {
        fetch('/api/proofreading')
            .then(response => response.json())
            .then(data => {
                const rows = data.map((file: any) => ({

                    date: file.date.slice(0, 10),
                    filename: file.filename,
                    wordcount: file.wordcount,
                    proofreader: file.proofreader
                }));
                setFiles(rows);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);
    return (
        <section id='file_info'>
            {files.map((file, index) => (
                <div key={index}>
                    <div id='date'>{file.date}</div>
                    <div id='file_name'>{file.filename}</div>
                    <div id='word_count'>{file.wordcount}</div>
                    <div id='proofreader'>{file.proofreader}</div>
                </div>
            ))}
        </section>
    );
}