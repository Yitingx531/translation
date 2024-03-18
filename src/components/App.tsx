import React from 'react';
import NavContainer from '../components/NavContainer';
import PaymentTrackingContainern from '../components/PaymentTrackingContainern';

type prop = {
    correctDate: string,
};

export default function App(prop: prop):React.JSX.Element{
 
    return(
       <div>
            <NavContainer correctDate={prop.correctDate}/>
            <PaymentTrackingContainern correctDate={prop.correctDate}/>
       </div>
    );
}