import Avatar from "../../components/Avatar";
import Graph from "../../containers/Graph";
import Header from "../../components/Header";
import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";
import Numberdescription from "../../components/Numberdescription";
import Lowinventory from "../../containers/Lowinventory";
import Seller from "../../components/Seller";

const StoreData = ()=>{
    return(
        <div className="">
            <Navbar for="admin" className="w-full" />
            <div className="flex flex-row justify-between">
                <Leftnavbar curentPage="/admin/dashboard"/>
                <div className=" w-7/12 pt-6 pb-10 pr-2 h-total overflow-y-scroll">
                    <h1 className="text-3xl center font-bold">Hi Joël, </h1>
                    <p> Welcome to Your Store Management Data </p>
                    <div className="flex flex-row mt-4">
                        <div className="w-2/6">
                            <Graph variant='circular' containerClass='w-100 ml-auto mr-auto text-sm '  />
                        </div>
                        <div className="w-7/12 ml-auto">
                            <Graph variant='bar' containerClass='w-100 ml-auto mr-auto text-sm ' barSize={10} />
                        </div>
                    </div>
                    <Graph variant='progression' progression='75%' containerClass='mt-6' title="Service level" />
                    {/* low invetory section */}
                    <Lowinventory />
                </div>
                <div className="w-4/12 h-full bg-red-50">
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
                    <div>
                        <div className=" flex flex-row justify-around mt-6 bg-red-50 w-full">
                            <div className=" w-5/12 p-2 rounded-lg">
                                {/* Returns */}

                                <div className=" bg-white flex flex-row flex-wrap rounded-xl">
                                    <Header
                                        title="Returns"
                                        option={[{displayedcontent: "today", value: "today"}, {displayedcontent:"Yesterday", value: "yesterday"}]}
                                        containerClass="pl-2"
                                    />
                                    <Numberdescription containerClass="mt-4 m-2 w-2/5" labelContent="Women" num={Math.ceil(Math.random()*20) -1} numberClass="text-red-700" />
                                    <Numberdescription containerClass="mt-4 m-2 w-2/5" labelContent="Men" num={Math.ceil(Math.random()*20) -1} numberClass="text-red-700" />
                                    <Numberdescription containerClass="mt-4 m-2 w-2/5" labelContent="Kids" num={Math.ceil(Math.random()*20) -1} numberClass="text-red-700" />
                                    <Numberdescription containerClass="mt-4 m-2 w-2/5" labelContent="baby" num={Math.ceil(Math.random()*20) -1} numberClass="text-red-700" />
                                    <div className=' w-full flex px-2'>
                                        <button className='ml-auto underline font-semibold' >More</button>
                                    </div>
                                </div>
                                {/* recycled */}
                                <div className="bg-white p-2 mt-6 w-full rounded-xl">
                                    <Header title="Recycled" option={[{displayedcontent: "today", value: "today"}, {displayedcontent:"Yesterday", value: "yesterday"}]} />
                                    <Numberdescription numberClass="text-5xl text-green-500" labelClass="mt-4 text-green-500 font-semibold" containerClass="bg-white" num={Math.ceil(Math.random())* 38} labelContent="Items Recycled"  />
                                </div>
                            </div>
                            {/* Best seller class */}
                            <div className="w-6/12">
                                <Header title="Best seller" containerClass="bg-white" option={[{displayedcontent: "today", value: "today"}, {displayedcontent:"Yesterday", value: "yesterday"}]} />
                                <div className="overflow-y-scroll h-76">
                                    <Seller 
                                    imgSrc="/src/assets/imgtemplate.jpeg" 
                                    imgClass="" 
                                    name="Black dress"
                                    price="22.05 $"
                                    labelClass="bg-gray-300 rounded-b-lg mb-4"
                                    />
                                    <Seller 
                                    imgSrc="/src/assets/avatar.png" 
                                    imgClass="" 
                                    name="Yellow helmet"
                                    price="22.05 $"
                                    labelClass="bg-gray-300 rounded-b-lg mb-4"
                                    />
                                    <Seller 
                                    imgSrc="/src/assets/imgtemplate.jpeg" 
                                    imgClass="" 
                                    name="Black dress"
                                    price="22.05 $"
                                    labelClass="bg-gray-300 rounded-b-lg mb-4"
                                    />
                                </div>
                            </div>
                        </div>
                    
                    </div>
                </div>
            </div>

        </div>
    )
}

export default StoreData;