import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";

import * as bonsaiAPI from '../../api/bonsai-api';
import { AuthContext } from '../../contexts/AuthContext'

import HeroSection from "../hero-section/HeroSection";
import PageShortDescription from "../pages/PageShortDescription";
import { InfoDetailsItem } from "../info-section/InfoDetailsItem";
import GuideOwnerSection from "./GuideOwnerSection";
import GuideLikeSection from "./GuideLikeSection";
import { GuideCommentSection } from "../guide-comments/GuideCommentSection";

export default function GuideDetails(treeId) {
    const [page, setPage] = useState([]);
    const { isAuthenticated, userId, username } = useContext(AuthContext);

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
            {isAuthenticated && page._ownerId === userId
            ? <GuideOwnerSection user={username}/>
            : <p></p> }
            {isAuthenticated && page._ownerId !== userId 
            ? <GuideLikeSection /> 
            : <p></p>}
            <PageShortDescription shortDescription={currentPage.shortDescription} />
            <InfoDetailsItem props={currentPage.details}/>
            <GuideCommentSection />
        </>
    )
}