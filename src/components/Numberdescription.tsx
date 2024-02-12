/**
 * 
 * @param props {containerClass, numberClass num, labelContent}
 * @returns 
 */

const Numberdescription = (props: any)=>{

    return (
        <div className={"bg-red-100 p-2 rounded-xl "+ props?.containerClass}>
            <h1 className={"text-2xl text-red-700 text-center font-bold " + props?.numberClass}> { props.num || 0 }</h1>
            <p className={"text-center " + props?.labelClass} >{ props?.labelContent }</p>
        </div>
    )
}

export default Numberdescription;