import React from 'react';
import NavContainer from '../components/NavContainer';
import PaymentTrackingContainern from '../components/PaymentTrackingContainern';
import NewFileRow from './NewFileRow';

type RowProps = {
  correctDate: string,
  proofreader: string;
  filename: string;
  wordcount: number;
  proofreaderPay: number;
  profit:number;
}

export default function App(prop: RowProps):React.JSX.Element{
 
    return(
       <div>
            <NavContainer correctDate={prop.correctDate}/>
            <PaymentTrackingContainern correctDate={prop.correctDate} proofreader={prop.proofreader} filename={prop.filename} wordcount={prop.wordcount} proofreaderPay={prop.proofreaderPay} profit={prop.profit}/>
            <NewFileRow correctDate={prop.correctDate}/>
       </div>
    );
}