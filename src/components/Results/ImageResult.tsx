import Image from "next/image";
import { ItemsType } from "../../types";

export const ImageResult = ({data, links}: ItemsType) => {
    const imageData = links[0];
    if (!imageData) {
        return <p>Unable to load image</p>
    }

    return <Image width='300px' height='200px' src={links[0]?.href || ''} alt={data[0]?.description || ''} />
}

export default ImageResult;