import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";

const StoreData = ()=>{
    return(
        <div className="">
            <Navbar for="admin" className="w-full" />
            <div className="flex flex-row">
                <Leftnavbar className="flex-auto w-1/12"/>
                <div className=" w-7/12">
                    <h1 className="text-3xl center">Store data page </h1>
                </div>
                <div className="w-4/12 border border-blue-500">

                </div>
            </div>

        </div>
    )
}

export default StoreData;