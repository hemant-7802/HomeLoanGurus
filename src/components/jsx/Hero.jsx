import "../../index.css"

function Hero(){
    return(
        <>
        <header className="text-wrap ">
            <div className="bgclr p-6 tablet:p-12 laptop:p-20 desktop:px-28 desktop:py-20">
                <nav className="">
                    <h1 className="uppercase tracking-widest font-medium text-md tablet:text-lg laptop:text-xl desktop:text-2xl"><span>h</span>ome<span>l</span>oan<span>g</span>urus</h1>
                </nav>
                <h1 className="font-medium text-3xl tablet:text-4xl laptop:text-5xl desktop:text-7xl">Poor credit score?</h1>
                <p className="w-[100%] text-blue-300 max-h-28 text-xs tablet:text-sm laptop:text-md desktop:text-lg">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus a doloribus, molestiae fugiat, mollitia laboriosam tenetur id quibusdam expeLorem ipsum dolor sit amet, consectetur </p>
                <button className="uppercase px-16 py-4 bg-red-600 text-sm rounded-lg hover:bg-red-400/75">pre-qualify now</button>
            </div>
        </header>
        </>
    )
}
export default Hero;