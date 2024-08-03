import { Link, useNavigate, useParams } from "react-router-dom";
import { bonsaiApi } from "../../api/bonsai-api";

export default function GuideOwnerSection() {
    const { guideId } = useParams();
    const navigate = useNavigate();
    
    const guideDeleteHandler = async () => {
        try {
            await bonsaiApi.deleteGuide(guideId);
            navigate('/species');
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <div className="flex-grid columns-2 gap-8 max-w-6xl m-auto">
            <div className="flex-grid columns-2">
                <Link to={`/edit/${guideId}`} className="px-4 py-2 text-[0.92em] font-medium border-2 border-slate-300 text-gray-700 hover:bg-slate-100 rounded-lg uppercase mx-5">
                    Edit
                </Link>
                <button onClick={guideDeleteHandler} className="px-4 py-2 text-[0.92em] font-medium border-2 border-slate-300 text-gray-700 hover:bg-slate-100 rounded-lg uppercase">
                    Delete
                </button>
            </div>
            <div className="float-right font-body text-dark-gray text-[16px]">
                Likes:
            </div>
        </div>
    )
}