import { useEffect, useState } from "react";

import * as bonsaiAPI from '../api/bonsai-api';
import HeroSection from "./HeroSection";
import PageShortDescription from "./PageShortDescription";

export default function PageBonsaiStyling() {

    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('bonsai-styling')
            .then(result => setPage(result));
    }, []);

    return (
        <>
            <HeroSection page={page} />
            <PageShortDescription page={page} />
        </>

    )
}