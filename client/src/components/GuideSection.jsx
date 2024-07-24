import { useEffect, useState } from "react";
import * as bonsaiAPI from '../api/bonsai-api';

import GuideItem from "./GuideItem";

export default function GuideSection(category) {

    const [guides, setGuides] = useState([]);
    
    useEffect(() => {
        bonsaiAPI.getAll()
        .then(result => setGuides(result))
    }, []);

    return (
        <div className="bg-white max-w-6xl m-auto">
            <div className="mx-auto max-w-2xl py-6 sm:py-4 lg:max-w-6xl">
                <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                    {guides.filter(guide => guide.category.includes(category.category)).map(filteredGuide => (
                        <GuideItem {...filteredGuide} key={filteredGuide._id} /> ))}
                </div>
            </div>
        </div>
    )
}