export default function PageShortDescription({shortDescription}) {
    return (
        <div id="shortDescription" className="bg-white lg:mt-[100px] lg:mb-[60px] md:mt-[40px]">
            <div className="max-w-6xl bg-gray-100 py-6 m-auto rounded-md">
                <div className="px-8">
                    <p className="text-lg font-normal leading-9 tracking-wide text-light-gray">{shortDescription}</p>
                </div>
            </div>
        </div>
    )
}