import { Link } from "react-router-dom"

export default function GuideItem({
    _id,
    imageUrl,
    name,
    nameBinominal,
}) {
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
                        <p className="font-body uppercase text-light-gray font-normal mt-1 text-sm tracking-tight">
                            {nameBinominal}
                        </p>
                    </h3>
                </div>
            </div>
        </div>
    )
}