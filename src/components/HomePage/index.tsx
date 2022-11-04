import { Heading, Text, Box } from "@cruk/cruk-react-components";
import { NasaSearchParams } from "../../types";

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

  return (
    <Box marginTop="s" paddingTop="s">
      <Heading h1>React Exercise</Heading>

      <InputForm 
        keywords={exampleParam.keywords} 
        yearStart={exampleParam.yearStart}
        mediaType={exampleParam.mediaType}
      />

      <Results searchParams={exampleParam} />
    </Box>
  );
};

export default HomePage;
