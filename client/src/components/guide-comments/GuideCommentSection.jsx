import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Textarea, Button } from "@material-tailwind/react";

import { GuideComment } from "./GuideComment";
import { commentsApi } from "../../api/comments-api";
import { AuthContext } from "../../contexts/AuthContext";
import { useForm } from "../../hooks/useForm";


// const initialValue = '';
const initialValue = {
    comment: ''
};

export function GuideCommentSection() {
    const { guideId } = useParams();
    const { isAuthenticated, username } = useContext(AuthContext);

    const [comments, setComments] = useState();
    const [allComments, setAllComments] = useState();

    useEffect(() => {
        commentsApi.getAllComments(guideId)
            .then(result => setAllComments(`(${result.length})`));
    }, []);

    useEffect(() => {
        commentsApi.getRecentComments(guideId)
            .then(result => setComments(result));
    }, []);


    const commentSubmitHandler = async (value) => {
        try {
            await commentsApi.create(value, username, guideId);
        } catch (error) {
            console.log(error.message);
        }

        const allComments = await commentsApi.getRecentComments(guideId);
        setComments(allComments);
        setAllComments(`(${allComments.length})`);
    }

    const {
        values,
        changeHandler,
        submitHandler
    } = useForm(initialValue, commentSubmitHandler);

    return (
        <div className="max-w-4xl m-auto mb-[100px] mt-[100px]">
            {isAuthenticated
                ? <div className="max-w-4xl ml-[10%] mt-12 mb-16 m-auto">
                    <form id="comment" method="POST" onSubmit={submitHandler}>
                        <div className="">
                            <h1 className="font-hero text-2xl">Leave a comment</h1>
                            <Textarea
                                id="comment"
                                name="comment"
                                value={values.comment}
                                onChange={changeHandler}
                                variant="static"
                                placeholder="Your Comment"
                                rows={4}
                                className="font-body font-medium" />
                            <div className="flex w-full justify-between py-1.5">
                                <div className="flex gap-2 m-auto">
                                    {/* <Button size="sm" color="red" variant="text" className="rounded-md">
                                        Cancel
                                        </Button> */}
                                    <Button size="sm" className="font-body px-4 py-2 text-[0.92em] font-semibold bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase" onClick={submitHandler}>
                                        Post Comment
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
                : <></>
            }
            <div className="ml-[10%] max-w-[100%]">
                <div className="font-hero text-2xl">Comments {allComments}</div>
                <div className="grid grid-cols-2 gap-4">
                    {comments?.map(comment => <GuideComment comment={comment} key={comment._id} />)}
                </div>

            </div>
        </div>
    );
}