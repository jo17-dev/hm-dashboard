const Header = (props: any)=>{
    // props.option ? console.log(props.option) : undefined;
    let options = [];

    if(props?.option ){
        for(let i=0;i<props.option.length;i++){
            options.push(<option value={props.option[i].value} key={i}>{props.option[i].displayedcontent}</option>)
            console.log(options);
        }
    }


    return(
    <header className={"flex justify-between pr-2"}>
        <p className="font-semibold">{props?.title}</p>

        <div>
        {
            props?.option
        && 
            <select name="day_selection" id="day_selection">
                {options}
            </select>
        }
        { props?.placeholder && <input type="text" placeholder={props?.placeholder} className={"mx-2" + props?.inputClass} />}
        </div>
    </header>
    )
}

export default Header;