import { useEffect, useState } from "react";
import * as bonsaiAPI from '../../api/bonsai-api';

import HeroSection from "../hero-section/HeroSection";
import { useParams } from "react-router-dom";
import PageShortDescription from "../pages/PageShortDescription";
import { InfoDetailsItem } from "../info-section/InfoDetailsItem";

export default function GuideDetails(treeId) {
    const [details, setDetails] = useState([]);
    const [page, setPage] = useState([]);

    const params = useParams();

    useEffect(() => {
        bonsaiAPI.getOne(params.guideId)
            .then(result => setPage(result));
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    const currentPage = {
        title: page.name,
        subtitle: page.nameBinominal,
        backgroundImg: page.backgroundURL,
        shortDescription: page.shortDescription,
        category: page.category,
        details: {
            placement: page.placement,
            watering: page.watering,
            pestsAndDeseases: page.pestsAndDeseases
        }
    }

    return (
        <>
            <HeroSection page={currentPage}/>
            <PageShortDescription shortDescription={currentPage.shortDescription} />
            <InfoDetailsItem props={currentPage.details}/>
        </>
    )
}