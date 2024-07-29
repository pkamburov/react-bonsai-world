export function InfoItem(props) {
    return (
        <div className="border-solid border-b-2">
            <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">
                {props.section.title}
            </div>
            <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                {props.section.text}
            </div>
        </div>
    )
}