import { Heading, Text, Box } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";
import { useState } from "react";

import Results from "../Results";
import InputForm from "../InputForm";

export const HomePage = () => {
  //
  // form and validation code here

  const exampleParam: NasaSearchParams = {
    keywords: "moon",
    yearStart: 2000,
    mediaType: "video",
  };

  const [params, setParams] = useState(exampleParam)

  const onChange = (newParams: NasaSearchParams) => {
    console.log('New params: ', newParams);
    setParams(newParams)
  }

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>React Exercise</Heading>

      <InputForm 
        keywords={params.keywords} 
        yearStart={params.yearStart}
        mediaType={params.mediaType}
        onChange={onChange}
      />

      <Results searchParams={params} />
    </Box>
  );
};

export default HomePage;
