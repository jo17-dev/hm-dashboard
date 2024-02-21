import { PieChart, ResponsiveContainer, Pie, Cell, Tooltip, Legend } from "recharts";

const datas = [
    { name: 'Men', value: 400, color: "green" },
    { name: 'Women', value: 300, color: "red" },
    { name: 'Kids', value: 300, color: "blue" }
  ];

const red400 = "rgb(239 68 68)";

const   SemiCircularGraph = (props :  any)=>{
    return(
        <div className={props.containerClass || " "}>
            <ResponsiveContainer width={ props?.width || '100%'} height={props?.height || 200}>
                <PieChart width={400} height={400} >
                    <Pie 
                        data={datas}
                        dataKey="value"
                        innerRadius={60}
                        outerRadius={80}
                        fill={red400}
                        paddingAngle={2}
                     />
                     <Tooltip />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default SemiCircularGraph;