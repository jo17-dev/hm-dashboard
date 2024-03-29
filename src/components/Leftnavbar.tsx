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
        <div className={(props?.className + " " || "") + "pt-4 border-r-2 border-r-black-600 min-w-18 flex flex-col justify-between"}>
            <div>
                <Avatar src="/src/assets/redAvatar.jpg" variant="curent_admin" className="mx-auto w-10 h-10" labelClass="text-red-400 text-sm text-center" labelContent="Joel .B" />
                <Link to='/admin/dashboard' ><MdOutlineDashboard className={"w-6 h-6 mx-auto mt-9 hover:text-red-500 "+(props.curentPage == "/admin/dashboard" ? "text-red-500" : "text-black")} /></Link>
                <Link to='/admin/insight'><VscGraph className={"w-6 h-6 mx-auto mt-9 hover:text-red-500 "+(props.curentPage == "/admin/insight" ? "text-red-500" : "text-black")} /></Link>
                <Link to='/admin/tasks' ><FaCashRegister className={"w-6 h-6 mx-auto mt-9 hover:text-red-500 "+(props.curentPage == "/admin/tasks" ? "text-red-500" : "text-black")} /></Link>
                <Link to='/admin/inventory' ><GoChecklist className={"w-6 h-6 mx-auto mt-9 hover:text-red-500 "+(props.curentPage == "/admin/inventory" ? "text-red-500" : "text-black")} /></Link>
                <Link to='/admin/socials' ><PiFlowerLotusThin className={"w-6 h-6 mx-auto mt-9 hover:text-red-500 "+(props.curentPage == "/admin/socials" ? "text-red-500" : "text-black")} /></Link>
            </div>
            <footer className='block px-2 mb-10'>
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