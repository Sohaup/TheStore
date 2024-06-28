
export default function NavBar({user , routeName}) {
    return (
        <nav className='absolue w-[100%] h-[80px]'>
          <ul className='relative w-[100%] flex flex-row justify-evenly bg-orange-400 h-[80px] items-center text-black'>
              <div className="flex flex-row justify-between gap-2 ">
                <li><img src="./imgs/store_logo.svg" style={{width:50 , height:50}} className="rounded-[50%]"></img></li>
                <h1 className="text-md self-center font-bold font-mono transition-all ease duration-[800ms] hover:text-lg hover:text-orange-700">The Store</h1>
              </div>
             <li>{user? <a href={route('profile.edit')}> { user.name }</a> :  <a href={route('register')}> Register</a>}</li>
             <li>{user? <a href={route('dashboard')}> Dahboard </a>: <a href={route('login')}> Login </a> }</li>
            <li hidden><a>Search</a></li>
            <li hidden={routeName == 'main'}><a href="/">Main</a></li>
            <li hidden={routeName == 'main'}><a><img src="./imgs/cart.svg" style={{width:50 , height:50}} className="rounded-[50%]"></img></a></li>
           
         </ul>
      </nav>
    )
}