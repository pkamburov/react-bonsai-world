import { useEffect, useState } from "react";

import { bonsaiApi } from "../../api/bonsai-api";
import HeroSection from "../hero-section/HeroSection";


export default function CreateGuide() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiApi.getPage('create-guide')
            .then(result => setPage(result));
    }, []);
    return (
        <>
            <HeroSection page={page} />
        </>
    )
}
