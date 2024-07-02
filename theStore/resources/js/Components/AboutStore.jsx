export default function AboutStore() {
    return (
        <article className="grid grid-rows-2 gap-4 mt-4 bg-white absolute top-[1700px] md:left-[8%] md:w-[80%] sm:w-full h-[200px] justify-items-center md:mx-2 md:rounded-xl">
            <h3 className="text-4xl text-orange-400 font-mono hover:text-orange-700 transition-all ease-out duration-[800ms] italic" >Welcome In The Store</h3>
            <div className="bg-orange-200 text-center  relative w-[80%] transition-all ease-in duration-[800ms]  hover:drop-shadow-2xl rounded-[16px] hover:scale-[1.2] flex flex-col gap-4 justify-center">
                <p className="text-md text-black font-sans">
                    in theStore You Can Buy Products Or 
                    Open Your Store and grew Your Besuness
                </p>
                <button className="bg-transparent ring-1 ring-orange-800 text-center w-[100px] self-center rounded-[16px] hover:bg-orange-400 transition-all ease duration-[800ms] ">
                    <p className="font-serif">Start Now</p>
                </button>
            </div>
        </article>
    ) 
}