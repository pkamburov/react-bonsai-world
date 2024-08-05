import React from "react";
import {
    Accordion,
    AccordionHeader,
    AccordionBody,
} from "@material-tailwind/react";

function Icon({ id, open }) {
    return (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className={`${id === open ? "rotate-180" : ""} h-5 w-5 transition-transform`}
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
      </svg>
    );
}

export function InfoAccordion(props) {
    const [open, setOpen] = React.useState(0);

    const handleOpen = (value) => setOpen(open === value ? 0 : value);

    return (
        <section id="info-accordion" className="max-w-4xl m-auto mb-[100px]">
            <div className="text-[1.8em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Additional information</div>
            <Accordion open={open === 1} icon={<Icon id={1} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(1)} className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[10px]">
                    {props.guidelines[0].title}
                </AccordionHeader>
                <AccordionBody className="text-[1.125em] font-body font-medium text-light-gray mb-[20px] leading-[32px] tracking-[0.5625px]">
                    {props.guidelines[0].text}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 2}  icon={<Icon id={2} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(2)} className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[10px]">
                    {props.guidelines[1].title}
                </AccordionHeader>
                <AccordionBody className="text-[1.125em] font-body font-medium text-light-gray mb-[20px] leading-[32px] tracking-[0.5625px]">
                    {props.guidelines[1].text}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 3}  icon={<Icon id={3} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(3)} className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[10px]">
                    {props.guidelines[2].title}
                </AccordionHeader>
                <AccordionBody className="text-[1.125em] font-body font-medium text-light-gray mb-[20px] leading-[32px] tracking-[0.5625px]">
                    {props.guidelines[2].text}
                </AccordionBody>
            </Accordion>
            <Accordion open={open === 4}  icon={<Icon id={4} open={open} />}>
                <AccordionHeader onClick={() => handleOpen(4)} className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[10px]">
                    {props.guidelines[3].title}
                </AccordionHeader>
                <AccordionBody className="text-[1.125em] font-body font-medium text-light-gray mb-[20px] leading-[32px] tracking-[0.5625px]">
                    {props.guidelines[3].text}
                </AccordionBody>
            </Accordion>
        </section>
    );
}