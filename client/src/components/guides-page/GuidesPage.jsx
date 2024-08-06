import { useEffect, useState } from "react";
import * as bonsaiAPI from '../../api/bonsai-api';

import HeroSection from "../hero-section/HeroSection";
import PageShortDescription from "../pages/PageShortDescription";
import GuideSection from "./GuideSection";
import RecentlyAdded from "./RecentlyAdded";
import MyGuides from "./MyGuides";

export default function Guides() {
    const [page, setPage] = useState([]);

    useEffect(() => {
        bonsaiAPI.getPage('treeSpecies')
            .then(result => setPage(result));
    }, []);

    return (
        <>
            <HeroSection page={page} />
            <PageShortDescription shortDescription={page.shortDescription} />
            <MyGuides />
            <RecentlyAdded />
            <div className="max-w-6xl m-auto mb-[60px] mt-6 mb-4">
                <div className="font-body font-bold text-[1.88em] text-dark-gray">
                    <h3>All Guides</h3>
                </div>
                <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Find your tree species</h2>
                <p className="font-body text-lg text-light-gray tracking-wide">We categorized the tree species into Broadleaf evergreen (leaves year-round), Deciduous (sheds leaves in fall) and Conifers (with needles or scale-like foliage).</p>
            </div>
            <section id="guide-section-container">
                <div className="mb-[60px]">
                    <div className="max-w-6xl m-auto mb-[10px]">
                        <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Broadleaf evergreen species</h2>
                        <p className="font-body text-lg text-light-gray tracking-wide">Tree species that never lose all of their leaves at a single time, though they do shed their leaves gradually throughout the year.</p>
                    </div>
                    <GuideSection category="Broadleaf evergreen" />
                </div>
            </section>
            <section id="guide-section-container">
                <div className="mb-[60px]">
                    <div className="max-w-6xl m-auto mb-[10px]">
                        <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Deciduous trees</h2>
                        <p className="font-body text-lg text-light-gray tracking-wide">Tree species that shed leaves in fall or in the dry season.</p>
                    </div>
                    <GuideSection category="Deciduous" />
                </div>
            </section>
            <section id="guide-section-container">
                <div className="mb-[60px]">
                    <div className="max-w-6xl m-auto mb-[10px]">
                        <h2 className="font-body text-2xl font-bold tracking-tight text-dark-gray mt-8 mb-4">Pines and Conifiers</h2>
                        <p className="font-body text-lg text-light-gray tracking-wide">Tree species with needle or scale-like foliage.</p>
                    </div>
                    <GuideSection category="Pines and conifiers" />
                </div>
            </section>

        </>
    )
}
