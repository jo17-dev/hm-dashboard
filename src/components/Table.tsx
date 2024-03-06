import { FaAngleUp, FaAngleDown } from "react-icons/fa";
import Avatar from "./Avatar";
import Button from "./Button";
import { useState } from "react";
import { useEffect } from "react";

const Table = (props: any)=>{
    // Handle search function: when the textToSearch is updated, we just use it to sort the datas

    const [datas, setDatas] = useState([
        {itemId:'90C0361', imgUrl: "/src/assets/imgtemplate.jpeg"  ,itemName: "Black Dress 2", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
        {itemId:'90C0362', imgUrl: "/src/assets/logo.png"  ,itemName: "HM logo", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
        {itemId:'90C0363', imgUrl: "/src/assets/avatar.png"  ,itemName: "Yellow Helmet", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
        {itemId:'90C0363', imgUrl: "/src/assets/avatar.png"  ,itemName: "Yellow Helmet", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
        {itemId:'90C0364', imgUrl: "/src/assets/imgtemplate.jpeg"  ,itemName: "Black dress", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120}
    ]);

    const resetDatas =()=>{
        setDatas([
            {itemId:'90C0361', imgUrl: "/src/assets/imgtemplate.jpeg"  ,itemName: "Black Dress 2", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
            {itemId:'90C0362', imgUrl: "/src/assets/logo.png"  ,itemName: "HM logo", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
            {itemId:'90C0363', imgUrl: "/src/assets/avatar.png"  ,itemName: "Yellow Helmet", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
            {itemId:'90C0363', imgUrl: "/src/assets/avatar.png"  ,itemName: "Yellow Helmet", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120},
            {itemId:'90C0364', imgUrl: "/src/assets/imgtemplate.jpeg"  ,itemName: "Black dress", dialySales: 5,  levelInStore: Math.floor(Math.random()*30), levelInOderLocation: Math.floor(Math.random()*30), daysToEndOfStock: 21, expectedEntryToStock: 120}
        ]);
    }
    
    useEffect(()=>{
        // reset/ewfetch datas from api
        resetDatas();
        (faAngle == 1) ? setDatas(datas.reverse()) : undefined;
        // searching algorithm
        if(props.textToSearch != ""){
            setDatas(
                datas.filter((item)=>{
                    if( item.itemName.toLowerCase().includes(
                        props.textToSearch.toLowerCase()
                    ) ){
                        return true
                    }else{
                        return false
                    }
                })
            );
            console.log(datas);
        }else{
            resetDatas();
        }
    }, [props.textToSearch]);


    const [faAngle, setFaAngle] = useState(0);

    const performSearch = ()=>{
        console.log(props.textToSearch);
    }

    const toggleFaAngle = (e:any)=>{
        faAngle < 2 ? setFaAngle(faAngle+1) : setFaAngle(0);
        // logique de classement ici
        faAngle == 2 ? setDatas(datas.reverse()) : (faAngle == 1) ? setDatas(datas.reverse()) : undefined;
    }

    return(
        <table className={props?.containerClass+ " overflow-y-scroll"}>
            <thead>
                <tr className="border-b border-gray-400">
                    <td></td>
                    <td></td>
                    <td className={"flex flex-row items-center cursor-pointer "/*+"text-blue-500"*/} onClick={toggleFaAngle} >Item No  {Boolean(faAngle) ? ( faAngle==1 ? <FaAngleDown/> : <FaAngleUp />) : undefined } </td>
                    <td className="cursor-pointer" onClick={performSearch}>Item Name  </td>
                    <td className="cursor-pointer"  >Level In Store  </td>
                    <td className="cursor-pointer" >Level In other Locations  </td>
                    <td className="cursor-pointer" >Dialy Sales Average  </td>
                    <td className="cursor-pointer" >Days to end of Stock  </td>
                    <td className="cursor-pointer" >Expected Entry into Stock  </td>
                    <td></td>
                </tr>
            </thead>
            <tbody className={ props.bodyClass || "text-center"}>
                {
                    datas.map((item, index)=>{
                        return (
                            <tr key={index}>
                                <td> <input type="checkbox" /> </td>
                                <td> <Avatar className="border-none" src={item.imgUrl} /> </td>
                                <td> {item.itemId} </td>
                                <td> {item.itemName} </td>
                                <td> {item.levelInStore} </td>
                                <td className="text-blue-500 underlined"> {item.levelInOderLocation} </td>
                                <td> {item.dialySales} </td>
                                <td> {item.daysToEndOfStock} </td>
                                <td> {item.expectedEntryToStock} </td>
                                <td className="w-16"> <Button /> </td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
    )
}

export default Table;