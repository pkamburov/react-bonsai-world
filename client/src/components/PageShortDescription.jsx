export default function PageShortDescription({page}) {
    return (
        <div id="shortDescription" className="bg-white lg:mt-[80px] md:mt-[40px]">
            <div className="max-w-6xl bg-gray-100 py-10 m-auto rounded-md">
                <div className="px-8">
                    <p className="text-lg font-normal leading-9 tracking-wide text-light-gray">{page.shortDescription}</p>
                </div>
            </div>
        </div>
    )
}