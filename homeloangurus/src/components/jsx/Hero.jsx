import "../../index.css"

function Hero(){
    return(
        <>
        <header>
            <div className="bgclr">
                <nav>
                    <h1 className="uppercase text-2xl">homeloangurus</h1>
                </nav>
                <h1 className="mt-24 font-medium sm:text-lg md:text-4xl lg:text-7xl">Poor credit score?</h1>
                <p className="w-[80%] mt-6 ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus a doloribus, molestiae fugiat, mollitia laboriosam tenetur id quibusdam expeLorem ipsum dolor sit amet, consectetur adipisicing elit. Explicabo, natus it amet, consectetur adipisicing elit. Explicabo, natus </p>
                <button className="uppercase mt-12 px-16 py-4 bg-red-600 text-sm rounded">pre-qualify now</button>
            </div>
        </header>
        </>
    )
}
export default Hero;