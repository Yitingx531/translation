import React from 'react';

type prop = {
    correctDate: string,
};

export default function PaymentHeader():React.JSX.Element{
    
    return(
    <section id='payment_header'>
    <div id='date'>Date</div>
    <div id='file_name'>File Name</div>
    <div id='word_count'>Word Count</div>
    <div id='proofreader'>Proofreader</div>
    <div id='proofreader'>Pay to Proofreader</div>
    <div id='proofreader'>Profit</div>
    </section>
    )
}