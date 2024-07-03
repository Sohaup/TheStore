import { useForm } from "@inertiajs/react";
import TextInput from "@/Components/TextInput";
import InputLabel from "@/Components/InputLabel";
import InputError from "@/Components/InputError";
import { Select } from "@headlessui/react"; 
import PrimaryButton from "@/Components/PrimaryButton";
import NavBar from "@/Components/NavBar";

export default function Edit({item={},user,categories=[]}) {
    const {data , setData , post , processing , errors} = useForm({
        name:item.name,
        src:null,
        category_id:item.category_id
    })
    function handleSubmit(e) {
        e.preventDefault()
        //console.log(data.src)
        post(route('item_update',{'id':item.id}),{
            method:'put'
        })
    }
return (
    <div className="grid flex-col gap-4 w-full">
        <NavBar user={user}/>      
        <div className="flex flex-row  gap-3 relative w-full md:w-[70%] md:mx-[15%] bg-white md:rounded-[16px]">
            <form onSubmit={handleSubmit} encType="multipart/form-data" className="relative w-full"> 
                <div className="flex flex-col justify-center items-center">
                    <h1 className="text-orange-700 text-3xl font-bold">Create Item</h1>
                    <img src={item.src} style={{width:200 , height:200}} className="rounded-lg"/>
                </div>
                <div className="text-center relative w-full">
                <InputLabel htmlFor='name'>Name</InputLabel>
                <TextInput name='name' value={data.name} onChange={(e)=>setData("name",e.target.value)} className='w-[60%]'/>                    
                <InputError message={errors.name}/>
                </div>
                <div className="relative w-full text-center">
                <InputLabel htmlFor='src'>Image</InputLabel>
                <TextInput name='src' type='file' onChange={(e)=>setData("src",e.target.files[0])} className='w-[60%] border-1 border-gray-300 focus:border-blue-400'/>                    
                <InputError message={errors.src}/>
                </div>
                <div className="relative w-full text-center">
                <InputLabel htmlFor='category_id'>Category</InputLabel>
                 <Select name="category_id" defaultValue={data.category_id} onChange={(e)=>setData("category_id",e.target.value)} className={'w-[60%] rounded-md border-1 border-gray-300 focus:border-blue-500 '}>
                    {categories.map((category,index)=><option key={index}>{category.id}</option>)}
                 </Select>          
                <InputError message={errors.category_id}/>  
                </div>
                <div className="relative w-full text-center mt-2 mb-2 ">
                 <PrimaryButton className="bg-green-500 hover:bg-green-700">Edit</PrimaryButton>   
                </div>
            </form>
        </div>
    </div>
)
}