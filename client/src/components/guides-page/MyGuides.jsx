import { useState, useEffect } from "react"

import * as bonsaiAPI from '../../api/bonsai-api';
import GuideItem from "./GuideItem";
import { useAuthContext } from "../../contexts/AuthContext";

export default function MyGuides() {

    const [myGuides, setMyGuides] = useState([]);

    const { userId, isAuthenticated } = useAuthContext();

    useEffect(() => {
        bonsaiAPI.getMyGuides(userId)
            .then(result => setMyGuides(result));
    }, []);

    return (
        <>
            {isAuthenticated && myGuides.length > 0
                ? (
                    <div className="grid max-w-6xl py-[40px] m-auto">
                        <div className="font-body font-bold text-[1.88em] text-dark-gray">
                            <h3>My guides</h3>
                        </div>
                        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                            {myGuides.map(item => <GuideItem {...item} key={item._id} />)}
                        </div>
                        <div className="border-b-2 pt-8"></div>
                    </div>
                )
                : <></>
            }
        </>
    )
}