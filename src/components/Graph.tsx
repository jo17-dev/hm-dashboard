import {BarChart, XAxis, YAxis, Bar, Tooltip, Legend, ResponsiveContainer} from 'recharts';

const Graph = (props: any)=> {
  let days: any = [13.7, 14.7, 15.7, 16.7, 17.7, 18.7, 19.7];
  let turnovers : any = [10000, 20000, 30000];

  let datas: any = [];

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
    <div className={props?.containerClass || 'w-100'}>
    <p> {props.title} </p>
    <div className='flex flex-row items-center w-100' >
        <p className='text-red-500 font-semibold px-1'>0</p>
        <div className='w-11/12 h-1 bg-red-400 bg-gradient-to-r from-red-400 to-white'></div>
        <p className='text-red-500 font-semibold px-1'>100%</p>
    </div>
    </div>
);

const barVariant = (
<div className={props?.containerClass}>
    <div className="px-2 flex content-between">
    <strong className='mr-auto'>Sales by department</strong>
    <select className='ml-auto text-black-200' name="salesduration" id="sales-history">
        <option value="week">This week</option>
        <option value="month">This month</option>
        <option value="year">This year</option>
        <option value="max">Max</option>
    </select>
    </div>
    <ResponsiveContainer width={ props?.width || '100%'} height={props?.height || 200}>
        <BarChart data={datas} width={600} height={200} barSize={ props?.barSize || 20} >
        <XAxis dataKey='day' tickMargin={1} />
        <YAxis />
        <Bar dataKey='women' fill='rgb(192, 192, 192)' stackId='a'/>
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
}

}

export default Graph;
