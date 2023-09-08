import React, { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import moment from 'moment';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import DatePicker from 'react-datepicker';

import { ListSKGOPointLogsQuery,  SKGOPointLog} from '../../API';

export const LMSReport = () => {
    
  const [toLMS, setLMS] = useState<SKGOPointLog[]>([]);
  const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());

  async function fetchData(start?: string, end?: string) {
    console.log("start date:", start);
    console.log("end date:", end);
    try {
      const allLMS = await API.graphql<GraphQLQuery<ListSKGOPointLogsQuery>>({
        query: queries.listSKGOPointLogs,
        variables: {
          filter: {
            Timestamp: {
              between: [start!, end!],
            },
          },
        },
      });
      const res = allLMS.data?.listSKGOPointLogs?.items;
      console.log(res);
      setLMS(res?.map((item,index:number) => item as SKGOPointLog) || []);
    } catch (error) {
      console.log('error on fetching data', error);
    }
  }

  async function FetchDataMonthly() {
    const start = moment(selectedMonth).startOf('month').format();
    const end = moment(selectedMonth).endOf('month').format();
    await fetchData(start, end);
  }

  useEffect(() => {
    FetchDataMonthly();
  }, [selectedMonth]);

  return (
    <div>
      <DatePicker
        selected={selectedMonth}
        onChange={(date) => setSelectedMonth(date as Date)}
        dateFormat="MM/yyyy"
        showMonthYearPicker
      />
      {/* Render the data here */}
      {toLMS.length > 0 && (
        <div>
          <p>第一筆資料:</p>
          <p>Timestamp: {toLMS[0].Timestamp}</p>
          <p>Points: {toLMS[0].PointDetails?.map((item) => item?.Value).join(", ")}</p>
      
        </div>
      )}
    </div>
  )
}