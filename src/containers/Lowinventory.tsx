import Itemstat from "../components/Itemstat";
import { FaAngleLeft } from "react-icons/fa6";
import { FaAngleRight } from "react-icons/fa6";
import Header from "../components/Header";
import { useState } from "react";


let urlsMap : any = ["/src/assets/avatar.png", "/src/assets/logo.png", "/src/assets/imgtemplate.jpeg"];
let urls: any = []; // api fetched images urls, average sales and inventories levels
let tailleTotalDesDonnes = 10;
for(let i=0;i<tailleTotalDesDonnes;i++){
    urls.push(
        {
            imgUrl: urlsMap[Math.floor(Math.random()*urlsMap.length)],
            inventorylevel: Math.ceil(Math.random()*10),
            avgsales: Math.ceil(Math.random()*10)
        }
    );
}

const Lowinventory = () =>{
    const [sliceEnd, setSliceEnd] = useState(5);
    const [sliceStart, setSliceStart] = useState(0);

    const goToRight = (e: Object)=>{
        console.log("Right ");
        if(sliceEnd != urls.length-1){
            setSliceEnd(sliceEnd+1);
            setSliceStart(sliceStart+1);
            
        }
    }

    const goToLeft = (e: Object)=>{
        console.log("Left");
        if(sliceStart != 0){
            setSliceEnd(sliceEnd-1);
            setSliceStart(sliceStart-1);
        }
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
            <FaAngleLeft className={"text-black w-12 h-10 hover:text-red-500 m-0 my-auto mr-2 "+ (sliceStart==0 ? "opacity-50" : "opacity-1")} onClick={goToLeft} />
            {
                urls.length > 5 ? urls.slice(sliceStart, sliceEnd).map((value:any, index:number)=>{
                    return <Itemstat key={index} imgurl={value.imgUrl} inventorylevel={value.inventorylevel} avgsales={value.avgsales} />;
                })
                :
                urls.map((value:any, index:number)=>{
                    return <Itemstat key={index} imgurl={value.imgUrl} inventorylevel={value.inventorylevel} avgsales={value.avgsales} />;
                })
            }
            <FaAngleRight className={"text-black w-12 h-10 hover:text-red-500 m-0 my-auto mr-2 "+ (sliceEnd==urls.length-1 ? "opacity-50" : "opacity-1")} onClick={goToRight} />
        </div>
        <div className="mt-2 mx-auto w-full flex flex-row justify-center">
            <p className="mx-4 text-sm"> <span className=" inline-block w-2 h-2 bg-red-500"></span> Inventory level</p>
            <p className="mx-4 text-sm"> <span className=" inline-block w-2 h-2 bg-gray-800"></span> Dialy sales averages</p>
        </div>
    </div>
    )
}

export default Lowinventory