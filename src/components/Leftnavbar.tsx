import Avatar from './Avatar';
import { MdOutlineDashboard } from 'react-icons/md';
import { FaCashRegister } from "react-icons/fa";
import { GoChecklist } from "react-icons/go";
import { PiFlowerLotusThin } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdHelpCircleOutline } from "react-icons/io";
import { Link } from 'react-router-dom';
/**
 * 
 * @param props {curentPage } : 
 * @returns LeftNabar 
 */

const Leftnavbar = (props: any)=>{
    return(
        <div className={(props?.className + " " || "") + "pt-4 border-r-2 border-r-black-600 min-w-18"}>
            <div>
                <Avatar variant="curent_admin" className="mx-auto w-10 h-10" labelClass="text-red-400 text-sm" />
                <Link to='/admin/dashboard' ><MdOutlineDashboard className="w-6 h-6 mx-auto mt-9 hover:border-red-400 text-red-500" /></Link>
                <Link to='/admin/inventory'><VscGraph className="w-6 h-6 mx-auto mt-9 hover:text-red-500" /></Link>
                <Link to='/admin/tasks' ><FaCashRegister className="w-6 h-6 mx-auto mt-9 hover:border-red-400 hover:text-red-500" /></Link>
                <Link to='/admin/inventory' ><GoChecklist className="w-6 h-6 mx-auto mt-9 hover:border-red-400 hover:text-red-500" /></Link>
                <Link to='/admin/socials' ><PiFlowerLotusThin className="w-6 h-6 mx-auto mt-9 hover:border-red-400 hover:text-red-500" /></Link>
            </div>
            <footer className=' px-2 mt-10'>
                <div className='flex flex-row'>
                    <IoSettingsOutline className="w-4 h-4 mt-1" />
                    <p className='hover:underline hover:cursor-pointer' >Settings</p>
                </div>
                <div className='flex flex-row'>
                    <IoMdHelpCircleOutline className="w-4 h-4 mt-1" />
                    <p className='hover:underline hover:cursor-pointer'>Help</p>
                </div>
            </footer>
        </div>
    )
}

export default Leftnavbar;