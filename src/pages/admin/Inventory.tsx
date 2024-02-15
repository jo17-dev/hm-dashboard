import Leftnavbar from "../../components/Leftnavbar";
import Navbar from "../../components/Navbar";
import Filter from "../../components/Filter";
import Table from "../../components/Table";

const Inventory = ()=>{
    return (
        <div>
            <Navbar for="admin" />
            <div className="flex flex-row">
                <Leftnavbar curentPage="/admin/inventory" />
                <div className="pt-6 pl-6 pr-10 h-total w-full">
                    <h1 className="text-3xl center font-bold">Hi Allen, </h1>
                    <p> Welcome to Your Store Management Data </p>
                    <div className=" flex flex-row justify-between w-fit mt-6">
                        <p className="mr-4 border-b-2 border-red-500 cursor-pointer hover:text-red-500 ">All inventory</p>
                        <p className="mx-4 cursor-pointer hover:text-red-500 ">Low Inventory</p>
                        <p className="mx-4 cursor-pointer hover:text-red-500 ">Slow Inventory</p>
                    </div>
                    <Filter />
                    <Table containerClass="mt-8 table-auto w-full" />
                </div>
            </div>
        </div>
    );
}

export default Inventory;