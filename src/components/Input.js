import { useState } from "react";

const Input = () =>{
    const [inputValue, setInputValue] = useState("");
    return (
        <div>
            <input className="p-3 border-slate-950 border-2" type="text" value={inputValue}
            onChange={(e)=>{
                setInputValue(e.target.value)
            }}
            />
            <button className="p-2 bg-green-500 text-white"
            onClick={()=>{
                console.log(inputValue);
            }}
            >Submit</button>
        </div>
    )
}

export default Input;