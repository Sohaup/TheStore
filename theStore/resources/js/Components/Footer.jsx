export default function Footer({top , routeName}) {
    return (
        <footer className="absolute w-[100%] bg-orange-400 grid grid-cols-2 justify-item-around " style={{top:top}}>
            <ul className="flex flex-col gap-4">
                <li><a>Store</a></li>
                <li>{routeName == 'main'? <a href="#">About</a> : <a href="/">Main</a> }</li>               
            </ul>
            <h3 className="text-4xl text-center font-bold">All Copy Right Is Saved For TheStore</h3>
        </footer>
    )
}