/**
 * 
 * @param props{classContainer, imgClass, name, price}
 * @returns 
 */

const Seller = (props: any) =>{
    return (
        <div className={"flex flex-col " +props?.classContainer}>
            <img src={props?.imgSrc} alt="Product" className={ "border border-red w-full" + props?.imgClass} />
            <div className={props.labelClass}>
                <p className="text-center"> {props?.name} </p>
                <p className="text-center font-semibold text-sm text-red-700" >{props?.price}</p>
            </div>
        </div>
    )
}

export default Seller;