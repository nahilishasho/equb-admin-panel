import StatusCard from 'components/StatusCard';
import { Button } from '@material-tailwind/react';
export default function StatusDetail() {
    return (
       
            <div> 
                <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                    <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="New Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last year"
                        />
                        
                    </div>
                    
                        <div className='mt-[-30px] mb-[40px] ml-[29px]'>
                            <Button color="orange" >custome</Button>
                        </div>

                   
                  
                    
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        
                    <StatusCard
                            color="orange"
                            icon="groups"
                            title="Active Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Active Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last week"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Active Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="groups"
                            title="Active Users"
                            amount="2,356"
                            percentage="3.48"
                            percentageIcon="arrow_downward"
                            percentageColor="red"
                            date="Since last year"
                        />
                    </div>
                    <div className='mt-[-30px] mb-[40px] ml-[29px]'>
                    <Button color="orange">custome</Button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                    
                    <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transactions"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transactions"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last week"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transactions"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transactions"
                            amount="924"

                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last year"
                        />
                    </div>
                    <div className='mt-[-30px] mb-[40px] ml-[29px]'>
                    <Button color="orange">custome</Button>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 mb-4">
                        
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transaction amount"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since yesterday"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transaction amount"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last week"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transaction amount"
                            amount="924"
                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last month"
                        />
                        <StatusCard
                            color="orange"
                            icon="paid"
                            title="Transaction amount"
                            amount="924"

                            percentage="1.10"
                            percentageIcon="arrow_downward"
                            percentageColor="orange"
                            date="Since last year"
                        />
                    </div>
                    <div className='mt-[-30px] mb-[40px] ml-[29px]'>
                    <Button color="orange">custome</Button>
                    </div>
                </div>
            </div>
            </div>
    );
}