import { useState, useEffect } from "react"

import * as bonsaiAPI from '../../api/bonsai-api';
import GuideItem from "../guides-page/GuideItem";

export default function RecentlyAdded() {

    const [recentlyAdded, setRecentlyAdded] = useState([]);

    useEffect(() => {
        bonsaiAPI.getRecent()
            .then(result => setRecentlyAdded(result));
    }, []);

    return (
        <div className="grid max-w-6xl py-[40px] m-auto">
            <div className="font-body font-bold text-[1.88em] text-dark-gray">
                <h3>Recently added</h3>
            </div>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                {recentlyAdded.map(item => <GuideItem {...item} key={item._id} />)}
            </div>
        </div>
    )
}