import { MdOutlineFileDownload } from "react-icons/md";
import { SlPrinter } from "react-icons/sl";
import { IoFilterSharp } from "react-icons/io5";

const Filter = (props: any)=>{
    const handleSubmitText = (e:any)=>{
        props.retriveTextToSearchFromChild(e.target.value);
    }

    return (
        <div className="w-full flex flex-row mt-4 text-sm justify-arround">
            <div className="flex flex-row items-center">
                <p className="font-semibold">Upadated</p>
                <select>
                    <option value="14-02-2024">14-02-2024</option>
                    <option value="13-02-2024">13-02-2024</option>
                    <option value="12-02-2024">12-02-2024</option>
                </select>
            </div>
            <div className="flex flex-row items-center ml-4">
                <p className="font-semibold">Less than</p>
                <select>
                    <option value="14-02-2024">10</option>
                    <option value="13-02-2024">20</option>
                    <option value="12-02-2024">30</option>
                </select>
            </div>
            <input type="text" placeholder="search" id="searchItems" onChange={handleSubmitText} className="border-b border-gray-400 ml-4 w-50 focus:outline-none focus:border-red-500" />
            <div className="flex flex-row mx-auto items-center">
                <IoFilterSharp className="ml-2 w-6 h-6" />
                <p className="ml-2">More Filters</p>
            </div>
            <div className="flex flex-row ml-auto mr-10 items-center">
                <MdOutlineFileDownload className="ml-2 w-6 h-6" />
                <SlPrinter className="ml-2 w-5 h-5" />
            </div>
        </div>
    )
}

export default Filter;