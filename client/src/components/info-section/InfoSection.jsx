import { InfoItem } from "./InfoItem";

export function InfoSection({ guidelines }) {
    return (
        <>
            <section id="info-section" className="max-w-2xl m-auto">
                {guidelines.map(section => <InfoItem section={section} key={section.title} />)}
            </section>
        </>
    )
}