import PrimaryButton from "@/Components/PrimaryButton"
import NavBar from "@/Components/NavBar"
import Delete from "./Delete"

function ItemDisplay({item={}}) {
    return (
        <div className="grid grid-cols-2 gap-2 bg-white w-full md:w-[70%] md:mx-[15%] md:rounded-xl"> 
            <div className="flex flex-col gap-2 ps-3">
                <p>Name : <span className="text-orange-800 font-mono font-bold text-[19px]">{item.name}</span></p>
                <p> Category id <span className="text-orange-800 font-mono font-bold text-[19px]">{item.category_id}</span> </p>
            </div>  
            <div className="flex flex-col gap-2 justify-self-end">
                <PrimaryButton className="bg-green-500 hover:bg-green-700 text-center"><a href={route('items.edit',{'item':item.id})}>Edit</a></PrimaryButton>
                <Delete item_id={item.id}/>
            </div>         
        </div>
    )
}

export default function Show({items=[] , user}) {
    return (
        <section className="w-full absolue flex flex-col gap-6">
            <NavBar user={user}/>
            <div className="flex flex-col gap-3">{items.map((item,index)=><ItemDisplay item={item} key={index}/>)}</div>
        </section>
    )
}