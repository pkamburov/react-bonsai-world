import { useContext } from "react";
import { Link } from "react-router-dom"

import { AuthContext } from '../../contexts/AuthContext'

export default function GuideItem({
    _id,
    _ownerId,
    imageUrl,
    name,
    nameBinominal,
}) {

    const { isAuthenticated, userId } = useContext(AuthContext);

    return (
        <div key={_id} className="group relative">
            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-gray-200 lg:aspect-none group-hover:opacity-75 lg:h-80">
                <img
                    alt='{imageAlt}'
                    src={imageUrl}
                    className="h-full w-full object-cover object-center lg:h-full lg:w-full"
                />
            </div>
            <div className="mt-4 flex justify-between">
                <div>
                    <h3 className="text-sm text-dark-gray">
                        <Link to={`/species/${_id}`} className="font-body text-xl text-dark-gray font-semibold">
                            <span aria-hidden="true" className="absolute inset-0" />
                            {name}
                        </Link>
                    </h3>
                    <p className="font-body uppercase text-light-gray font-normal mt-1 text-sm tracking-tight">
                        {nameBinominal}
                    </p>
                </div>
                {/* {isAuthenticated && _ownerId == userId ? <p>Edit</p> : <p></p>} */}
            </div>
        </div>
    )
}