import { API } from 'aws-amplify';
import * as queries from '../graphql/queries';
import { GraphQLQuery } from '@aws-amplify/api';
import { ListLMSQuery ,LMS} from '../API';
import { useState,useEffect } from 'react';
import {
  Button,
} from '@chakra-ui/react'
import * as mutations from '../graphql/mutations';
import { CreateTodoInput, CreateTodoMutation } from '../API';
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



export const Test = () => {
  const[toLMS,setLMS] = useState<LMS[]>([])

  useEffect(()=>{
    fetchData()
  },[]
  
  )

  async function fetchData() {
    try{
    const allLMS = await API.graphql<GraphQLQuery<ListLMSQuery>>(
      { query: queries.listLMS }
    );
    const res = allLMS.data?.listLMS?.items; // result: { "data": { "listTodos": { "items": [/* ..... */] } } }
    console.log(res)
    setLMS(res?.map(item => item as LMS) || [])
    } catch (error){
      console.log('error on fetching data',error)
    }
  };
  return (
    <>
     
     <TableContainer>
     <Table size='sm'>
    <TableCaption>Imperial to metric conversion factors</TableCaption>
    
  <Thead>
    <Tr>
      <Th>Time</Th>
      <Th>Date</Th>
      <Th>Point 1</Th>
      <Th>Point 2</Th>
      <Th>Point 3</Th>
      <Th>Point 4</Th>
      <Th>Point 5</Th>
      <Th>Point 6</Th>
      <Th>Point 7</Th>
      <Th>Point 8</Th>
      <Th>Point 9</Th>
      <Th>Point 10</Th>
      <Th>Point 11</Th>
      <Th>Point 12</Th>
      <Th>Point 13</Th>
    </Tr>
  </Thead>
  <Tbody>
    {toLMS.map((lms) => (
      <Tr key={lms.id}>
        <Td>{lms.Date}</Td>
        <Td>{lms.Time}</Td>
        <Td>{lms.Point_1}</Td>
        <Td>{lms.Point_2}</Td>
        <Td>{lms.Point_3}</Td>
        <Td>{lms.Point_4}</Td>
        <Td>{lms.Point_5}</Td>
        <Td>{lms.Point_6}</Td>
        <Td>{lms.Point_7}</Td>
        <Td>{lms.Point_8}</Td>
        <Td>{lms.Point_9}</Td>
        <Td>{lms.Point_10}</Td>
        <Td>{lms.Point_11}</Td>
        <Td>{lms.Point_12}</Td>
        <Td>{lms.Point_13}</Td>
      </Tr>
    ))}
  </Tbody>
</Table>
</TableContainer>
    </>
  )
}
