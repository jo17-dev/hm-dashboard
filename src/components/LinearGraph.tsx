const LinearGraph = (props: any) =>{
    return (
        <div className={ 'flex flex-col ' +  props?.containerClass + 'w-100 pr-2'}>
        <p className='font-semibold'> {props.title} </p>
        <p className='block w-fit text-red-500 font-semibold' style={{marginLeft: props?.progression || '0%'}} >{props?.progression || '0%'}</p>
        <div className='flex flex-row items-center w-100' >
            <p className='text-red-500 font-semibold px-1'>0</p>
            <div className='w-11/12 h-1 bg-red-400 bg-gradient-to-r from-red-400 to-white'></div>
            <p className='text-red-500 font-semibold'>100%</p>
        </div>
        <button className='ml-auto underline font-semibold text-sm' >More</button>
        </div>
    );
    
}

export default LinearGraph;