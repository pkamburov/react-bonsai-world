import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import HeroSection from "./HeroSection";
import FeaturedSection from "./FeaturedSection";
import PageShortDescription from "./PageShortDescription";
import GuideSection from "./GuideSection";

export default function Guides() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('tree-species')
            .then(result => setPage(result));
    }, []);

    return (
        <>
            <HeroSection page={page} />
            <PageShortDescription page={page} />
            <FeaturedSection />
            <div className="max-w-6xl m-auto mb-[60px]">
                <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Find your tree species</h2>
                <p className="font-body text-lg text-light-gray tracking-wide">We categorized the tree species into Broadleaf evergreen (leaves year-round), Deciduous (sheds leaves in fall) and Conifers (with needles or scale-like foliage).</p>
            </div>
            <div className="section-container mb-[60px]">
                <div className="max-w-6xl m-auto mb-[10px]">
                    <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Broadleaf evergreen species</h2>
                    <p className="font-body text-lg text-light-gray tracking-wide">Tree species that never lose all of their leaves at a single time, though they do shed their leaves gradually throughout the year.</p>
                </div>
                <GuideSection category="Broadleaf evergreen" />
            </div>
            <div className="section-container mb-[60px]">
                <div className="max-w-6xl m-auto mb-[10px]">
                    <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Deciduous trees</h2>
                    <p className="font-body text-lg text-light-gray tracking-wide">Tree species that shed leaves in fall or in the dry season.</p>
                </div>
                <GuideSection category="Deciduous" />
            </div>
            <div className="section-container mb-[60px]">
                <div className="max-w-6xl m-auto mb-[10px]">
                    <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Pines and Conifiers</h2>
                    <p className="font-body text-lg text-light-gray tracking-wide">Tree species with needle or scale-like foliage.</p>
                </div>
                <GuideSection category="Pines and conifiers" />
            </div>

        </>
    )
}