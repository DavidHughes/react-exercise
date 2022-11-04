import { Select, Button } from "@cruk/cruk-react-components"
import { useState } from "react"
import MEDIA_TYPES from "../../constants"

export const InputForm = ({keywords, yearStart, mediaType, onChange}) => {
    console.log(keywords, yearStart, mediaType);

    const [ media, setMedia ] = useState(mediaType ?? '');

    const updateType = (event: Event) => {
        console.log('New type selected:', event)
        setMedia(event.target?.value);
        onChange({keywords, yearStart, mediaType: event.target?.value})
        event.preventDefault();
    }

    const updateState = (event: Event) => {
        onChange({keywords, yearStart, mediaType: media})
        event.preventDefault();
    }

    return (
        <form>
            <Select label="Media Type" onChange={updateType} value={media}>
                {MEDIA_TYPES.map(({type, label}) => <option key={type} value={type}>{label}</option>)}
            </Select>
            {/* <Button onClick={updateState}>Search</Button> */}
        </form>
    )
}

export default InputForm