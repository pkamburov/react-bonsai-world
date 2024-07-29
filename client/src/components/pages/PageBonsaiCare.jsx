import { useEffect, useState } from "react";

import * as bonsaiAPI from '../../api/bonsai-api';
import HeroSection from "../hero-section/HeroSection";
import PageShortDescription from "./PageShortDescription";
import { InfoSection } from "../info-section/InfoSection";
import { InfoAccordion } from "../accordion/InfoAccordion";

export default function PageBonsaiCare() {

    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('bonsaiCare')
            .then(result => setPage(result));
    }, []);

    if (page.guidelines) {
        const guidelines = page.guidelines.slice(0, 3);
        const accordionInfo = page.guidelines.slice(3, page.guidelines.length);

        return (
            <>
                <HeroSection page={page} />
                <PageShortDescription page={page} />
                <InfoSection guidelines={guidelines} />
                <InfoAccordion guidelines={accordionInfo} />
            </>
            
        )
    }

}