import { Link } from "react-router-dom";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faThumbsUp } from '@fortawesome/free-solid-svg-icons'

export default function GuideLikeSection() {
    return (
        <div className="max-w-6xl m-auto pl-10">
            <div className="flex-grid columns-2 gap-8 max-w-[40%]">
                <div className="">
                    <button className="px-4 py-2 text-[0.92em] font-medium bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase">
                        <FontAwesomeIcon icon={faThumbsUp} className="px-1" />
                        Like
                    </button>
                </div>
                <div className="font-body text-dark-gray text-[16px] float-end">
                    Likes:
                </div>

            </div>
        </div>
    )
}