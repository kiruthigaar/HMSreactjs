import React, { useEffect, useState } from 'react'
import Chart from 'chart.js/auto'
import {Pie} from 'react-chartjs-2'
import axios from 'axios'


 


const PieChart = () => {
    const [result ,setResult] = useState({})
    const final_data =[]


    useEffect(()=>{
        for(let key in result){
            //console.log(key);
            axios.get(`http://127.0.0.1:2000/doctor/department/${key}/`)
            .then(response =>{
                const department = response.data
                console.log(department);
                 result[`${department}`] = result[`${key}`] 
                 delete result[`${key}`]
            })
        }
        // console.log(result);
    },[result])

    

    useEffect(()=>{
        axios.get("http://127.0.0.1:2000/appointment/")
       .then(response => {
        const appointments = response.data
        //console.log(response.data)
        const final_list = Object.groupBy(appointments, ({ doctor }) => doctor)
        setResult(final_list)
        
        

       })
     },[])

     
    

    useEffect(()=>{
        console.log(result);
     })

     for(let a in result){
       
        const length = result[a].length
        final_data.push(length)

     }
     useEffect(()=>{
        console.log(final_data);
     })
     const departments = [ "Cardiology" , "Dermatology" , "General Medicine" , "Neurology" , "Orthopedics"]
     const data={
    labels:departments,
    datasets:[
        {
            label : "My First Dataset",
            backgroundColor : 'rgb(255,99,132)',
            borderColor : "rgb(255,99,132)" ,
            data : final_data
        }
    ]
 }


    
  return (

    <div className='bg-white border border-secondary'>
        <Pie data={data}></Pie>
    </div>
  )
}

export default PieChart
