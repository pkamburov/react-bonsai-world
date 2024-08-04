import { useParams } from "react-router-dom";
import { useContext, useEffect, useState } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

import { likesApi } from "../../api/likes-api";
import { AuthContext } from "../../contexts/AuthContext";

export default function GuideLikeSection() {
    const { guideId } = useParams();
    const { userId } = useContext(AuthContext);
    
    const [allLikes, setAllLikes] = useState();
    const [hasLiked, setHasLiked] = useState();

    useEffect(() => {
        likesApi.getLikes(guideId)
            .then(result => setAllLikes(result));
    }, []);

    useEffect(() => {
        const currentUserLikes = allLikes?.filter(like => like._ownerId === userId);
        if (currentUserLikes?.length) {
            setHasLiked(true);
        }
    }, [allLikes])

    const likeSubmitHandler = async () => {
        try {
            await likesApi.create(guideId);
        } catch (error) {
            console.log(error.message)
        }

        setHasLiked(true);
        const allLikes = await likesApi.getLikes(guideId);
        setAllLikes(allLikes);
    }

    return (
        <div className="max-w-6xl m-auto pl-10">
            <div className="flex-grid columns-2 gap-8 max-w-[40%]">
                <div className="">
                    {hasLiked
                        ? <>
                            <button
                                onClick={likeSubmitHandler}
                                disabled
                                className="px-4 py-2 text-[0.92em] font-medium border-2 border-slate-300 text-gray-700 hover:bg-slate-100 rounded-lg uppercase">
                                
                                <FontAwesomeIcon icon={faThumbsUp} className="px-1" />
                                You liked this
                            </button></>
                        : <>
                            <button
                                onClick={likeSubmitHandler}
                                className="px-4 py-2 text-[0.92em] font-medium bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase">
                                <FontAwesomeIcon icon={faThumbsUp} className="px-1" />
                                Like
                            </button></>
                    }

                </div>
                <div className="font-body text-dark-gray text-[16px] float-end">
                    Likes: {allLikes?.length}
                </div>

            </div>
        </div>
    )
}