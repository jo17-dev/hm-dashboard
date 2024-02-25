import { FaAngleUp } from "react-icons/fa";
import Avatar from "./Avatar";
import Button from "./Button";

const Table = (props: any)=>{
    return(
        <table className={props?.containerClass+ " h-61 overscroll-y"}>
            <thead>
                <tr className="border-b border-gray-400">
                    <td></td>
                    <td></td>
                    <td className="flex flex-row items-center text-blue-500">Item No <FaAngleUp />  </td>
                    <td>Item Name  </td>
                    <td>Level In Store  </td>
                    <td>Level In other Locations  </td>
                    <td>Dialy Sales Average  </td>
                    <td>Days to end of Stock  </td>
                    <td>Expected Entry into Stock  </td>
                    <td></td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td> <input type="checkbox" name="" id="" /></td>
                    <td> <Avatar className="border-none" /> </td>
                    <td>90C0362</td>
                    <td> Yellow Helmet </td>
                    <td>5</td>
                    <td className="text-blue-500 underlined">122</td>
                    <td>4</td>
                    <td>125</td>
                    <td>16</td>
                    <td className="w-16"> <Button /> </td>
                </tr>
                <tr>
                    <td> <input type="checkbox" name="" id="" /></td>
                    <td> <Avatar className="border-none" /> </td>
                    <td>90C0362</td>
                    <td> Yellow Helmet </td>
                    <td>5</td>
                    <td className="text-blue-500 underlined">122</td>
                    <td>4</td>
                    <td>125</td>
                    <td>16</td>
                    <td className="w-16"> <Button /> </td>
                </tr>
                <tr>
                    <td> <input type="checkbox" name="" id="" /></td>
                    <td> <Avatar className="border-none" /> </td>
                    <td>90C0362</td>
                    <td> Yellow Helmet </td>
                    <td>5</td>
                    <td className="text-blue-500 underlined">122</td>
                    <td>4</td>
                    <td>125</td>
                    <td>16</td>
                    <td className="w-16"> <Button /> </td>
                </tr>
                <tr>
                    <td> <input type="checkbox" name="" id="" /></td>
                    <td> <Avatar className="border-none" /> </td>
                    <td>90C0362</td>
                    <td> Yellow Helmet </td>
                    <td>5</td>
                    <td className="text-blue-500 underlined">122</td>
                    <td>4</td>
                    <td>125</td>
                    <td>16</td>
                    <td className="w-16"> <Button /> </td>
                </tr>
                <tr>
                    <td> <input type="checkbox" name="" id="" /></td>
                    <td> <Avatar className="border-none" /> </td>
                    <td>90C0362</td>
                    <td> Yellow Helmet </td>
                    <td>5</td>
                    <td className="text-blue-500 underlined">122</td>
                    <td>4</td>
                    <td>125</td>
                    <td>16</td>
                    <td className="w-16"> <Button /> </td>
                </tr>
            </tbody>
        </table>
    )
}

export default Table;