import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';
import * as mutations from '../../graphql/mutations';
import moment from 'moment';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListSKGOPointLogsQuery,  SKGOPointLog,DeleteSKGOPointLogMutation,DeleteSKGOPointLogInput} from '../../API';

import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Box,
  FormControl,
  FormLabel,
  Input,
  Container,
  HStack,
  SimpleGrid ,
} from '@chakra-ui/react'

const Database = () => {

  const [toLMS, setLMS] = useState<SKGOPointLog[]>([]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string|undefined>('Timestamp');
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();
  const [nextToken, setNextToken] = useState<string | null | undefined>();
  const [limit, setLimit] = useState<number>(20);


  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(next?: string) {
    try {
      const allLMS = await API.graphql<GraphQLQuery<ListSKGOPointLogsQuery>>({
        query: queries.listSKGOPointLogs,
        variables: {
          filter: {
            Timestamp: {
              between: [startDate!, endDate!],
            },
          },
          limit,
          nextToken: next ?? undefined,
        },
      });
      const res = allLMS.data?.listSKGOPointLogs?.items;
      console.log(res);
      setLMS((prevData) => [...prevData, ...(res?.map((item,index:number) => item as SKGOPointLog) || [])]);
      setNextToken(allLMS.data?.listSKGOPointLogs?.nextToken);
    } catch (error) {
      console.log('error on fetching data', error);
    }
  }


  async function deleteAllData() {
    try {
      // 获取所有数据的id
      const allData = await API.graphql<GraphQLQuery<ListSKGOPointLogsQuery>>({
        query: queries.listSKGOPointLogs

      });
      const allIds = allData.data?.listSKGOPointLogs?.items.map(item => item?.id)|| [];
      console.log(allIds)
      // 循环删除每个数据
      for (let id of allIds) {
        const skgoPointLogDetails: DeleteSKGOPointLogInput = {
          id: id!,
        };
        const deletedTodo = await API.graphql<GraphQLQuery<DeleteSKGOPointLogMutation>>({
          query: mutations.deleteSKGOPointLog,
          variables: { input: skgoPointLogDetails }
        });
      }
    } catch (error) {
      console.log('error on deleting data', error);
    }
  }

  const handleSort = (column: string|undefined) => {
    if (sortColumn === column) {
      setSortDirection(sortDirection === 'asc' ? 'desc' : 'asc');
    } else {
      setSortColumn(column);
      setSortDirection('asc');
    }
  }

  const sortedData = React.useMemo(() => {
    const sorted = [...toLMS].sort((a, b) => {
      const isAsc = sortDirection === 'asc';
      switch (sortColumn) {
        case 'Timestamp':
          return isAsc ? new Date(a.Timestamp).getTime() - new Date(b.Timestamp).getTime() : new Date(b.Timestamp).getTime() - new Date(a.Timestamp).getTime();
        default:
          return 0;
      }
    });
    return sorted;
  }, [toLMS, sortColumn, sortDirection]);

  const handleSearch = () => {
    fetchData();
  };

  const handleNext = () => {
    fetchData(nextToken!);
  }

  return (

     <Container>
 
    
 <SimpleGrid columns={1} spacing={5}>

 <Box height='80px'>
 <HStack spacing='24px'>
    <Box w='200px' h='40px'>
      <FormControl>
       <FormLabel>Start Date:</FormLabel>
        <Input type='date' onChange={(e) => setStartDate(e.target.value)} />
      </FormControl>
      </Box>
      <Box w='200px' h='40px' >
      <FormControl>
        <FormLabel>End Date:</FormLabel>
        <Input type='date' onChange={(e) => setEndDate(e.target.value)} />
      </FormControl>
      </Box>

      <Box w='40px' h='40px' bg='yellow.200'>
      <Button onClick={handleSearch}>Search</Button>
      </Box>
      </HStack>
      </Box>
      <Box height='80px'>
      <TableContainer>
        <Table size='sm' variant='striped'>
          <TableCaption>End</TableCaption>
          <Thead>
            <Tr>
              <Th
                key='Timestamp'
                onClick={() => handleSort('Timestamp')}
              >
                Date Time
                {sortColumn === 'Timestamp' ? (
                  sortDirection === 'asc' ? ' ▲' : ' ▼'
                ) : null}
              </Th>
              {toLMS[0]?.PointDetails?.map((PointDetail,index:number) => (
                <Th
                  key={index}
                  onClick={() => handleSort(PointDetail?.PointName)}
                >
                  {PointDetail?.PointName}
                  {sortColumn === PointDetail?.PointName ? (
                    sortDirection === 'asc' ? ' ▲' : ' ▼'
                  ) : null}
                </Th>
              ))}
            </Tr>
          </Thead>
          <Tbody>
            {sortedData.map((lms, index) => (
              <Tr key={`lms-${index}`}>
                <Td key={`date-${index}`}>{moment(lms.Timestamp).format('MM-DD-YYYY')}</Td>
                {lms.PointDetails?.map((PointDetail, index2) => (
                  <Td
                    key={`detail-${index}-${index2}`}
                  >
                    {PointDetail?.Value}
                  </Td>
                ))}
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
      {nextToken && <Button onClick={handleNext}>Next</Button>}
      </Box>
      </SimpleGrid>
      </Container>
 

  );

};

export default Database;
