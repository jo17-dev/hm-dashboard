import Avatar from "../../components/Avatar";
import Graph from "../../components/Graph";
import Header from "../../components/Header";
import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";
import Lowinventory from "../../containers/Lowinventory";

const StoreData = ()=>{
    return(
        <div className="">
            <Navbar for="admin" className="w-full" />
            <div className="flex flex-row">
                <Leftnavbar className="flex-auto w-1/12"/>
                <div className=" w-7/12 pt-6 pl-6 h-total overflow-y-scroll pb-10">
                    <h1 className="text-3xl center font-bold">Hi Allen, </h1>
                    <p> Welcome to Your Store Management Data </p>
                    <div className="flex flex-row mt-4">
                        <div className="w-1/2">
                            {/* <Graph containerClass='w-100 ml-auto mr-auto' barSize={10} /> */}
                        </div>
                        <div className="w-1/2">
                            <Graph variant='bar' containerClass='w-100 ml-auto mr-auto text-sm' barSize={10} />
                        </div>
                    </div>
                    <Graph variant='progression' progression='75%' containerClass='mt-6' title="Service level" />
                    {/* low invetory section */}
                    <Lowinventory />
                </div>
                <div className="w-4/12 border border-blue-500 h-full">
                    <div className="px-4 flex flex-row  items-center">
                        <p className="font-semibold">Team now</p>
                        <div className="px-auto">
                            <Avatar className='w-12 h-12 ml-2 mx-auto' variant='curent_admin' labelContent="sales star" labelClass="text-red-500 text-sm mx-auto" />
                        </div>
                        <Avatar className='w-9 h-9 ml-2' />
                        <Avatar className='w-9 h-9 ml-2' />
                        <Avatar className='w-9 h-9 ml-2' />
                        <Avatar className='w-9 h-9 ml-2' />
                    </div>
                    {/* Left and right side for right side container */}
                    <div className="flex flex-row mt-6">
                        <div className="w-1/2">
                            <Header title="Returns" option={[{displayedcontent: "today", value: "today"}, {displayedcontent:"Yesterday", value: "yesterday"}]} />
                        </div>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default StoreData;