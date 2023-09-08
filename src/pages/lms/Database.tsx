import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../../graphql/queries';

import { GraphQLQuery } from '@aws-amplify/api';

import { ListSKGOPointLogsQuery,  SKGOPointLog} from '../../API';

import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Button,
  Flex,
  FormControl,
  FormLabel,
  FormHelperText,
  Input,
  Container,
  Center,
} from '@chakra-ui/react'

const Database = () => {

  const [toLMS, setLMS] = useState<SKGOPointLog[]>([]);
  const [sortDirection, setSortDirection] = useState<'asc' | 'desc'>('asc');
  const [sortColumn, setSortColumn] = useState<string|undefined>('Timestamp');
  const [startDate, setStartDate] = useState<string | undefined>();
  const [endDate, setEndDate] = useState<string | undefined>();

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData(start?: string, end?: string) {
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
    fetchData(startDate, endDate);
  };

  return (

    <Container>
      
    <Flex direction='column'>
    <Center w='100px' bg='green.500'>
      <FormControl>
        <FormLabel>Start Date</FormLabel>
        <Input type='date' onChange={(e) => setStartDate(e.target.value)} />
      </FormControl>
      <FormControl>
        <FormLabel>End Date</FormLabel>
        <Input type='date' onChange={(e) => setEndDate(e.target.value)} />
      </FormControl>
      <Button onClick={handleSearch}>Search</Button>
      </Center>
      <TableContainer>
        <Table size='sm' variant='striped'>
          <TableCaption>Imperial to metric conversion factors</TableCaption>
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
                <Td key={`date-${index}`}>{lms.Timestamp}</Td>
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
    </Flex>
    </Container>
  );
};

export default Database;
