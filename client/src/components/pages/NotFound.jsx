import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <>
            <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8 my-[95px]">
                <div className="text-center">
                    <p className="text-[4rem] font-semibold text-dark-gray font-hero">404</p>
                    <h1 className="mt-4 text-3xl font-bold tracking-tight text-dark-gray sm:text-5xl font-hero">Page not found</h1>
                    <p className="mt-6 text-base leading-7 text-gray-600 font-body">Sorry, we couldn’t find the page you’re looking for.</p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Link
                            to="/"
                            className="font-body px-4 py-2 text-[0.92em] font-semibold bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase"
                        >
                            Return to home
                        </Link>
                    </div>
                </div>
            </main>
        </>
    )
}
