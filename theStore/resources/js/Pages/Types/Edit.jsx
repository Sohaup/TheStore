import { useForm } from "@inertiajs/react";
import InputLabel from "@/Components/InputLabel"; 
import InputError from "@/Components/InputError"; 
import { Select } from "@headlessui/react";
import PrimaryButton from "@/Components/PrimaryButton";
import NavBar from "@/Components/NavBar";
import TextInput from "@/Components/TextInput";

export default function Edit({user,categories=[],items=[],type={}}) {
const {data ,setData , post , processing ,errors} = useForm({
    name: type.name,  
    img:null,
    category_id:type.category_id,
    item_id:type.item_id
})
function handleSubmit(e) {
    e.preventDefault()
    post(route('type_update',{'id':type.id}))
}
return (
    <div className="absolute w-full flex flex-col gap-6 ">
        <NavBar user={user}/>
        <div className="relative w-full md:w-[70%] md:mx-[15%] bg-white rounded-lg">
        <div className="relative flex flex-col gap-3 text-center text-green-400 text-4xl justify-center items-center mb-2">
            <h1>Edit Type</h1>
            <img src={type.img} style={{width:200 , height:200}} className="rounded-full "/>
        </div>
        <form onSubmit={handleSubmit} encType="multipart/form-data">
            <div className="realtive w-[70%] text-center mx-[15%] gap-3">
            <InputLabel>Name</InputLabel>
            <TextInput name='namet' value={data.name} onChange={(e)=>setData('name',e.target.value)} className='w-full'/>
            <InputError message={errors.name}/>
            </div>
            <div className="relative w-[70%] text-center mx-[15%] gap-3 ">
            <InputLabel>Img</InputLabel>
            <TextInput type='file' onChange={(e)=>setData('img',e.target.files[0])} className='w-full rounded-md'/>
            <InputError message={errors.img}/>
            </div>
            <div className="relative w-[70%] text-center mx-[15%] gap-3 ">
            <InputLabel>Category Id</InputLabel>
            <Select defaultValue={data.category_id} className='w-full rounded-md' onChange={(e)=>setData('category_id',e.target.value)}>
                {categories.map((category,index)=><option key={index}>{category.id}</option>)}
            </Select>
            <InputError/>
            </div>
            <div className="relative w-[70%] text-center mx-[15%] gap-3 ">
            <InputLabel>Item Id</InputLabel>
            <Select defaultValue={data.item_id} className='w-full rounded-md' onChange={(e)=>setData('item_id',e.target.value)}>
                {items.map((item,index)=><option key={index}>{item.id}</option>)}
            </Select>
            <InputError message={errors.item_id}/>
            </div>
            <div className="relative w-full text-center mt-2 mb-2">
                <PrimaryButton disabled={processing} className="bg-green-500 hover:bg-green-700">Edit</PrimaryButton>
            </div>
        </form>
        </div>
    </div>
)
}