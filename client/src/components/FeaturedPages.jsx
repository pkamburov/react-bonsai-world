import { useEffect, useState } from "react";

import * as bonsaiAPI from '../api/bonsai-api';
import FeaturedPagesItem from "./FeaturedPagesItem";

export default function FeaturedPages() {
    const [featuredPages, setFeaturedPages] = useState([]);

    useEffect(() => {
        bonsaiAPI.getFeaturedPages().then(result => setFeaturedPages(result));
    }, []);

    return (
        <>
            <div className="py-[40px] w-[80%] m-auto">
                {featuredPages.map((page) => <FeaturedPagesItem {...page} key={page._id} />)}
            </div>
        </>
    )
}