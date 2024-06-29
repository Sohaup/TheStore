import PrimaryButton from "@/Components/PrimaryButton"
import NavBar from "@/Components/NavBar"
import { useEffect , useRef, useState } from "react"
import Delete from "./Delete"

export default function Show({admens=[] , user , users=[]}) {
    //const [admenId , setAdmenId] = useState(null)
    let admenId = null 
    useEffect(()=>{
        console.log(users)
    },[])
return (
    <div className="flex flex-col gap-4 w-full">
        <NavBar user={user}/>

        {admens.map((admen , index)=>{
            return (
                <div className="flex flex-col gap-2 bg-white" key={index}>
                    <div className="text-start ">
                        <p className="flex flex-row gap-2 ps-3 ">
                             admin name : <span className="text-orange-400 font-bold" >{
                             users.map((user)=> {
                                if (user.id == admen.user_id ) {
                                    
                                    return user.name
                                } 
                             })
                             }</span>
                             admin id : <span className="text-orange-400 font-bold">{
                                users.map((user)=>{
                                    if (user.id == admen.user_id) {  
                                        admenId = admen.id                                  
                                        return admen.id
                                    }
                                })
                            }</span>  
                            user id :
                            <span className="text-orange-400 font-bold">
                            {
                                users.map((user)=>{
                                    if (user.id == admen.user_id) { 
                                                                       
                                        return user.id
                                    }
                                })
                            }
                            </span>                           
                        </p>
                    </div>
                    <div className="flex flex-row justify-center gap-3 ">
                        <PrimaryButton className="bg-green-500 hover:bg-green-700">
                            <a href={route('admens.edit',{'admen':admenId})}>Edit</a>
                        </PrimaryButton>
                        <Delete admen_id={admenId}/>
                    </div>
                </div>
            )
        })}
    </div>
)
}