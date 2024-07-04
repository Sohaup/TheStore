import NavBar from "@/Components/NavBar"
import PrimaryButton from "@/Components/PrimaryButton"
import { useEffect } from "react"
import Delete from "./Delete"

function TypeDisplay({type={}}) {
return (
    <div className=" flex flex-row justify-between bg-white relative w-full md:w-[70%] md:mx-[15%] md:rounded-xl">            
        <div className="relative flex flex-col w-full border-2 border-b-red-300 "> 
        <p> Name <span className="text-orange-400 text-2xl font-bold ">{type.name}</span></p>
        <p> category id <span className="text-orange-400 text-2xl font-bold ">{type.category_id}</span></p>
        <p className="flex flex-row  items-center gap-3">Item Id <span className="text-orange-400 text-2xl font-bold ">{type.item_id}</span> img:  <img src={type.img} style={{width:50 , height:50}} className="rounded-full"></img></p>
        
        </div>
        <div className="flex flex-col gap-2 mt-6 border-2 border-b-red-300">
            <PrimaryButton className="bg-green-500 hover:bg-green-700"><a href={route('types.edit',{'type':type.id})}>Edit</a></PrimaryButton>
            <Delete type_id={type.id}/>
        </div>
        
    </div>
)
}



export default function Show({user,types=[]}) {
    useEffect(()=>{
        console.log(types)
    })
return (
    <div className="flex flex-col absolue w-full gap-6">
        <NavBar user={user}/>
        <div className="flex flex-col w-full">
        {types.map((type,index)=><TypeDisplay key={index} type={type}/>)}
        </div>        
    </div>
)
}