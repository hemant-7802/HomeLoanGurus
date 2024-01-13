import Product from "./Product";
import "../../index.css"
import { Icons,Title,Details } from "./Product";
function Services(){
    return(
        <>
        <section className="services container py-24 h-auto justify-items-center mx-auto grid gap-4 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
            <Product icons={Icons.i1} heading={Title.title1} details={Details.p1}/>
            <Product icons={Icons.i2} heading={Title.title2} details={Details.p2}/>
            <Product icons={Icons.i3} heading={Title.title3} details={Details.p3}/>
        </section>
        </>
    )
}
export default Services;
