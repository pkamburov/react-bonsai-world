import { InfoItem } from "./InfoItem";

export function InfoSection({ guidelines }) {
    if (guidelines) {
        return (
            <>
                <section id="info-section" className="max-w-4xl m-auto">
                    <div className="text-[1.8em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">General information</div>
                    {guidelines.map(section => <InfoItem section={section} key={section.title} />)}
                </section>
            </>
        )
    }
}