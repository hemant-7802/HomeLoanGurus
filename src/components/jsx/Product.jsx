import React from "react";
import { HiOutlineLightBulb } from "react-icons/hi";
import { LiaShippingFastSolid } from "react-icons/lia";
import { PiContactlessPaymentLight } from "react-icons/pi";
import { Bs1CircleFill } from "react-icons/bs";
import { Bs2CircleFill } from "react-icons/bs";
import { Bs3CircleFill } from "react-icons/bs";

const Icons ={
    i1: <PiContactlessPaymentLight />,
    i2: <LiaShippingFastSolid />,
    i3: <HiOutlineLightBulb />,
    i4: <Bs1CircleFill className=" text-red-500 m-auto"/>,
    i5: <Bs2CircleFill className=" text-amber-500 m-auto"/>,
    i6: <Bs3CircleFill className=" text-green-500 m-auto"/>,
}
const Title = {
    title1: 'Low down payment',
    title2: 'Get fast response',
    title3: 'No cost of applying',
    title4: 'Apply online',
    title5: 'Connect with a lender',
    title6: 'Become pre-approved',
    title7: 'homeloangurus',
    title8: 'privacy',
    title9: 'about us',
}
const Details = {
    p1 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor voluptatum qui facere molestiae aliquam. Modi',
    p2 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor voluptatum qui facere molestiae aliquam. Modi',
    p3 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor voluptatum qui facere molestiae aliquam. Modi',
    p4  :'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor ',
    p5 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor ',
    p6 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor ',
    p7 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
    p8 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis ',
    p9 : 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa est non laudantium quis dolor Lorem ipsum dolor, sit amet consectetur adipisicing elit.',
}

function Product({icons="Not Found",heading="Not Found",details="Not Found"}){
    return (
        <>
        <div className="product w-[300px] h-[300px] p-2">
            <i className="icon text-6xl text-sky-800 inline-block">{icons}</i>
            {/* <HiOutlineLightBulb className="icon text-6xl text-sky-800"/> */}
            <h1 className="heading text-2xl font-medium my-4 text-sky-800 ">{heading}</h1>
            <p className="details text-blue-400/75">{details}</p>
        </div>
        </>
    )
}

export default Product;
export {Icons,Title,Details}