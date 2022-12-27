import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import { Button } from '@material-tailwind/react';
import React, { useState , useEffect} from 'react';
import {getPosts} from "../api/post";
export default function EqubInfo() {
    const[equbs, setEqubs] = useState([])
    useEffect(()=>{
        fetch("http://localhost:3000/equbs")
        .then(res=>res.json())
        .then((result)=> {setEqubs(result);})
        console.log(equbs);
     },[])
    return(
       <div className=' grid grid-cols-2 gap-x-8 gap-y-5 ml-8 my-10 mr-10'>{equbs.map(equb => <>
        
            <div className=" h-[250px] container  ">
            <Card>
                <CardRow>
                    <CardHeader color = "orange" iconOnly className="mb-0 w-[50px] h-[50px]">
                        <Icon name="group" size="3xl" color="white" />
                    </CardHeader>  
                   <>
                        <div className="flex  max-w-full h-40  mt-[5px] ml-10 mr-10">
                            <div className=" w-1/2  ml-[40px] text-gray-500">
                                <h1 className='my-2'>Name of Equb  :   {equb.equb_name}</h1>
                                <h1 className='my-2'>Manager  :   {equb.manager}</h1>
                                <h1 className='my-2'>Size of Equb  :   {equb.size}</h1>

                            </div>
                            <div className=" w-1/2 text-gray-500">
                                <h1 className='my-2'>Frequency   :   {equb.freequency}</h1>
                                <h1 className='my-2'>Started Date   :   {equb.started_date}</h1>
                                <h1 className='my-2 '>Status   : {equb.status}  </h1>
                            </div>
                        
                        </div>
                    </>
                </CardRow>


                <CardStatusFooter>
                <div className='flex  ring-offset-blue-900 ml-[500px]'>
                
                </div>
                    
                </CardStatusFooter>
            </Card>
    
            </div>

        </>)}</div>
    );
}