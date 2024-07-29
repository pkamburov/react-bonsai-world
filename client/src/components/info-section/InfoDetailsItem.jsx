export function InfoDetailsItem({props}) {
    return (
        <div className="max-w-2xl m-auto">
            <div className="border-solid border-b-2">
                <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Placement</div>
                <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                    {props.placement}
                </div>
            </div>
            <div className="border-solid border-b-2">
                <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Watering</div>
                <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                    {props.watering}
                </div>
            </div>
            <div className="border-solid border-b-2">
                <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Pests and deseases</div>
                <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                    {props.pestsAndDeseases}
                </div>
            </div>
        </div>
    )
}