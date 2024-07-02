import PrimaryButton from "@/Components/PrimaryButton"
import NavBar from "@/Components/NavBar"
import Delete from "./Delete"

function CategoryDisplay({category={}}) {
    return (
        <div className="flex flex-row gap-4 justify-between mt-2">
            <div className="text-center text-lg p-2  text-orange-800 font-bold">
                <p>{category.name}</p>
            </div>
            <div className="relative flex flex-row gap-3 justify-center  ">
                <a href={route('categoriespath.edit',{'categoriespath':category.id})}><PrimaryButton className="bg-green-500 hover:bg-green-700 h-[40px]">Edit</PrimaryButton></a>
                <Delete category_id={category.id}/>
            </div>
        </div>
    )
}


export default function Show({categories=[],user}) {
    return (
        <div className="w-full flex-col gap-6">
            <NavBar user={user}/>
        <div className="w-full md:w-[70%] md:mx-[15%] mt-4 flex flex-col gap-4 bg-white rounded-lg">
            {categories.map((category,index)=><CategoryDisplay category={category} key={index}/>)}
        </div>
        </div>
    )
}