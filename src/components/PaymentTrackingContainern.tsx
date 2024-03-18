import React from 'react';
import PaymentHeader from './PaymentHeader';
import PaymentRow from './PaymentRow';

type prop = {
    correctDate: string,
};

export default function PaymentTrackingContainern(prop: prop):React.JSX.Element{

    return(
    <section>
    <PaymentHeader/>
    </section>
    )
}