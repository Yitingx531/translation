import React from "react";


type RowProps = {
    correctDate: string,
    proofreader: string;
    filename: string;
    wordcount: number;
    proofreaderPay: number;
    profit:number;
  }

export default function FileRow(prop: RowProps):React.JSX.Element {
  return (
    <section id='file_info_row'>
        <div id='date'><p>{prop.correctDate}</p></div>
        <div id='file_name'><p>{prop.filename}</p></div>
        <div id='word_count'><p>{prop.wordcount}</p></div>
        <div id='proofreader'><p>{prop.proofreader}</p></div>
        <div id='proofreaderPay'><p>{prop.proofreaderPay}</p></div>
        <div id='profit'><p>{prop.profit}</p></div>
    </section>
  )
}