import React, { useEffect, useState } from 'react';
import FileRow from './FileRow';
type RowProps = {
    correctDate: string;
    proofreader: string;
    filename: string;
    wordcount: number;
}

export default function FileInfo(props: RowProps): React.ReactElement {
    const [rows, setRows] = useState<React.ReactNode[]>([])
    // Fetch data from API
    useEffect(() => {
        fetch('/api/proofreading')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }
                return response.json();
            })
            .then(data => {
                // Render rows based on fetched data
                const rows = data.map((file: any) => (
                    <FileRow key={file.id} correctDate={file.date.slice(0, 10)} proofreader={file.proofreader} filename={file.filename} wordcount={file.wordcount} proofreaderPay={Math.floor(file.wordcount/1000*10)}/>
                ));
                setRows(rows);
            })
            .catch(error => console.error('Error fetching data:', error));
    }, []);

    return (
        <section id='file_info'>
            {rows}
        </section>
    );
}