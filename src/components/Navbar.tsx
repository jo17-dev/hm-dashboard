import { MdNotificationAdd } from "react-icons/md";
const Navbar =(props: any)=>{

    const adminDashboard = (
        <>
        <div className={"flex flex-row pt-2 w-full " + props?.className}>
            <img src="/src/assets/logo.png" className="w-14 h-14 mr-10" />
            <MdNotificationAdd className="text-red-400 w-6 h-6 ml-8 mt-auto mb-2"/>
            <input type="text" name="search" placeholder={"Search something"} className="rounded-xl border border-black h-8 px-2 mt-auto mb-2 ml-10 self-auto" />
            {/* <div className="w-full border border-red-500 flex flex-col justify-center">
            <input type="text" name="search" placeholder={"Search something"} className="rounded-xl border border-black m-0 ml-auto" />
            </div> */}
        </div>
        </>
    );

    const guessDashboard = (
        <>
        <h1 className="text-3xl text-blue-500" > Guess nav bar </h1>
        </>
    )

    return props?.for=="admin" ? adminDashboard : guessDashboard;
}

export default Navbar;