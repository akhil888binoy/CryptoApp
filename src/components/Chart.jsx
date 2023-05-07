import React from 'react'
import {Line} from "react-chartjs-2"
import {Chart as ChartJS , 
    CategoryScale,
    LinearScale, 
    PointElement,
LineElement, 
Title, 
Tooltip, Legend} from "chart.js"

ChartJS.register(
    CategoryScale,
    LinearScale, 
    PointElement,
    LineElement, 
    Title, 
    Tooltip, 
    Legend
)
const Chart = ({arr=[], currency, days}) => {
    const prices=[1,2,3];
    const date =["12/2/22", "23/45/2033", '12/12/2023']
    const data={
        

    }
  return (
    <Line options={{
        responsive:true,
    }} data={{
        labels:date,
        datasets:[{
            label:`Price in ${currency}`,
            data: prices, borderColor:"rgb(255, 99, 132)"
        }]
    }}></Line>
  )
}

export default Chart