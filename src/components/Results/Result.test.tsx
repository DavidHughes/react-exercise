import { getByAltText, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Result from "./Result";

describe('Result', () => {
    it('renders image data as Images', () => {
        const altText = 'The expected ALT text.'
        const data = [{
            keywords: [],
            nasa_id: 'testing-id',
            media_type: 'image',
            description: altText,
        }];
        const links = [{
            href: 'https://images-assets.nasa.gov/image/KSC-2012-2734/KSC-2012-2734~thumb.jpg'
        }];
        const href = 'Test Href value';
        render(<Result data={data} links={links} href={href} />)
        screen.getByAltText(altText);
    });
})