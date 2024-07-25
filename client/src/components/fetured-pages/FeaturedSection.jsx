import { useEffect, useState } from "react";
import * as bonsaiAPI from '../../api/bonsai-api';

import GuideItem from "../guides-page/GuideItem";

export default function FeaturedSection() {

    const [featured, setFeatured] = useState([]);

    useEffect(() => {
        bonsaiAPI.getFeatured()
            .then(result => setFeatured(result));
    }, []);


    return (
        <div className="bg-white max-w-6xl m-auto">
            <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-6xl">
                <h2 className="text-3xl font-bold tracking-tight text-dark-gray font-body">Most popular species</h2>

                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {featured.map(item => <GuideItem {...item} key={item._id} />)}
                </div>
            </div>
        </div>
    )
}