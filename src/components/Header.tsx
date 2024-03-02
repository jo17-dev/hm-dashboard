const Header = (props: any)=>{
    // props.option ? console.log(props.option) : undefined;
    let options = [];

    if(props?.option ){
        for(let i=0;i<props.option.length;i++){
            options.push(<option value={props.option[i].value} key={i}>{props.option[i].displayedcontent}</option>)
        }
    }


    return(
    <header className={"flex justify-between " +props?.containerClass}>
        <p className="font-semibold">{props?.title}</p>

        <div>
        {
            props?.option
            && 
            <select name="day_selection" id="day_selection" className="ml-auto">
                {options}
            </select>
        }
        { props?.placeholder && <input type="text" placeholder={props?.placeholder} className={"mx-2 " + props?.inputClass + " focus:outline-none focus:border-b focus:border-red-500"} />}
        </div>
    </header>
    )
}

export default Header;