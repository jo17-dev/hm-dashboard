const Avatar = (props: any)=>{
    const curent_admin = (
        <>
        <img src={props?.src || '/src/assets/avatar.png'} className= {"rounded-full border-2 border-red-500 border-b-white w-12 h-12 " + props?.className} />
        <p className={"mt-0 pt-0 mx-auto " + props.labelClass} >Joel Bertrand</p>
        </>
    )

    const standard = (
        <img src={props?.src || "/src/assets/avatar.png"} className={"rounded-full border-2 border-red-400 w-14 h-14 "} />
    )

    return props?.variant == "curent_admin" ? curent_admin : standard;
}

export default Avatar;