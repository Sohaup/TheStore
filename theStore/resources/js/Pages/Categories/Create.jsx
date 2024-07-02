import TextInput from "@/Components/TextInput"
import InputLabel from "@/Components/InputLabel"
import InputError from "@/Components/InputError"
import PrimaryButton from "@/Components/PrimaryButton"
import { useForm } from "@inertiajs/react" 
import ApplicationLogo from "@/Components/ApplicationLogo"
import NavBar from "@/Components/NavBar"

export default function Create({user}) {
    const {data , setData , post , processing , errors} = useForm({
        name:"",
        img:null
    })
    function handleSubmit(e) {
        e.preventDefault()
        console.log(data.img)
        post(route('categoriespath.store'))
    }
    return (
        <div className="w-full flex flex-col gap-4">
            <NavBar user={user} />
        <div className="w-full md:w-[70%] bg-white relative md:left-[15%] mt-4 flex flex-col gap-3 md:rounded-xl">
            <div className="text-center">
                <h1 className="text-orange-400 font-bold font-mono text-2xl">Add Category</h1>
            </div>
            <div className="relative w-full translate-x-[48%]">
                <a href="/" className="text-center"><ApplicationLogo style={{width:50 , height:50  }}/></a>
            </div>
            <form onSubmit={handleSubmit} encType="multipart/form-data">                
                <div className="relative w-full text-center">
                    <InputLabel htmlFor='name'>Name</InputLabel>
                    <TextInput name="name" value={data.name} onChange={(e)=>setData("name" , e.target.value)} className='w-[60%]'/>
                     <InputError message={errors.name}/>   
                </div>
                <div className="relative w-full text-center">
                    <InputLabel htmlFor='img'>Category Image</InputLabel>
                    <TextInput name='img' type='file' onChange={(e)=>setData("img" , e.target.files[0])} className='w-[60%] border-2 border-gray-200'/>
                    <InputError message={errors.img}/>
                </div>
                <div className="text-center mt-2 mb-2">
                    <PrimaryButton className="text-center">Add</PrimaryButton>
                </div>
            </form>
        </div>
       </div>
    )
}