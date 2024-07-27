import { useEffect, useState } from "react";
import * as bonsaiAPI from '../../api/bonsai-api';

import HeroSection from "../hero-section/HeroSection";
import { useParams } from "react-router-dom";
import PageShortDescription from "../pages/PageShortDescription";

export default function GuideDetails(treeId) {
    const [details, setDetails] = useState([]);
    const [page, setPage] = useState([]);

    const params = useParams();

    useEffect(() => {
        bonsaiAPI.getOne(params.guideId)
            .then(result => setPage(result));
    }, []);

    // useEffect(() => {
    //     bonsaiAPI.getTreeDetails(`/details/${treeId}`)
    //         .then(result => setDetails(result));
    // }, []);

    const currentPage = {
        title: page.name,
        subtitle: page.nameBinominal,
        backgroundImg: page.backgroundURL,
        shortDescription: page.shortDescription
    }

    return (
        <>
            <HeroSection page={currentPage}/>
            <PageShortDescription page={currentPage} />
        </>
    )
}