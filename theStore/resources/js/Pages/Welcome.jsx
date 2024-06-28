import { Link, Head } from '@inertiajs/react';
import { useSelector } from 'react-redux';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';
import Footer from '@/Components/Footer';
import AboutStore from '@/Components/AboutStore';

function SubNav() {
  return (
   <ul className='flex justify-evenly  absolue top-[80px] items-center  h-[50px]' style={{backgroundColor:"black"}}>
    <li className='flex flex-row text-white items-center gap-1'><a href='#machines'><img src='./imgs/home_machines.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>Machines</p></li>
    <li className=' flex flex-row text-white items-center gap-1'><a href='#clothes'><img src='./imgs/clothes.png' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>Clothes</p></li>
    <li className='flex flex-row text-white items-center gap-1'><a href='#school_Tools'><img src='./imgs/school_tools.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>School Tools</p></li>
    <li className='flex flex-row text-white items-center gap-1'><a href='#Foods'><img src='./imgs/foods_category.jpg' style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p> Foods </p></li>
   </ul>
  )
}

function ItemsDisplay({item = {}  , category}) {
 
  return ( 
    <a href={route('productspath.index',{'category':category , 'item':item.name})}>
      <div className='grid grid-rows-2 justify-item-between transition-all ease duration-[500ms] bg-white hover:drop-shadow-2xl hover:bg-orange-700  rounded-[16px] content-center  ' style={{maxHeight:300}}>
        <div className='flex flex-row justify-center  relative h-[250px] '>
          <img src={item.src} className='object-stretch rounded-[16px] '></img>
        </div>
        <div className='flex flex-row justify-center items-end  '>
          <p className='text-md italic '>{item.name}</p>
        </div>
      </div>
     </a>
     )
}

function CategoryDisplay({categoryItems = [] , categoryName , top ,id}) {
  
return (
    <section className='absolute  flex flex-col gap-2 w-[100%]' style={{top:top}} id={id}>
      <h2 className='text-xl  font-bold text-center font-mono'>{categoryName}</h2>
      <div className=' grid grid-cols-4  justify-items-around gap-2 relative w-[100%]'>
       {categoryItems.map((item ,index)=>  <a href='#'><ItemsDisplay item={item} key={index} category={categoryName}/></a>)}
       
      </div>
    </section>
)
}



export default function Welcome({ user , routeName }) {
    const machine_categories  =  [{src:"/imgs/desktops.jpg" , name:"desktops"} , {src:"/imgs/laptops_main.jfif" ,name:"laptops"}, {src:"./imgs/washing_machine.jpg" ,name:"washing machines"}, {src:"./imgs/tv.jpg" ,name:"tvs"}]
    const clothes_categories = [{src:"./imgs/women_clothes.jpg" , name:"women clothes"} , {src:"./imgs/man_clothes.jfif" , name:"man clothes"},{src:"./imgs/children_clothes.jpg" , name:"Children Clothes"}]
    const school_tools_categories = [{src:"./imgs/pens.jpg" , name:"pens"} , {src:"./imgs/bag.jpg" , name:"bags"},{src:"./imgs/calc.png" , name:"calculators"}]
    const food_categories = [{src:"./imgs/meat.jpg" , name:"meat"} , {src:"./imgs/fruits.jpg" , name:"fruits"},{src:"./imgs/junk_foods.jpg" , name:"junk foods"},{src:"./imgs/macarony.jpg" , name:"macarony"}]
    return (
      <main>
        <NavBar user={user} routeName={routeName}/>
        <SubNav/>
        <CategoryDisplay categoryItems={machine_categories} categoryName={"Machines"} top={140} id={'machines'}/>
     
        <CategoryDisplay categoryItems={clothes_categories} categoryName={"Clothes"} top={540} id={"clothes"}/>
       
        <CategoryDisplay categoryItems={school_tools_categories} categoryName={"School Tools"} top={940} id={"school_Tools"}/>
       
        <CategoryDisplay categoryItems={food_categories} categoryName={"Foods"} top={1290} id={"Foods"}/>
        <AboutStore/>
        <Footer top={2000} routeName={routeName}/>
      </main>      
      
    );
}
