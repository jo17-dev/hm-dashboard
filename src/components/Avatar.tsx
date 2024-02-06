const Avatar = (props: any)=>{
    const curent_admin = (
        <>
        <img src={props?.src || '/src/assets/avatar.png'} className= {"rounded-full border-2 border-red-500 border-b-white w-12 h-12 " + props?.className} />
        { props.labelContent && <p className={"mt-0 pt-0 mx-auto " + props.labelClass} > {props?.labelContent || "you"} </p>}
        </>
    );

    const standard = (
        <img src={props?.src || "/src/assets/avatar.png"} className={"rounded-full border-2 border-red-400 w-14 h-14 " + props?.className} />
    )

    return props?.variant == "curent_admin" ? curent_admin : standard;
}

export default Avatar;