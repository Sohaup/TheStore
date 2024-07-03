export default function Footer({top , routeName}) {
    return (
        <footer className="absolute w-[100%] bg-orange-400 grid grid-cols-2 justify-item-around relative bottom-0" >
            <ul className="flex flex-col gap-4">
                <li><a>Store</a></li>
                <li>{routeName == 'main'? <a href="#">About</a> : <a href="/">Main</a> }</li>               
            </ul>
            <h4 className="text-4xl text-center font-bold">All Copy Right Is Saved For TheStore</h4>
        </footer>
    )
}