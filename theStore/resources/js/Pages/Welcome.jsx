import { Link, Head } from '@inertiajs/react';
import { useSelector } from 'react-redux';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';
import Footer from '@/Components/Footer';

function SubNav() {
  return (
   <ul className='flex justify-evenly  absolue top-[80px] items-center  h-[50px]' style={{backgroundColor:"black"}}>
    <li className='flex flex-row text-white items-center gap-1'><a><img src='./imgs/home_machines.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>Machines</p></li>
    <li className=' flex flex-row text-white items-center gap-1'><a><img src='./imgs/clothes.png' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>Clothes</p></li>
    <li className='flex flex-row text-white items-center gap-1'><a><img src='./imgs/school_tools.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>School Tools</p></li>
    <li className='flex flex-row text-white items-center gap-1'><a><img src='./imgs/foods_category.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p> Foods </p></li>
   </ul>
  )
}

function ItemsDisplay({item = {} }) {
  useEffect(()=>{
    console.log(item)
  })
  return (
  
        <div className='flex flex-col  gap-2 rounded-[16px] max-w-[180px] max-h-[180px] mt-5'>
          <img src={item.src} style={{width:200 , height:200, borderRadius:16 , position:"relative" , bottom:20}} className=' '></img>
          <p className='text-md  font-semibold text-center' >{item.name}</p>
        </div>   
    
   
  )
}

function CategoryDisplay({categoryItems = [] , categoryName , top}) {
  useEffect(()=>{
    console.log(categoryItems)
  })
return (
    <section className='absolute  flex flex-col gap-2 w-[100%]' style={{top:top}}>
      <h2 className='text-xl  font-bold text-center font-mono'>{categoryName}</h2>
      <div className=' grid grid-cols-4  justify-items-around gap-2 relative w-[100%]'>
        {categoryItems.map((item ,index)=>  <ItemsDisplay item={item} key={index}/>)}
      </div>
    </section>
)
}

export default function Welcome({ user , routeName }) {
    const machine_categories  =  [{src:"/imgs/desktops.jpg" , name:"desktops"} , {src:"/imgs/laptops_main.jfif" ,name:"laptops"}, {src:"./imgs/washing_machine.jpg" ,name:"washing machines"}, {src:"./imgs/tv.jpg" ,name:"tvs"}]
    const clothes_categories = [{src:"./imgs/women_clothes.jpg" , name:"women clothes"} , {src:"./imgs/man_clothes.jfif" , name:"man clothes"},{src:"./imgs/children_clothes.jpg" , name:"Children Clothes"}]
    const school_tools_categories = [{src:"./imgs/pens.jpg" , name:"pens"} , {src:"./imgs/bag.jpg" , name:"bags"},{src:"./imgs/calc.png" , name:"calculators"}]
    const food_categories = [{src:"./imgs/meat.jpg" , name:"maet"} , {src:"./imgs/fruits.jpg" , name:"fruits"},{src:"./imgs/junk_foods.jpg" , name:"junk foods"},{src:"./imgs/macarony.jpg" , name:"macarony"}]
    return (
      <main>
        <NavBar user={user}/>
        <SubNav/>
        <CategoryDisplay categoryItems={machine_categories} categoryName={"Machines"} top={140}/>
        <hr ></hr>
        <CategoryDisplay categoryItems={clothes_categories} categoryName={"Clothes"} top={440}/>
        <hr></hr>
        <CategoryDisplay categoryItems={school_tools_categories} categoryName={"School Tools"} top={740}/>
        <hr></hr>
        <CategoryDisplay categoryItems={food_categories} categoryName={"Foods"} top={1090}/>
        <Footer top={1500} routeName={routeName}/>
      </main>      
      
    );
}
