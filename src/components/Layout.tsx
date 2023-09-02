import React from "react";
import { Outlet } from "react-router-dom";
import  Navbar  from "./navbar/Navbar";
import { SimpleGrid ,Box} from '@chakra-ui/react'
export interface ILayoutComponentProps{}

const LayoutComponent:React.FunctionComponent<ILayoutComponentProps> = (props) => {
   
    return <>
    <SimpleGrid columns={1} spacingX='40px' spacingY='5px'>
  <Box  height='80px'>   <Navbar/></Box>
  <Box  height='700px'>   <Outlet/></Box>
 
</SimpleGrid>

 </>
};

export default LayoutComponent;