import React from 'react';
import PaymentHeader from './PaymentHeader';
import FileInfo from './FileInfo';

type RowProps = {
  correctDate: string,
  proofreader: string;
  filename: string;
  wordcount: number;
  proofreaderPay: number;
  profit:number;
}

export default function PaymentTrackingContainern(prop: RowProps):React.JSX.Element{

    return(
    <section>
    <PaymentHeader/>
    <FileInfo correctDate={prop.correctDate} proofreader={prop.proofreader} filename={prop.filename} wordcount={prop.wordcount} proofreaderPay={prop.proofreaderPay} profit={prop.profit}/>
    </section>
    )
}