const Itemstat = (props: any)=>{
    return (
        <div className={'w-16 mx-auto ' + props?.containerClass}>
            <img src={props?.imgurl} alt="img" className={"rounded-full w-16 h-16" + props?.imgClass} />
            <div className="flex flex-row items-end mt-4">
                <div className="bg-red-500 h-10 w-6 text-white text-center font-bold">4</div>
                <div className="bg-gray-800 h-6 w-6 text-white text-center font-bold">8</div>
            </div>
            <p className="text-sm font-semibold"> {props?.itemName || 'Blue shirt'} </p>
            <button className="mt-2 w-full text-sm text-white rounded-xl border border-red-500 bg-red-500 hover:bg-white hover:text-red-500">order</button>
        </div>
    )
}

export default Itemstat;