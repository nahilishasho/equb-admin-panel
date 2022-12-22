import StatusCard from 'components/StatusCard';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import { Button } from '@material-tailwind/react';
import { NavLink } from 'react-router-dom';
import DateRange from 'components/DateRange';
import StatusDetail from 'components/StatusDetail.js';
export default function Dashboard() {
    return (
        <>
            <div className="bg-gray-100 px-3 md:px-8 h-40" />
            <div></div>
            <div className="px-3 md:px-8 -mt-24">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 xl:grid-cols-5">
                        <div className="xl:col-start-1 xl:col-end-4 px-4 mb-14">
                            <ChartLine />
                        </div>
                        <div className="xl:col-start-4 xl:col-end-6 px-4 mb-14">
                            <ChartBar />
                        </div>
                    </div>
                </div>
            </div>
            <div><StatusDetail/></div>

            

            
        </>
    );
}
