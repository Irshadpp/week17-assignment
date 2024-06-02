import { useEffect, useState } from "react";
import ProfileCard from "./ProfileCard";

const Counter = () =>{
    let [count,setCount] = useState(0);
    const [userData, setUserData] = useState({name: "", email: "Loding...."});
    useEffect(()=>{
        console.log("fetch called")
        fetchData();
    },[]); 

    const fetchData = async () =>{
        const data = await fetch("https://jsonplaceholder.typicode.com/users");
        json = await data.json();
        setUserData(json);
    }
    return (
        <div>
        <div className="flex justify-center items-center h-40">
            <button type="botton" className="p-2 px-3 bg-blue-600 text-4xl rounded-lg hover:bg-blue-400"
            onClick={()=>{
                count--;
                setCount(count)
            }}
            >-</button>
            <h1 className="text-6xl px-4">{count}</h1>
            <button type="button" className="p-2 bg-blue-600 text-4xl rounded-lg  hover:bg-blue-400"
            onClick={()=>{
                count++
                setCount(count)
            }}
            >+</button>
            </div>
            <ProfileCard user={userData} count={count}/>
            </div>
    )
}

export default Counter;