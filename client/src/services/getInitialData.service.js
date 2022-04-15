import axios from "axios"

export const getInitialData = async () =>{
    // var data  = {};
    // axios.get('/hostel/initalData')
    // .then((res)=>{
    //   data = res.data
    // })
    // .catch((e)=>{
    //   data = {message:"hello world"}
    // })
    // return data;

   const res =  await fetch('/hostel/initalData',{
        method:"GET",
        headers:{
            Accept:"application/json",
            "Content-type":"application/json",
        },
        credentials:"include"
    })

    const data = await res.json()

    return data
}