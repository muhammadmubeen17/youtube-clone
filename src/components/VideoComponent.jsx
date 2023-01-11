import React from 'react'

function VideoComponent(props) {
    return (
        <>
            {
                props != '' ?
                    <li id='video_component' className="video_component px-2 py-2 w-[100%] sm:w-[50%] md:w-[33.33%] lg:w-[25%] 2xl:w-[20%] cursor-pointer relative">
                        <div className="video_component_card hover:shadow-xl rounded-xl bg-white">
                            <div className="">
                                <img src={props.videothumbnail} alt="" className='video_card_image rounded-xl h-[160px] w-full' />
                            </div>
                            <div className="flex flex-col justify-center mt-2 pb-4 px-2">
                                <div className="flex flex-row justify-start">
                                    <div className="mr-2 w-[25%]">
                                        <img src={props.channellogo} alt="" className='w-[65px] h-[65px] sm:w-[50px] sm:h-[50px] rounded-[50%]' />
                                    </div>
                                    <div className="mt-2 w-full relative">
                                        <h4 className='text-base font-semibold video-title w-[85%]'>{props.videotitle}</h4>
                                        <button className="absolute right-2 top-1">
                                            <svg viewBox="0 0 24 24" className='w-[20px]'><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>
                                        </button>
                                        <div className="flex flex-col">
                                            <div className="">
                                                <a href="" className='text-xs text-[#606060] hover:text-[#222] font-medium flex flex-row'>
                                                    <div className="mr-1">{props.channelname}</div>
                                                    <div className="flex flex-col justify-center text-[#606060]">
                                                        <svg viewBox="0 0 24 24" className='w-[12px]'><g><path d="M12,2C6.5,2,2,6.5,2,12c0,5.5,4.5,10,10,10s10-4.5,10-10C22,6.5,17.5,2,12,2z M9.8,17.3l-4.2-4.1L7,11.8l2.8,2.7L17,7.4 l1.4,1.4L9.8,17.3z"></path></g></svg>
                                                    </div>
                                                </a>
                                            </div>
                                            <div className="text-xs text-[#606060]">
                                                <span className='mr-1'>{props.noofviews}</span>
                                                <span className='font-bold px-0.5'>&#46;</span>
                                                <span>{props.uploadtime}</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="mt-3 px-1 relative card_buttons">
                                    <div className='h-[35px] px-4 flex flex-row justify-center py-2 rounded-2xl cursor-pointer bg-[#f2f2f2] hover:bg-[#e6e6e6]'>
                                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>
                                        <div className='text-[#333] text-sm font-semibold ml-3 flex flex-column justify-center'>Watch later</div>
                                    </div>
                                    <div className='mt-2 h-[35px] px-4 flex flex-row justify-center py-2 rounded-2xl cursor-pointer bg-[#f2f2f2] hover:bg-[#e6e6e6]'>
                                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M21,16h-7v-1h7V16z M21,11H9v1h12V11z M21,7H3v1h18V7z M10,15l-7-4v8L10,15z"></path></g></svg>
                                        <div className='text-[#333] text-sm font-semibold ml-3 flex flex-column justify-center'>Add to queue</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </li> : <></>
            }
        </>
    )
}

export default VideoComponent