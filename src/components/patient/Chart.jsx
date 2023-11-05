import React from 'react'

import { Line } from "react-chartjs-2";
import { Chart as ChartJS } from 'chart.js/auto'



 

function Chart(props) {
  return (
    <div style={{width:"95%", height:"100%", minHeight:"250px"}}>
       <Line style={{minHeight:"220px"}}   data={props.data} options={props.options}/>
    </div>
  )
}

export default Chart
