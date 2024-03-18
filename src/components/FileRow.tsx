import React from "react";


type RowProps = {
    correctDate: string,
    proofreader: string;
    filename: string;
    wordcount: number;
  }

export default function FileRow(prop: RowProps):React.JSX.Element {
  return (
    <section id='file_info_row'>
        <div id='date'>{prop.correctDate}</div>
        <div id='file_name'>{prop.filename}</div>
        <div id='word_count'>{prop.wordcount}</div>
        <div id='proofreader'>{prop.proofreader}</div>
    </section>
  )
}