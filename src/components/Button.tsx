const Button = (props:  any)=>{
    return <button className={ props.className|| "mt-2 w-full text-sm text-white rounded-xl border border-red-500 bg-red-500 hover:bg-white hover:text-red-500"}>{ props.content || "Order" }</button>;
}

export default Button;