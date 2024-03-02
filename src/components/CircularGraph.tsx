import { PieChart, ResponsiveContainer, Pie, Tooltip, Legend } from "recharts";
import Header from "./Header";

const datas = [
    { name: 'Men', value: 400},
    { name: 'Women', value: 300},
    { name: 'Kids', value: 100}
];

const red400 = "rgb(239 68 68)";

const colors: any = {
    'Kids': 'rgb(156 163 175)',
    'Women': "brown",
    'Men': red400
}

let totalOfSales =0;

datas.map((item)=>{
    totalOfSales += item.value
});

const   CircularGraph = (props :  any)=>{
    let startAngle = 0, endAngle = 0;
    return(
        <div className={props.containerClass || " "}>
            <Header 
                title="Sales by department"
                option={[
                    {displayedcontent: "Today", value:"week"},
                    {displayedcontent: "This week", value:"week"},
                    {displayedcontent: "This month", value: "month"},
                    {displayedcontent: "This year", value: "year"},
                    {displayedcontent: "Max", value: "max"}
                ]} 
                containerClass="text-sm"
            />
            <ResponsiveContainer width={ props?.width || '100%'} height={props?.height || 200}>
                <PieChart width={400} height={400} barGap={0} >
                     {
                        datas.map((item, index)=>{
                            startAngle = index == 0 ? 0 : endAngle;
                            endAngle = startAngle+item.value*360/totalOfSales;
                            const section = (
                            <Pie
                            key={index}
                            data={[item]}
                            dataKey={"value"}
                            innerRadius={60}
                            outerRadius={80}
                            startAngle={startAngle}
                            endAngle={endAngle}
                            fill={colors[item.name]}
                            paddingAngle={4}
                            />);

                            return section;
                        })
                     }
                     <Tooltip />
                     <Legend />
                </PieChart>
            </ResponsiveContainer>
        </div>
    );
}

export default CircularGraph;