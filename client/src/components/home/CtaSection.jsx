import { Link } from "react-router-dom";

export default function CtaSection() {
    return (
        <div id="cta-section" className="mx-auto py-[40px] -mt-8">
            <div className="grid grid-cols-3 grid-flow-col max-w-6xl mx-auto py-4 gap-6">
                <div className="mx-auto text-center px-[22px] py-[37px] rounded-lg bg-gray-100">
                    <p className="p-4 text-2xl font-normal text-dark-gray font-hero">Bonsai care</p>
                    <p className="w-[50%] mx-auto border-b-2 border-gray-300"></p>
                    <p className="p-4 text-lg font-body text-light-gray">The basic techniques, including placement, watering, and repotting</p>
                    <Link to="/bonsai-care" className="shadow-md block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-[0.875em] font-semibold text-white bg-green-400  hover:bg-green-600 rounded-lg uppercase">
                        Bonsai care
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[37px] rounded-lg bg-gray-100">
                    <p className="p-4 text-2xl font-normal text-dark-gray font-hero">Bonsai styling</p>
                    <p className="w-[50%] mx-auto border-b-2 border-gray-300"></p>
                    <p className="p-4 text-lg font-body text-light-gray">Styling techniques, including pruning, wiring, and defoliation</p>
                    <Link to="/bonsai-styling" className="shadow-md font-body block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-[0.875em] font-semibold text-white bg-green-400 hover:bg-green-600 rounded-lg uppercase">
                        Bonsai styling
                    </Link>              
                </div>
                <div className="mx-auto text-center px-[22px] py-[37px] bg-green-400 rounded-lg">
                    <p className="p-4 text-2xl font-normal text-white font-hero">Tree species</p>
                    <p className="w-[50%] mx-auto border-b-2 border-slate-300"></p>
                    <p className="p-4 text-lg text-white font-body">Care guidelines for the most popular tree species</p>
                    <Link to="/tree-species" className="shadow-md block mt-4 m-auto w-[50%] my-4 px-4 py-3 text-[0.875em] font-semibold text-light-gray bg-white hover:bg-gray-100 rounded-lg uppercase">
                        Tree species
                    </Link>     
                </div>
            </div>
        </div>
    )
}