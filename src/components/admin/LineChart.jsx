import React from 'react'
import Chart from 'chart.js/auto'
import {Line} from 'react-chartjs-2'

const departments = ["Dermatology" , "Cardiology" , "General Medicine" , "Neurology" , "orthopedics"]
 const data={
    labels:departments,
    datasets:[
        {
            label : "My First Dataset",
            backgroundColor : 'rgb(255,99,132)',
            borderColor : "rgb(255,99,132)" ,
            data : [50 ,20,10,10,10]
        }
    ]
 }
const LineChart = () => {
  return (
    <div className='bg-white border border-secondary'>
        <Line data={data}></Line>
    </div>
  )
}

export default LineChart