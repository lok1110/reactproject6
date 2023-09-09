import React, { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import moment from 'moment';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import DatePicker from 'react-datepicker';

import { ListSKGOPointLogsQuery,  SKGOPointLog} from '../../API';


export const LMSReport = () => {
    
    const [toLMS, setLMS] = useState<SKGOPointLog[]>([]);
    // 新增一個state來存儲下個月的數據
    const [toLMSNext, setLMSNext] = useState<SKGOPointLog[]>([]);
    const [selectedMonth, setSelectedMonth] = useState<Date>(new Date());
  
    async function fetchData(start?: string, end?: string) {
      console.log("start date:", start);
      console.log("end date:", end);
      try {
        // 使用兩個API調用來獲取當前月份和下個月的數據
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
  
        const allLMSNext = await API.graphql<GraphQLQuery<ListSKGOPointLogsQuery>>({
          query: queries.listSKGOPointLogs,
          variables: {
            filter: {
              Timestamp: {
                between: [moment(start).add(1, 'month').format(), moment(end).add(1, 'month').format()],
              },
            },
          },
        });
        const resNext = allLMSNext.data?.listSKGOPointLogs?.items;
        console.log(resNext);
        setLMSNext(resNext?.map((item,index:number) => item as SKGOPointLog) || []);
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
        {toLMS.length > 0 && toLMSNext.length > 0 && (
          <div>
            <p>第一筆資料:</p>
            <p>Timestamp: {toLMS[0].Timestamp}</p>
            <p>Points: {toLMS[0].PointDetails?.map((item) => item?.Value).join(", ")}</p>
            <p>第二筆資料:</p>
            <p>Timestamp: {toLMSNext[0].Timestamp}</p>
            <p>Points: {toLMSNext[0].PointDetails?.map((item) => item?.Value).join(", ")}</p>
            <p>相減結果:</p>
            // 使用map函數和reduce函數來計算兩個數據的Points之差
            <p>Points: {toLMS[0].PointDetails?.map((item, index) =>  Number(toLMSNext[0].PointDetails?.[index]?.Value) - Number(item?.Value)).reduce((a,b) => a + ", " + b, "")}</p>
        
          </div>
        )}
      </div>
    )
  }