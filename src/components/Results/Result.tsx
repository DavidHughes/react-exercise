
import {Text} from "@cruk/cruk-react-components";
import {ItemsType } from "../../types";

import ImageResult from "./ImageResult"

const Result = ({data, href, links}: ItemsType) => {
    const firstItem = data?.[0];
    if (firstItem?.media_type === 'image') {
        return <ImageResult data={data} href={href} links={links} />
    }

    return <>
        <Text>{firstItem?.description}</Text>
        <Text>Type: {firstItem?.media_type}</Text>
    </>
}

export default Result;