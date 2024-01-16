import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const Userdetail = ()=>{

    const {userId}= useParams();

  const [data, setData] = useState({});

  useEffect(() => {
    async function getData() {
      try {
        const response = await fetch(`https://hub.dummyapis.com/employee?noofRecords=1&idStarts=${userId}`);
        const result = await response.json();
        setData(result[0]);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    }

    getData();

  

  }, []);
    return(
        <>
        <h4>{data.id}</h4>
        <img src="{data.imageUrl}" alt="" />
        <h4>{data.firstName}</h4>
        <h4>{data.lastName}</h4>
        <h4>{data.email}</h4>
        <h4>{data.contactNumber}</h4>
        <h4>{data.age}</h4>
        <h4>{data.dob}</h4>

        </>
    )
}
export default Userdetail;