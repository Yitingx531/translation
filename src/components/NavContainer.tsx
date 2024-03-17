import React from "react";
import { isJsxElement } from "typescript";

type dateArr = string[];
type months = {
    [key: string] : string,
};
export default function NavContainer():React.JSX.Element{
    const d = new Date();
    const date = d.toDateString();
    const months: months = {
         Jan: '01',
         Feb: '02',
         Mar: '03',
         Apr: '04',
         May: '05',
         Jun: '06',
         Jul: '07',
         Aug: '08',
         Sep: '09',
         Oct: '10',
         Nov: '11',
         Dec: '12',
    }
        
    const dateArr: dateArr = date.split(' ');
    dateArr.splice(0, 1);
    for (let i = 0; i < dateArr.length; i++){
      if (months.hasOwnProperty(dateArr[i])){
    }
    }
    let correctDate = dateArr[2]+'-'+dateArr[0]+'-'+dateArr[1];
return (
    <section>
      <div id="date">
       {correctDate}
      </div>
    </section>
)};