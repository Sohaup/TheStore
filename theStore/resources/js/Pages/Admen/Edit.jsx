import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";
import { Select } from "@headlessui/react";
//import Selec

export default function Edit({users=[] , auth_id , admen_id}) {
    const {data , setData , put , processing , errors} = useForm({
        user_id:admen_id
    })
    function handleSubmit(e) {
        e.preventDefault()
        put(route('admens.update',{'admen':admen_id}))
    }
    return (
       <div className="w-full  md:w-[50%] bg-white flex flex-col mt-[10%]  rounded-lg md:ms-[25%]">
        <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-center text-orange-700 text-2xl font-bold">Edit Admin</h1>
             <a href="/"><ApplicationLogo style={{width:50 , height:50}} /></a>
        </div>
         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 justify-center w-full">
            <InputLabel>user id</InputLabel>
             <Select value={data.user_id}  onChange={(e)=>setData("user_id",e.target.value)} name="user_id" className={"border-gary-500 rounded-lg"} >
               {users.map((user,index)=>{
                if ( user.id != null  ) {
                    return <option key={index}>{user.id}</option> 
                } else {
                   return  ""
                }
               })}
             </Select>  
                          
             
             <InputError message={errors.user_id}/>
            </div>
            <div className="w-full flex flex-row justify-center items-center mb-2">
            <PrimaryButton disabled={processing} className="text-center w-25 bg-green-500 hover:bg-green-700 ">Edit</PrimaryButton>
            </div>
           
        </form>
       </div>
                    
            
    )
}

