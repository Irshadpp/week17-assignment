

const ProfileCard = ({user, count}) =>{
    // const [userData, setUserData] = useState({name:"", email:""});

    // useEffect(()=>{
    //     fetchData(userId)
    // },[userId]);

    // const fetchData = async (userId) =>{
    //     const data = await fetch("https://jsonplaceholder.typicode.com/users/"+userId);
    //     const json = await data.json();
    //     setUserData(json);
    // }
    // console.log(user)
    if(user.length>1){
        user = user[count];
    }
    if(!user){
        user = {name: "", email: "In this number no data found!"}
    }

    return (
        <div className="w-auto h-60 bg-gray-300 m-5 flex justify-center ">
            <div className="">
            <h1 className="mt-16 font-extrabold text-4xl">{user.name}</h1>
            <div className="flex justify-center">
            <h2 className="font-bold text-2xl my-4">{user.email}</h2>
            </div>
            </div>
        </div>
    )
}

export default ProfileCard;