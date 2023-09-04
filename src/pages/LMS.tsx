import React,{useState,useEffect} from "react";
import { FileUploader,Collection,Image} from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import {S3ProviderListOutputItem} from "@aws-amplify/storage"
import "@aws-amplify/ui-react/styles.css"
import "../App.css"
import { Container ,Box} from "@chakra-ui/react";
import  Test from "./Test";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import {
    withAuthenticator,
  } from "@aws-amplify/ui-react";
function LMS(){
    const [imageKeys,setImageKeys] = useState<S3ProviderListOutputItem[]>([]);
    const [images,setImages] = useState<string[]>([]);

    const fetchImages = async () => {
        const {results} = await Storage.list("", {level:"public"});
        setImageKeys(results);
        const s3Images = await Promise.all(
            results.map(
                async image => await Storage.get(image.key!, {level:"public"})
            )
        );
        setImages(s3Images)
    };
    
    useEffect(() =>{
        fetchImages();

    },[]);

    const onSuccess = (event: {key:string})=>{
        fetchImages();
    }



    return(
    <>

<Tabs>
  <TabList>
    <Tab>Upload csv</Tab>
    <Tab>Export csv</Tab>
    <Tab>Check Database</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
     
    <Container>
        <Box boxSize='20px'></Box>
        <FileUploader
        accessLevel="public"
        acceptedFileTypes={[".csv"]}
        variation="drop"
        onSuccess={onSuccess}
        />
        <Collection
        items={images}
        type="grid"
        padding="2rem"
        maxWidth={"1100px"}
        margin="0 auto"
        justifyContent="center"
        templateColumns={{
            base:"minmax(0,500px)",
            medium:"repeat(2,minmax(0,1fr))",
            large:"repeat(3,minmax(0,1fx))"

        }}
        gap="small"
        >   
        
        {(item,index)=>(
            <>
            
        
           
            
            </>
        )}
        
        </Collection>
    </Container>
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
    <Test/>
    </TabPanel>
  </TabPanels>
</Tabs>


    </>

    )
}

export default withAuthenticator(LMS);