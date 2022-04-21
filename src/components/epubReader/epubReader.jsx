import { useState } from "react";
import { ReactReader } from "react-reader";
import { Box } from "@chakra-ui/react";

const EpubReader = () => {
  const [location, setLocation] = useState(null);
  const locationChanged = (epubcifi) => {
    setLocation(epubcifi);
  };
  return (
    <>
      <Box height= "100vh" >
     
        <ReactReader
          location={location}
          locationChanged={locationChanged}
          url="https://gerhardsletten.github.io/react-reader/files/alice.epub"
        />
      
      </Box>
    </>
  );
};

export default EpubReader;
