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
        <div className=''>{equbs.map(equb => <>
        <div className = "">
            <div className="px-3 md:px-8 h-[250px]">
                <div className="container mx-auto max-w-full mt-10">
                <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color = "orange" iconOnly className="mb-0 w-[50px] h-[50px]">
                        <Icon name="group" size="3xl" color="white" />
                    </CardHeader>

                    
                   <>
                        <div className="flex  w-full h-40  mt-[5px] ml-10 mr-10">
                        <div className=" w-1/2  ml-[40px] text-blue-700">
                            <h1 className='my-2'>Name of Equb  :   {equb.equb_name}</h1>
                            <h1 className='my-2'>Manager  :   {equb.manager}</h1>
                            <h1 className='my-2'>Size of Equb  :   {equb.size}</h1>

                        </div>
                        <div className=" w-1/2 text-blue-700">
                            <h1 className='my-2'>Frequency   :   {equb.freequency}</h1>
                            <h1 className='my-2'>Started Date   :   {equb.started_date}</h1>
                            <h1 className='my-2 '>Status   : {equb.status}  </h1>

                        </div>
                        
                        
                    </div>
                    <div className='flex  ring-offset-blue-900 ml-[500px]'>
                <div className="rounded-lg text-gray-700">
                            <div className="ring-offset-blue-900 text-blue-900  shadow-md  flex items-center gap-3 text-sm font-light px-4 py-1 rounded-lg">
                                <Button color="orange" >View Members</Button>
                            </div>
                </div>
                </div>
                    </>
                </CardRow>
            </Card>
        </div>
                </div>
            </div>

          
        </div>

        </>)}</div>
    );
}