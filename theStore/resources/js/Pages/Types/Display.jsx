import NavBar from "@/Components/NavBar";
import PrimaryButton from "@/Components/PrimaryButton";

function TypeDisplay({type={}}) {
return (
  <div className="flex flex-col gap-4 w-[90%] mx-[5%] bg-white rounded-lg ">
    <div className="relative w-full flex flex-row justify-center items-center">
        <p className="text-orange-500 font-bold text-4xl">{type.name}</p>
    </div>
    <div className="relative w-full flex flex-row justify-center items-center">
        <a className="w-full" href="#"><img src={type.img} className="w-full rounded-lg"/></a>
    </div>
    <div className="relative w-full flex flex-row justify-center items-center gap-3 mt-2 mb-2">
        <PrimaryButton className="bg-blue-500 hover:blue-blue-700">Shoping</PrimaryButton>       
    </div>
  </div>
)
}


export default function Display({user , types=[] , item_id , category_id}) {
return (
    <div className="flex flex-col gap-6">
        <NavBar user={user}/>
        <div className="flex flex-col gap-3 ">
            {types.map((type,index)=>{
                if (type.item_id == item_id && type.category_id == category_id ) {
                    return <TypeDisplay type={type} key={index}/>
                } else {
                    return ""
                }
            })}
        </div>
    </div>
)
}