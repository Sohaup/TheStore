import { useEffect } from "react"
import PrimaryButton from "@/Components/PrimaryButton"
import NavBar from "@/Components/NavBar"


export default function Index({products=[], itemData , category , user}) {
    useEffect(()=>{
        console.log(category.toLowerCase())
    })
return (
    <div className="absolute w-full">
         <NavBar user={user}/>
    <section className="flex flex-col w-full gap-4 justify-center text-center items-center mt-3 ">
      {products.map((item , index)=>  {
        if (item.item.toLowerCase() == itemData.toLowerCase() && item.category.toLowerCase() == category.toLowerCase()  ) {
               return <CardItem product={item} key={index}/> 
        } else {
            return ""
        }
      } )}      
    </section>
    </div>
)
}

function CardItem({product={} , hidden}) {
   
    return (
        <div className="flex flex-col gap-2 bg-white rounded-lg w-[50%] " hidden={hidden}>
            <div>
                <img src={"/products/"+product.img} className="w-full rounded-lg"></img>
            </div>
            <div>
                <p> name: <sapn className='text-orange-800'>{product.name}</sapn> </p>
                <p>Price: <span className="text-orange-800">{product.price}$</span></p>
                <p>from: <sapn className='text-orange-800'>{product.from}</sapn> </p>
            </div>
            <div>
                <PrimaryButton className="bg-orange-400">Add To Cart</PrimaryButton>
            </div>
        </div>
    )
}