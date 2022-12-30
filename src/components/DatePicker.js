
import { addDays } from 'date-fns';
import { useState } from 'react';
import 'react-date-range/dist/styles.css';
import 'react-date-range/dist/theme/default.css';
import DateRangePicker from 'react-date-range/dist/components/DateRangePicker';
function DatePicker() {
  const [state, setState] = useState([
    {
      startDate: new Date(),
      endDate: addDays(new Date(), 7),
      key: 'selection'
    }
  ]);
  return (
    <div>
      <DateRangePicker
  onChange={item => setState([item.selection])}
  showSelectionPreview={true}
  moveRangeOnFirstSelection={false}
  months={2}
  ranges={state}
  direction="horizontal"
/>;
        <div>
          <h1>This is the card that shows the nuber of new users </h1>

        </div>
    </div>
  );
}

export default DatePicker;
