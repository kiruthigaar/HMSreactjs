import axios from 'axios'
import React, { useEffect, useState, PureComponent } from 'react'
import { BarChart, Bar, ResponsiveContainer } from 'recharts';



const Chart = () => {

    
    const [doctors, setDoctors] = useState([])

    

    useEffect(() => {
        axios.get('http://127.0.0.1:2000/doctor/')
        .then(response => {
            console.log(response)
            setDoctors(response.data)
            
        })
        .catch(error => console.log(error))
    },[])

    
    useEffect(() => {
        console.log(doctors, "docters")
      },[doctors])
      

   
  return (
    <div>
    <div>chart</div>
    <ResponsiveContainer width={800} height={600}>
    <BarChart width={150} height={40} data={doctors}>
      <Bar dataKey={"consultancy_fee"} fill="#8884d8" />
    </BarChart>
    </ResponsiveContainer>
    </div>
    
        
   
  )


}

export default Chart

