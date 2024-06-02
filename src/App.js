import React from "react";
import ReactDOM from "react-dom/client";
import { StrictMode } from 'react';
import Counter from "./components/Counter";
import Input from "./components/input";

const Applayout = () =>{
    return (
        <div>
            <StrictMode>
            <Counter/>
            <Input/>
            </StrictMode>
        </div>
    )
}



const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Applayout/>);