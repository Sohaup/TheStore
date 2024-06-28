import InputError from "@/Components/InputError"
import InputLabel from "@/Components/InputLabel"
import TextInput from "@/Components/TextInput"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from "@inertiajs/react"
import { useRef , useState } from "react"
import ApplicationLogo from "@/Components/ApplicationLogo"

export default function Create() {
    const imgRef = useRef(null)
    const [img , setImage] = useState(null)
    const {data , setData , post , processing , errors , reset} = useForm({
        name:"",
        price:0,
        category:"",
        item:"",
        img:File,
        from:""
    })
    
    function handleSubmit(e) {
        e.preventDefault()
        post(route('productspath.store'))
    }
    return (
        
         <div className="w-full md:w-[50%] mt-6 px-6 py-4 bg-white shadow-md overflow-hidden rounded-lg absolute md:left-[25%]">
            <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="mb-4 flex flex-col gap-3 justify-center">
                    <h1 className="text-5xl text-orange-700 text-center">Create Product</h1>
                    <a href="/"><ApplicationLogo style={{width:50 , height:50}} className="relative left-[48%]"/></a>
                </div>
            <div>
                <InputLabel htmlFor='name'>Name</InputLabel>
                <TextInput value={data.name} onChange={(e)=>setData('name',e.target.value)} name='name'  type='text' className='block w-full'/>
                <InputError message={errors.name}/>
            </div>
            <div>
            <InputLabel htmlFor='price'>Price</InputLabel>
             <TextInput value={data.price} onChange={(e)=>setData('price',e.target.value)} name='price' type='number' className='block w-full'/>
             <InputError message={errors.price}/>
            </div>
            <div>
            <InputLabel htmlFor='category'>Category</InputLabel>
             <select value={data.category} onChange={(e)=>setData('category',e.target.value)} name='category' type='text' className='block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm '>
                <option>machines</option>
                <option>clothes</option>
                <option>school tools</option>
                <option>foods</option>
             </select>
             <InputError message={errors.category}/>
            </div>
            <div>
            <InputLabel htmlFor='item'>Item</InputLabel>         
            <select  value={data.item} onChange={(e)=>setData('item',e.target.value)} name='item' type='text' className='block w-full border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 rounded-md shadow-sm '>   
                <option  hidden={data.category } selected >{data.category == ""? "Select Valid caregory" : "Select Item"} </option>
               
                 <option hidden={data.category != "machines"}>desktops</option>
                 <option  hidden={data.category != "machines"}>desktops</option>
                 <option  hidden={data.category != "machines"}>washing machines</option>
                
             
                 <option  hidden={data.category != "clothes"}>Man Clothes</option>
                 <option  hidden={data.category != "clothes"}>Womens Clothes</option>
                 <option  hidden={data.category != "clothes"}>Children Clothes</option>
               
                  <option  hidden={data.category != "school tools"}>Pens</option>
                  <option  hidden={data.category != "school tools"}>Pags</option>
                  <option  hidden={data.category != "school tools"}>Calculator</option>
                
                 <option  hidden={data.category != "meats"}>meats</option>
                 <option  hidden={data.category != "meats"}>fruits</option>
                 <option  hidden={data.category != "meats"}>junk foods</option>
                 <option  hidden={data.category != "meats"}>macarony</option>
                
             </select>
             <InputError message={errors.item}/>
            </div>
            <div>
            <InputLabel htmlFor='from'>From</InputLabel>
             <TextInput value={data.from} onChange={(e)=>setData('from',e.target.value)} name='from' type='text' className='block w-full'/>
             <InputError message={errors.from}/>
            </div>
            <div>
            <InputLabel htmlFor='img'>Img</InputLabel>
             <TextInput  onChange={(e)=>setData('img',e.target.files[0])} name='img' type='file' className='block w-full ring-2 ring-gary-500 '/>
             <InputError message={errors.img}/>
            </div>
            <div className="mt-2 text-center">
                <PrimaryButton disabled={processing}>Submit</PrimaryButton>
            </div>
            </form> 
         </div>
        
    )
}