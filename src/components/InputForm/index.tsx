import { Select } from "@cruk/cruk-react-components"
import { ChangeEvent, useState } from "react"
import MEDIA_TYPES from "../../constants"
import { Inputs, MediaSelectElement } from "../../types"

export const InputForm = ({keywords, yearStart, mediaType, onChange}: Inputs) => {
    console.log(keywords, yearStart, mediaType);

    const [ media, setMedia ] = useState(mediaType ?? '');

    const updateType = (event: ChangeEvent<MediaSelectElement>) => {
        console.log('New type selected:', event)
        setMedia(event.target?.value);
        onChange({keywords, yearStart, mediaType: event.target?.value })
        event.preventDefault();
    }

    return (
        <form>
            <Select label="Media Type" onChange={updateType} value={media}>
                {MEDIA_TYPES.map(({type, label}) => <option key={type} value={type}>{label}</option>)}
            </Select>
        </form>
    )
}

export default InputForm;