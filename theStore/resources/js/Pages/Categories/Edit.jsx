import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel"
import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from "@inertiajs/react" 
import ApplicationLogo from "@/Components/ApplicationLogo"
import NavBar from "@/Components/NavBar"
import { useRef ,useState } from "react"
import axios from "axios" 

export default function Edit({user , category={}, category_id}) {
    const {data , setData ,post,put, processing ,errors}  = useForm({
    name:category.name,
    img: null
   })  
   async function handleSubmit(e) {
    e.preventDefault()    
    post(route('category_update',{'id':category_id}),{
        method:"put"
    })  
   
   }
   return (
    <div className="flex flex-col gap-6 ">      
         <NavBar user={user}/>    
        <div className="flex flex-col absolue w-full gap-4 mt-4 bg-white md:w-[70%] md:mx-[15%] rounded-xl">
        <div className="flex flex-col gap-3 items-center">
            <h1 className="text-green-400 text-center text-4xl ">Edit Category</h1>
            <img src={category.img} width={200} height={200} className="rounded-xl"/>
        </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data" >
                <div className="relative w-full text-center">
                    <InputLabel htmlFor='name'>Name</InputLabel>
                    <input name='name' type='text' value={data.name} onChange={(e)=>setData('name' , e.target.value)} className="border-1 border-indigo-400 rounded-xl w-[60%]" />
                    <InputError message={errors.name}/>
                </div>
                <div className="relative w-full text-center">
                    <InputLabel htmlFor='img'>Image</InputLabel>
                    <TextInput name='img' type='file'onChange={(e)=>setData("img" , e.target.files[0])} className='w-[60%] border-2 border-gray-200 '/>
                    
                    <InputError message={errors.img}/>
                </div>
                <div  className="relative w-full text-center mt-2 mb-2">
                    <PrimaryButton className="bg-green-500 hover:bg-green-700" type='submit'>Edit</PrimaryButton>
                </div>
            </form>
        </div>
    </div>
   )
}