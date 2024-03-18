import React from 'react';
import App from './components/App';
import { createRoot } from 'react-dom/client';
import './static/styles.scss';

type RowProps = {
    correctDate: string,
    proofreader: string;
    filename: string;
    wordcount: number;
  };

type dateArr = string[];
type months = {
    [key: string]: string
};

const d = new Date();
            const date = d.toDateString();
            const months = {
                Jan: '01',
                Feb: '02',
                Mar: '03',
                Apr: '04',
                May: '05',
                Jun: '06',
                Jul: '07',
                Aug: '08',
                Sep: '09',
                Oct: '10',
                Nov: '11',
                Dec: '12',
            };
            const dateArr = date.split(' ');
            dateArr.splice(0, 1);
            for (let i = 0; i < dateArr.length; i++) {
                if (months.hasOwnProperty(dateArr[i])) {
                }
            }
            let correctDate = dateArr[2] + '-' + dateArr[0] + '-' + dateArr[1];
const root = createRoot(document.getElementById('root')!);
root.render(<App correctDate={correctDate} proofreader='' filename='' wordcount={0}/>);