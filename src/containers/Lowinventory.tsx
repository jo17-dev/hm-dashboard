import Itemstat from "../components/Itemstat";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Header from "../components/Header";
import { useState } from "react";



const Lowinventory = () =>{
    const ItemStatsContainer = () => {
        const items: any =[];
        for(let i=0; i<6;i++){
            items.push(<Itemstat key={i} imgurl="/src/assets/avatar.png" inventorylevel={Math.ceil(Math.random()*10)} avgsales={Math.ceil(Math.random()*10)} />);
        }
        
        return (
        <>
            {items}
        </>
        )
    }

    return(
        <div className="mt-4">
        <Header
         title="Low inventory"
         option={[
            {displayedcontent:"Lowest", value:"lowest"},
            {displayedcontent: "Biggest", value:"biggest"}
            ]}
         placeholder="Search"
         inputClass="mx-4 border-b border-gray-400"
        />
        <div className="flex flex-row">
            <FaAngleLeft className="text-black w-12 h-10 hover:text-red-500 m-0 my-auto mr-2" />
            <ItemStatsContainer />
            <FaAngleRight className="text-black w-12 h-10 hover:text-red-500 m-0 my-auto mr-2" />
        </div>
        <div className="mt-2 mx-auto w-full flex flex-row justify-center">
            <p className="mx-4 text-sm"> <span className=" inline-block w-2 h-2 bg-red-500"></span> Inventory level</p>
            <p className="mx-4 text-sm"> <span className=" inline-block w-2 h-2 bg-gray-800"></span> Dialy sales averages</p>
        </div>
    </div>
    )
}

export default Lowinventory