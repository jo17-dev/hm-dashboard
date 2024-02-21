import {BarChart, XAxis, YAxis, Bar, Legend, ResponsiveContainer, PieChart, Pie} from 'recharts';
import Header from './Header';
import SemiCircularGraph from './CircularGraph';
/**
 * 
 * @param props {progression: Float%, containerClass, width height, barSize, }
 * @returns 
 */
const Graph = (props: any)=> {
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

// Debut des différentes variantes
const serviceLevelVariant = (
    <div className={ 'flex flex-col ' +  props?.containerClass + 'w-100 pr-2'}>
    <p className='font-semibold'> {props.title} </p>
    <p className='block w-fit text-red-500 font-semibold' style={{marginLeft: props?.progression || '0%'}} >{props?.progression || '0%'}</p>
    <div className='flex flex-row items-center w-100' >
        <p className='text-red-500 font-semibold px-1'>0</p>
        <div className='w-11/12 h-1 bg-red-400 bg-gradient-to-r from-red-400 to-white'></div>
        <p className='text-red-500 font-semibold'>100%</p>
    </div>
    <button className='ml-auto underline font-semibold text-sm' >More</button>
    </div>
);


const semiCircularVariant = (
  <div className={props.containerClass}>
        <Header 
      title="Sales by department"
      option={[
        {displayedcontent: "Today", value:"week"},
        {displayedcontent: "This week", value:"week"},
        {displayedcontent: "This month", value: "month"},
        {displayedcontent: "This year", value: "year"},
        {displayedcontent: "Max", value: "max"}
      ]} 
    />
    < SemiCircularGraph />
  </div>
);

const barVariant = (
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
        <XAxis dataKey='day' tickMargin={1} />
        <YAxis />
        <Bar dataKey='women' fill='rgb(156 163 175)' stackId='a'/>
        <Bar dataKey='men' fill='rgb(255, 80, 80)' stackId='a' /> 
        <Bar dataKey='kids' fill='brown' stackId='a' />
        <Legend layout='vertical' align='right' verticalAlign='middle' />
        </BarChart>
    </ResponsiveContainer>
    <div className=' flex px-2'>
    <button className='ml-auto underline font-semibold' >More</button>
    </div>
</div>
);

if(props.variant == 'bar'){
    return barVariant;
}else if(props.variant == 'progression'){
    return serviceLevelVariant;
}else if(props.variant == 'semiCircular'){
  return semiCircularVariant;
}

}

export default Graph;
