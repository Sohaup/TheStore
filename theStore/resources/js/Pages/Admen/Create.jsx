import InputLabel from "@/Components/InputLabel";
import TextInput from "@/Components/TextInput";
import PrimaryButton from "@/Components/PrimaryButton";
import InputError from "@/Components/InputError";
import { useForm } from "@inertiajs/react";
import ApplicationLogo from "@/Components/ApplicationLogo";

export default function Create({users=[] , auth_id}) {
    const {data , setData , post , processing , errors} = useForm({
        user_id:'2'
    })
    function handleSubmit(e) {
        e.preventDefault()
        post(route('admens.store'))
    }
    return (
       <div className="w-full  md:w-[50%] bg-white flex flex-col mt-[10%]  rounded-lg md:ms-[25%]">
        <div className="flex flex-col gap-3 justify-center items-center">
            <h1 className="text-center text-orange-700 text-2xl font-bold">Insert Admen</h1>
             <a href="/"><ApplicationLogo style={{width:50 , height:50}} /></a>
        </div>
         <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
            <div className="flex flex-col gap-2 justify-center w-full">
            <InputLabel>user id</InputLabel>
            <select  value={data.user_id} onChange={(e)=>setData("user_id",e.target.value)} name="user_id" className="border-gary-500 rounded-lg ">
              
                {users.map((user , index)=> {
                    if( user.id != 1 && user.id != null && user.id != auth_id  ) {
                        return   <option key={index}>{user.id}</option>
                    } else {
                        return ""
                    }               
                }
            )}              
                
                    
                
            </select>
            <InputError message={errors.user_id}/>
            </div>
            <div className="w-full flex flex-row justify-center items-center mb-2">
            <PrimaryButton disabled={processing} className="text-center w-25 ">Insert</PrimaryButton>
            </div>
           
        </form>
       </div>
    )
}

