import StatusCard from 'components/StatusCard';
import { Button } from '@material-tailwind/react';
import ChartLine from 'components/ChartLine';
import ChartBar from 'components/ChartBar';
import DatePicker from './DatePicker';

import Image from '@material-tailwind/react/Image';
import { useState } from 'react';
import calender from 'assets/img/calender.png';
import Popover from "@material-ui/core/Popover";
  
export default function StatusDetail() {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    return (
    <div> 
        
        <div className="bg-gray-100 px-3 md:px-8 h-40" />
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
                <div className="px-3 md:px-8">
                <div className="container mx-auto max-w-full">
                    <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 ">
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
                    
                    {/* <Popover>
      <PopoverHandler>
        <Button variant="gradient">Show Popover</Button>
      </PopoverHandler>
      <PopoverContent>
        This is a very beautiful popover, show some love.
      </PopoverContent>
    </Popover> */}
            <div>
            <Button
        variant="contained"
        className='ml-7 mb-8'
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >Choose Custome Date</Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <div><DatePicker/></div>
      </Popover>
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
                    <div>
            <Button
        variant="contained"
        className='ml-7 mb-8'
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >Choose Custome Date</Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <div><DatePicker/></div>
      </Popover>
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
                    <div>
            <Button
        variant="contained"
        className='ml-7 mb-8'
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >Choose Custome Date</Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <div><DatePicker/></div>
      </Popover>
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
                    <div>
            <Button
        variant="contained"
        className='ml-7 mb-8'
        onClick={(event) => {
          setAnchorEl(event.currentTarget);
        }}
      >Choose Custome Date</Button>
      <Popover
        anchorEl={anchorEl}
        open={open}
        id={open ? "simple-popover" : undefined}
        onClose={() => {
          setAnchorEl(null);
        }}
        transformOrigin={{
          horizontal: "center",
          vertical: "top",
        }}
        anchorOrigin={{
          horizontal: "center",
          vertical: "bottom",
        }}
      >
        <div><DatePicker/></div>
      </Popover>
            </div>
                </div>
            </div>
            </div>
    );
}