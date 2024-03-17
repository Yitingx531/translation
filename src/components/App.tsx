import React from "react";
import NavContainer from "../components/NavContainer";

type prop = {
    correctDate: string,
};

export default function App(prop: prop):React.JSX.Element{
 
    return(
       <div>
            <NavContainer correctDate={prop.correctDate}/>
       </div>
    );
}