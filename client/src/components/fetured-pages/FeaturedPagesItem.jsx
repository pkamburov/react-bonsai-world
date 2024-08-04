import { Link } from 'react-router-dom'

export default function FeaturedPagesItem(page) {
    return (
        <>
            <div className="flex shadow-md mb-[60px] relative border rounded-lg min-h-[368px] m-auto max-w-6xl">
                <div className="w-[416px] relative table-cell bg-white">
                    <Link to={page._id} className="block h-[100%] absolute w-[100%] top-0 left-0 overflow-hidden object-fill rounded-tl-lg">
                        <img src={page.thumbImg}></img>
                    </Link>
                </div>
                <div className="w-[684px] px-[52px] table-cell bg-white">
                    <h2 className='text-4xl leading-10 mb-[10px] pt-[50px] font-hero text-dark-gray font-thin'>
                        {page.title}
                    </h2>
                    <p className='leading-8 text-light-gray font-body font-normal text-lg tracking-[0.22px]'>
                        {page.shortDescription}
                    </p>
                    <Link to={page.button}>
                        <button className='font-body my-6 px-4 py-2 text-[0.875em] font-semibold bg-green-400 text-white hover:bg-green-600 rounded-lg uppercase'>
                            Read more
                        </button>
                    </Link>
                </div>
            </div>
        </>
    )
}