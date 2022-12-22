import Card from '@material-tailwind/react/Card';
import CardRow from '@material-tailwind/react/CardRow';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardStatusFooter from '@material-tailwind/react/CardStatusFooter';
import Icon from '@material-tailwind/react/Icon';
import { Button } from '@material-tailwind/react';
import React, { useState } from 'react';
import {getPosts} from "../api/post";
export default function EqubInfo() {
    const[equbs, setEqubs] = useState([])
    return(
        <div className = "">
            <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full mt-10">
                <div className="px-4 mb-10">
            <Card>
                <CardRow>
                    <CardHeader color = "orange" iconOnly className="mb-0">
                        <Icon name="group" size="3xl" color="white" />
                    </CardHeader>

                    
                    <div className="flex  w-full h-40  mt-[10px] ml-10 mr-10">
                        <div className=" w-1/2  ml-[40px] text-blue-900">
                            <h1 className='my-4'>Name of Equb  :   Nahili</h1>
                            <h1 className='my-4'>Manager  :   Nahili</h1>
                            <h1 className='my-4'>Size of Equb  :   Nahili</h1>

                        </div>
                        <div className=" w-1/2 text-blue-900">
                            <h1 className='my-4'>Frequency   :   every month</h1>
                            <h1 className='my-4'>Started Date   :   20/11/2022</h1>
                            <h1 className='my-4 '>Status   : Active  </h1>

                        </div>
                    </div>
                </CardRow>

                <CardStatusFooter>
                <div className='flex  ring-offset-blue-900 ml-[500px]'>
                <div className="rounded-lg mb-2 text-gray-700">
                            <div className="ring-offset-blue-900 text-blue-900  shadow-md  flex items-center gap-3 text-sm font-light px-4 py-1 rounded-lg">
                                <Button color="orange" >View Members</Button>
                            </div>
                </div>
                </div>
                    
                </CardStatusFooter>
            </Card>
        </div>
                </div>
            </div>

          
        </div>
    );
}