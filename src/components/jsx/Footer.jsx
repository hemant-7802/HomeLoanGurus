import React from "react";
import Product from "./Product";
import { Title,Details } from "./Product";
function Footer(){
    return(
        <>
        <div className="ask bg-sky-100 text-center pt-20">
            {/* <Product heading={Title.title7} details={Details.p7}/> */}
            <h1 className="text-sky-900 text-3xl font-medium mb-6 tablet:text-4xl laptop:text-4xl desktop:text-5xl">Find the right loan for you</h1>
            <p className="text-sky-600/75 text-md mx-12 tablet:text-lg tablet:mx-28 laptop:text-lg laptop:mx-40 desktop:text-xl desktop:mx-56">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
            <button className="uppercase my-16 bg-red-600 px-16 py-4 text-white rounded-md hover:bg-red-400/75">pre-qualify now</button>
        </div>
        <footer>
            <div className="container mx-auto py-14 footer grid gap-4 grid-cols-1 justify-items-center tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
                <Product heading={Title.title7} details={Details.p7}/>
                <Product heading={Title.title8} details={Details.p8}/>
                <Product heading={Title.title9} details={Details.p9}/>
            </div>
        </footer>
        </>
    )
}
export default Footer;