import Button from "./Button";

const Itemstat = (props: any)=>{

    const heightvalueFromNumber = (entryNumber:any)=>{
        let nber = parseInt(entryNumber);
        return  nber<4 ? "4" :( nber%2==0 ? nber.toString() : (++nber).toString());
    }

    return (
        <div className={'w-16 mx-auto space-x-0.5 ' + props?.containerClass}>
            <img src={props?.imgurl} alt="img" className={"rounded-full w-16 h-16 " + props?.imgClass} />
            <div className="flex flex-row items-end mt- h-10">
                <div className={"bg-red-500 h-"+heightvalueFromNumber(props.inventorylevel)+" w-6 text-white text-center text-sm font-bold ml-auto"}> {props.inventorylevel} </div>
                <div className={"bg-gray-800 h-"+heightvalueFromNumber(props.avgsales)+" w-6 text-white text-center text-sm font-bold mr-auto"}>{props.avgsales} </div>
            </div>
            <p className="text-sm font-semibold"> {props?.itemName || 'Blue shirt'} </p>
            <Button content="order" />
        </div>
    )
}

export default Itemstat;