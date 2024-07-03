import { Link, Head } from '@inertiajs/react';
import { useSelector } from 'react-redux';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';
import Footer from '@/Components/Footer';
import AboutStore from '@/Components/AboutStore';

function SubNav({categories=[]}) {
  return (
   <ul className=' w-full flex justify-evenly flex-wrap absolue top-[80px] items-center  ' style={{backgroundColor:"black"}}>
    {categories.map((category , index)=>{
      return <li key={index} className='flex flex-row text-white items-center gap-1'><a href={'#'+category.name.toLowerCase()}><img src={category.img} style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>{category.name}</p></li>    
    })}
   </ul>
  )
}

function ItemsDisplay({item = {}  , category}) {
 
  return ( 
   
      <div className='w-full grid grid-rows-2 justify-item-between transition-all ease duration-[500ms] bg-orange-200 drop-shadow-2xl shadow-2xl hover:bg-orange-400  rounded-[16px] content-center  ' style={{maxHeight:300}}>
        <div className='flex flex-row justify-center  relative w-full h-[250px] '>
          <img src={item.src} className='object-stretch rounded-[16px] w-full '></img>
        </div>
        <div className='flex flex-row justify-center items-end '>
          <p className='text-md italic '>{item.name}</p>
        </div>
      </div>
     
     )
}

function CategoryDisplay({categoryItems = [] , categoryName , categoryId }) {
  
return (
    <section className='flex flex-col gap-4' id={categoryName.toLowerCase()}>
      <div className='bg-orange-100 mx-3 rounded-lg text-center'>
        <hr vh={true}></hr>
        <h2 className='text-2xl text-orange-700 font-bold'>{categoryName}</h2>
        <hr vh></hr>
      </div>
      <div className='flex flex-row gap-2'>
       {categoryItems.map((item , index)=> {
        if (item.category_id == categoryId) {
        return <ItemsDisplay item={item} key={index}/>
        }
       })}
      </div>
    </section>
)
}



export default function Welcome({ user , routeName , categories=[] , items=[] }) {
    
    useEffect(()=>{
      console.log(items , categories)
    })
    return (
      <main>
        <NavBar user={user} routeName={routeName}/>
        <SubNav categories={categories} />
        <section className='absolute w-full bg-white top-[200px] flex flex-col gap-4'>
          {categories.map((category , index) => {
            return <CategoryDisplay categoryName={category.name} categoryItems={items} categoryId={category.id} key={index}/>
          })}
           <Footer  routeName={routeName} />
        </section>
       
       
      </main>      
      
    );
}
