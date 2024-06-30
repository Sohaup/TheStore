import { Link, Head } from '@inertiajs/react';
import { useSelector } from 'react-redux';
import NavBar from '@/Components/NavBar';
import { useEffect } from 'react';
import Footer from '@/Components/Footer';
import AboutStore from '@/Components/AboutStore';

function SubNav({categories=[]}) {
  return (
   <ul className='flex justify-evenly  absolue top-[80px] items-center  h-[50px]' style={{backgroundColor:"black"}}>
    {categories.map((category , index)=>{
      return <li key={index} className='flex flex-row text-white items-center gap-1'><a href={'#'+category.name.toLowerCase()}><img src={category.img} style={{width:50 , height:50}} className='rounded-[16px]'></img></a> <p>{category.name}</p></li>    
    })}
   </ul>
  )
}

function ItemsDisplay({item = {}  , category}) {
 
  return ( 
   
      <div className='w-full grid grid-rows-2 justify-item-between transition-all ease duration-[500ms] bg-white hover:drop-shadow-2xl hover:bg-orange-200  rounded-[16px] content-center  ' style={{maxHeight:300}}>
        <div className='flex flex-row justify-center  relative h-[250px] '>
          <img src={item.src} className='object-stretch rounded-[16px] '></img>
        </div>
        <div className='flex flex-row justify-center items-end  '>
          <p className='text-md italic '>{item.name}</p>
        </div>
      </div>
     
     )
}

function CategoryDisplay({categoryItems = [] , categoryName , categoryId }) {
  
return (
    <section className='flex flex-col gap-4' id={categoryName.toLowerCase()}>
      <div className='bg-orange-100 mx-3 rounded-lg text-center'>
        <hr vh></hr>
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
        <section className='absolute top-[200px] flex flex-col gap-4'>
          {categories.map((category , index) => {
            return <CategoryDisplay categoryName={category.name} categoryItems={items} categoryId={category.id} key={index}/>
          })}
        </section>
        <AboutStore/>
        <Footer top={2000} routeName={routeName}/>
      </main>      
      
    );
}
