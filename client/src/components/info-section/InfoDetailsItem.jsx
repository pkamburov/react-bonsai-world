import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCloudSun, faDroplet, faBugs } from '@fortawesome/free-solid-svg-icons'

export function InfoDetailsItem({ props }) {
    return (
        <div className="max-w-4xl m-auto">
            <div className="flex gap-8">
                <div className='icon max-w-[20%] flex'>
                    <FontAwesomeIcon icon={faCloudSun} className='float-left h-[40px] w-[40px] relative mt-[50px] text-light-gray' />
                </div>
                <div className='border-solid border-b-2'>
                    <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Placement</div>
                    <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                        {props.placement}
                    </div>
                </div>
            </div>
            <div className="flex gap-8">
                <div className='icon max-w-[20%] flex'>
                    <FontAwesomeIcon icon={faDroplet} className='float-left h-[35px] w-[35px] relative mt-[50px] text-light-gray' />
                </div>
                <div className='border-solid border-b-2'>
                    <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Watering</div>
                    <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                        {props.watering}
                    </div>
                </div>
            </div>
            <div className="flex gap-8 mb-[60px]">
                <div className='icon max-w-[20%] flex'>
                    <FontAwesomeIcon icon={faBugs} className='float-left h-[40px] w-[40px] relative mt-[50px] text-light-gray' />
                </div>
                <div className='border-solid border-b-2'>
                    <div className="text-[1.5em] text-dark-gray font-semibold pb-2 font-body mt-[40px]">Pests and deseases</div>
                    <div className="text-[1.125em] font-body text-light-gray mb-[40px] leading-[32px] tracking-[0.5625px]">
                        {props.pestsAndDeseases}
                    </div>
                </div>
            </div>
        </div>
    )
}