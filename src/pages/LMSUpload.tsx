import React,{useState,useEffect} from "react";
import { FileUploader} from "@aws-amplify/ui-react";
import { Storage } from "aws-amplify";
import {S3ProviderListOutputItem} from "@aws-amplify/storage"
import "@aws-amplify/ui-react/styles.css"
import "../App.css"
import { Container ,Box} from "@chakra-ui/react";
import Database from "./lms/Database";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { LMSReport } from "./lms/LMSReport";
import {
    withAuthenticator,
  } from "@aws-amplify/ui-react";
 

function LMSUpload(){
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
     
    </Container>
    </TabPanel>
    <TabPanel>
      <LMSReport/>
    </TabPanel>
    <TabPanel>
    <Database/>
    </TabPanel>
  </TabPanels>
</Tabs>


    </>

    )
}

export default withAuthenticator(LMSUpload);