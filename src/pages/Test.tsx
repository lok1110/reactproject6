import React, { useState, useEffect } from 'react';
import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListLMSQuery, LMS } from '../API';

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
} from '@chakra-ui/react'


const Test = () => {
  const [toLMS, setLMS] = useState<LMS[]>([]);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      const allLMS = await API.graphql<GraphQLQuery<ListLMSQuery>>({
        query: queries.listLMS,
      });
      const res = allLMS.data?.listLMS?.items;
      console.log(res);
      setLMS(res?.map((item) => item as LMS) || []);
    } catch (error) {
      console.log('error on fetching data', error);
    }
  }

  return (
    <>
      <TableContainer>
        <Table size ='sm' variant='striped'>
        <TableCaption>Imperial to metric conversion factors</TableCaption>
          <Thead>
            <Tr>
              <Th>Date</Th>
              <Th>Time</Th>
              {toLMS[0]?.Points?.map((point) => (
                <Th key={point?.name}>{point?.name}</Th>
              ))}
            </Tr>

          </Thead>
          <Tbody>
          
              {toLMS.map((lms) => (
                <Tr key={lms.id}>
                  <Td>{lms.Date}</Td>
                  <Td>{lms.Time}</Td>

                  {lms.Points?.map((point) => (
                    <Td>{point?.value}</Td>
                  ))}

                </Tr>
              ))}
            
          </Tbody>
        </Table>
      </TableContainer>
    </>
  );
};

export default Test;
