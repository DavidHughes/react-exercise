import { Text } from "@cruk/cruk-react-components";
import { DataType, ItemsType, NasaSearchParams } from "../../types";
import useNasaQuery from "../../hooks/useNasaQuery";
import Result from "./Result";

type ResultsProps = {
  searchParams: NasaSearchParams;
};

export const Results = ({ searchParams }: ResultsProps) => {
  const { data: resultSet, error, isFetching } = useNasaQuery(searchParams);

  if (isFetching) {
    return <Text>Waiting on NASA launch</Text>
  }

  return (
    <>
      <Text>results go here</Text>
      <ul>
        {resultSet?.collection.items.slice(0, 10).map(({data, href, links}) => <li key={href}>
            <Result data={data} href={href} links={links} />
          </li>
        )};
      </ul>
    </>
  );
};

export default Results;
