import React, { useState, useEffect } from 'react';
import * as queries from '../../graphql/queries';
import moment from 'moment';
import { API } from 'aws-amplify';
import { GraphQLQuery } from '@aws-amplify/api';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import './LMS.css'
import { ListSKGOPointLogsQuery,  SKGOPointLog} from '../../API';
import {
  Table,
  Thead,
  Tbody,

  Tr,
  Th,
  Td,
  Box,
  Container,
} from '@chakra-ui/react'



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
    // const a =(b:string)=>{
    //   b= moment('2016-01-01'); 
    //   return(b.format())
    // }
    return (
      <>
      <Container>
         <Box w='40px' h='40px' > 
      
        <DatePicker 
          selected={selectedMonth}
          onChange={(date) => setSelectedMonth(date as Date)}
          dateFormat="MM/yyyy"
          className="blue-border"
          showMonthYearPicker
         
        />
        </Box>
    
       
        {/* Render the data here */}
        {toLMS.length > 0 && toLMSNext.length > 0 && (
          
          <Box w='400px' h='40px' bg='yellow.200'>   
            <Table size='sm' variant='striped'>
              <Thead>
                <Tr>
                  <Th>Start Data:</Th>
                  <Th>End Date:</Th>
                  <Th>Result</Th>
                </Tr>


                <Tr>
                  <Td>{moment(toLMS[0].Timestamp).format('MM-DD-YYYY')}</Td>
                  <Td>{moment(toLMSNext[0].Timestamp).format('MM-DD-YYYY')}</Td>
                  <Td></Td>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>
                    Points Value:<br />
                    {toLMS[0].PointDetails?.map((item) => item?.Value).join('\n')}
                  </Td>
                  <Td>
                  Points Value:<br />
                    {toLMSNext[0].PointDetails?.map((item) => item?.Value).join('\n')}

                  </Td>
                  <Td>
                    Result:
                    {toLMS[0].PointDetails?.map((item, index) => Number(toLMSNext[0].PointDetails?.[index]?.Value) - Number(item?.Value)).reduce((a, b) => a + "\n" + b, "")}
                  </Td>

                </Tr>
              </Tbody>
            </Table>
         `</Box>
     
        )}
      </Container>
      </>
    )
  }
  