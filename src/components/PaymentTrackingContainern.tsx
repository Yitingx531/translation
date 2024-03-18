import React from 'react';
import PaymentHeader from './PaymentHeader';
type prop = {
    correctDate: string,
};

export default function PaymentTrackingContainern():React.JSX.Element{

    return(
    <section>
    <PaymentHeader/>
    </section>
    )
}