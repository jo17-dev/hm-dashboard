import Header from "./Header";
import { ResponsiveContainer, BarChart, Bar, Legend, XAxis, YAxis } from "recharts";

let days: any = [13.7, 14.7, 15.7, 16.7, 17.7, 18.7, 19.7];
let turnovers : any = [10000, 20000, 30000];

let datas: any = [];

// let todaySale = 38250;

for(let i=0; i<days.length;i++){
datas.push(
  {
    day: days[i],
    men: turnovers[Math.ceil(Math.random()*turnovers.length)-1],
    women: turnovers[Math.ceil(Math.random()*turnovers.length)-1],
    kids: turnovers[Math.ceil(Math.random()*turnovers.length)-1]
  }
)
}
const BarGraph = (props: any)=>{
return (
    <div className={props?.containerClass}>
    <Header 
      title="Sales by department"
      option={[
        {displayedcontent: "This week", value:"week"},
        {displayedcontent: "This month", value: "month"},
        {displayedcontent: "This year", value: "year"},
        {displayedcontent: "Max", value: "max"}
      ]} 
    />
    <ResponsiveContainer width={ props?.width || '100%'} height={props?.height || 200}>
        <BarChart data={datas} width={600} height={200} barSize={ props?.barSize || 20} >
        <XAxis dataKey='day' tickMargin={2} />
        <YAxis />
        <Bar dataKey='women' fill='rgb(156 163 175)' stackId='a' />
        <Bar dataKey='men' fill='rgb(255, 80, 80)' stackId='a'  /> 
        <Bar dataKey='kids' fill='brown' stackId='a'  />
        <Legend layout='vertical' align='right' verticalAlign='middle' />
        </BarChart>
    </ResponsiveContainer>
    <div className=' flex px-2'>
    <button className='ml-auto underline font-semibold' >More</button>
    </div>
</div>
)
}

export default BarGraph;