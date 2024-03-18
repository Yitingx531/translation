import React from 'react';

type prop = {
    correctDate: string,
};
export default function NavContainer(prop: prop):React.JSX.Element{
   
return (
    <section id='navBar_container'>
        <nav>
        <a href=''>Home</a>
        <a href='https://www.linkedin.com/in/yiting-xiao/'>LinkedIn</a>
        <a href='https://github.com/Yitingx531'>Team</a>
        <a href="">Date: {prop.correctDate}</a>
        <div className='animation start-home'></div>
        </nav>
    </section>
)};