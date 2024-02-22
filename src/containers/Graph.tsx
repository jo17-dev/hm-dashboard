import BarGraph from '../components/BarGraph';
import CircularGraph from '../components/CircularGraph';
import LinearGraph from '../components/LinearGraph';
/**
 * 
 * @param props {progression: Float%, containerClass, width height, barSize, }
 * @returns 
 */
const Graph = (props: any)=> {
  if(props.variant == 'bar'){
      return <BarGraph containerClass={props.containerClass} barSize={14} /> ;
  }else if(props.variant == 'progression'){
      return <LinearGraph progression="75%" title="Service level"  />;
  }else if(props.variant == 'circular'){
    return  <CircularGraph containerClass={props.containerclass} />;
  }

}

export default Graph;
