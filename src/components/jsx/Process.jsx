import React from "react";
import Product from "./Product";
import { Icons,Title,Details } from "./Product";
function Process(){
    return(
        <div className="processchain container mx-auto text-center pt-10">
            <h1 className="processtitle text-4xl font-medium text-sky-800">This is how it works</h1>
            <div className="cardsec mt-12 p-6 grid grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3 justify-items-center">
                <Product icons={Icons.i4} heading={Title.title4} details={Details.p4}/>
                <Product icons={Icons.i5} heading={Title.title5} details={Details.p5}/>
                <Product icons={Icons.i6} heading={Title.title6} details={Details.p6}/>
            </div>
        </div>
    )
}
export default Process;