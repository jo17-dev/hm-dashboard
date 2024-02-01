import Graph from "../../components/Graph";
import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";

const StoreData = ()=>{
    return(
        <div className="">
            <Navbar for="admin" className="w-full" />
            <div className="flex flex-row">
                <Leftnavbar className="flex-auto w-1/12"/>
                <div className=" w-7/12 pt-6 pl-6">
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
                </div>
                <div className="w-4/12 border border-blue-500">

                </div>
            </div>

        </div>
    )
}

export default StoreData;