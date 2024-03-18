import React from 'react';
import PaymentHeader from './PaymentHeader';
import FileInfo from './FileInfo';

type prop = {
    correctDate: string,
};

export default function PaymentTrackingContainern(prop: prop):React.JSX.Element{

    return(
    <section>
    <PaymentHeader/>
    <FileInfo/>
    </section>
    )
}