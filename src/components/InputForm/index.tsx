import { Select } from "@cruk/cruk-react-components"
import { useState } from "react"
import { NasaSearchParams } from "../../types"
import MEDIA_TYPES from "../../constants"

export const InputForm = ({keywords, yearStart, mediaType}: NasaSearchParams) => {
    console.log(keywords, yearStart, mediaType);

    const [ state, setState ] = useState(mediaType ?? '');

    const updateType = (event: Event) => {
        setState(event.target?.value as string);
        event.preventDefault();
    }

    return (
        <form>
            <Select label="Media Type" onChange={updateType} value={state}>
                {MEDIA_TYPES.map(({type, label}) => <option key={type} value={type}>{label}</option>)}
            </Select>
        </form>
    )
}

export default InputForm