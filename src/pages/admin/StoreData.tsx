import Graph from "../../components/Graph";
import Itemstat from "../../components/Itemstat";
import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";

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
                    <Graph variant='progression' containerClass='mt-6' />
                    {/* low invetory section */}
                    <div className="mt-4">
                        <div className=" w-100 flex flex-row h-8 justify-between">
                            <span className="font-bold text-base" >Low inventory <span className="font-normal text-sm" >Less than 10 items</span>
                            </span>
                            <div className="mr-2">
                                <select name="low_inventory_sorting" id="inventory_sorting" className="text-sm">
                                    <option value="default">Sort By</option>
                                    <option value="lowest">Lowest</option>
                                    <option value="bigger">Bigger</option>
                                </select>
                                <input type="text" name="low_inventory_search" id="low_inventory_search" placeholder="Search" className=" ml-2 border-b border-gray-400" />
                            </div>
                        </div>
                        <div className="flex flex-row">
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                            <Itemstat imgurl="/src/assets/avatar.png" />
                        </div>
                        <div className="mt-2 mx-auto w-full flex flex-row justify-center">
                            <p className="mx-4 text-sm"> <span className=" inline-block w-4 h-4 rounded-full bg-red-500"></span> Inventory level</p>
                            <p className="mx-4 text-sm"> <span className=" inline-block w-4 h-4 rounded-full bg-gray-500"></span> Dialy sales averages</p>
                        </div>
                    </div>
                </div>
                <div className="w-4/12 border border-blue-500 overflow-scroll h-full">

                </div>
            </div>

        </div>
    )
}

export default StoreData;