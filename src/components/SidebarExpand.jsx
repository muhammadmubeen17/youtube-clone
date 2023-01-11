import React from 'react'
import { useState } from 'react'
import channel1 from '../assets/images/channels.jpg'
import channel2 from '../assets/images/profile.jpg'

function SidebarExpand() {

    const [showmore, setshowmore] = useState("showmore");

    const showMoreLess = () => {
        if (showmore == "showmore") {
            setshowmore("showless");
        } else {
            setshowmore("showmore");
        }
    }

    return (
        <div id='expanded_sidebar' className='w-[240px] z-40 h-[100vh] fixed top-14 pt-3 pb-4 left-0 right-0 bg-white overflow-y-scroll overflow-hidden'>
            <ul className='list-none flex flex-col justify-center px-3'>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer bg-[#f2f2f2] hover:bg-[#e6e6e6]'>
                    <svg width={"20px"} viewBox="0 0 576 512" className=''><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>
                    <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Home</div>
                </li>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg width={"25px"} viewBox="0 0 24 24" className=''><g height="24" viewBox="0 0 24 24" width="24"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></g></svg>
                    <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Shorts</div>
                </li>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg width={"25px"} viewBox="0 0 24 24" className=''><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>
                    <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Subscriptions</div>
                </li>
                {/*  */}
                <li className='flex flex-col justify-center mt-3'>
                    <ul className='list-none flex flex-col justify-center pt-3.5 border-t border-[rgba(0,0,0,0.1)]'>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>
                            <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Library</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M22,12c0,5.51-4.49,10-10,10S2,17.51,2,12h1c0,4.96,4.04,9,9,9 s9-4.04,9-9s-4.04-9-9-9C8.81,3,5.92,4.64,4.28,7.38C4.17,7.56,4.06,7.75,3.97,7.94C3.96,7.96,3.95,7.98,3.94,8H8v1H1.96V3h1v4.74 C3,7.65,3.03,7.57,3.07,7.49C3.18,7.27,3.3,7.07,3.42,6.86C5.22,3.86,8.51,2,12,2C17.51,2,22,6.49,22,12z"></path></g></svg>
                            <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>History</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path></g></svg>
                            <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Your videos</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M14.97,16.95L10,13.87V7h2v5.76l4.03,2.49L14.97,16.95z M12,3c-4.96,0-9,4.04-9,9s4.04,9,9,9s9-4.04,9-9S16.96,3,12,3 M12,2c5.52,0,10,4.48,10,10s-4.48,10-10,10S2,17.52,2,12S6.48,2,12,2L12,2z"></path></g></svg>
                            <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Watch later</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M8,7c0,0.55-0.45,1-1,1S6,7.55,6,7c0-0.55,0.45-1,1-1S8,6.45,8,7z M7,16c-0.55,0-1,0.45-1,1c0,0.55,0.45,1,1,1s1-0.45,1-1 C8,16.45,7.55,16,7,16z M10.79,8.23L21,18.44V20h-3.27l-5.76-5.76l-1.27,1.27C10.89,15.97,11,16.47,11,17c0,2.21-1.79,4-4,4 c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c0.42,0,0.81,0.08,1.19,0.2l1.37-1.37l-1.11-1.11C8,10.89,7.51,11,7,11c-2.21,0-4-1.79-4-4 c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C11,7.43,10.91,7.84,10.79,8.23z M10.08,8.94L9.65,8.5l0.19-0.58C9.95,7.58,10,7.28,10,7 c0-1.65-1.35-3-3-3S4,5.35,4,7c0,1.65,1.35,3,3,3c0.36,0,0.73-0.07,1.09-0.21L8.7,9.55l0.46,0.46l1.11,1.11l0.71,0.71l-0.71,0.71 L8.9,13.91l-0.43,0.43l-0.58-0.18C7.55,14.05,7.27,14,7,14c-1.65,0-3,1.35-3,3c0,1.65,1.35,3,3,3s3-1.35,3-3 c0-0.38-0.07-0.75-0.22-1.12l-0.25-0.61L10,14.8l1.27-1.27l0.71-0.71l0.71,0.71L18.15,19H20v-0.15L10.08,8.94z M17.73,4H21v1.56 l-5.52,5.52l-2.41-2.41L17.73,4z M18.15,5l-3.67,3.67l1,1L20,5.15V5H18.15z"></path></g></svg>
                            <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Your clips</div>
                        </li>
                        {
                            showmore == "showmore" ?
                                <li onClick={showMoreLess} className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                                    <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M12,15.7L5.6,9.4l0.7-0.7l5.6,5.6l5.6-5.6l0.7,0.7L12,15.7z"></path></g></svg>
                                    <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Show more</div>
                                </li> : <></>
                        }
                        {
                            showmore == "showless" ?
                                <ul className='list-none'>
                                    <li className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M18.77,11h-4.23l1.52-4.94C16.38,5.03,15.54,4,14.38,4c-0.58,0-1.14,0.24-1.52,0.65L7,11H3v10h4h1h9.43 c1.06,0,1.98-0.67,2.19-1.61l1.34-6C21.23,12.15,20.18,11,18.77,11z M7,20H4v-8h3V20z M19.98,13.17l-1.34,6 C18.54,19.65,18.03,20,17.43,20H8v-8.61l5.6-6.06C13.79,5.12,14.08,5,14.38,5c0.26,0,0.5,0.11,0.63,0.3 c0.07,0.1,0.15,0.26,0.09,0.47l-1.52,4.94L13.18,12h1.35h4.23c0.41,0,0.8,0.17,1.03,0.46C19.92,12.61,20.05,12.86,19.98,13.17z"></path></g></svg>
                                        <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>liked videos</div>
                                    </li>
                                    <li onClick={showMoreLess} className='h-[40px] px-4 flex flex-row justify-start py-2 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><polygon points="18.4,14.6 12,8.3 5.6,14.6 6.4,15.4 12,9.7 17.6,15.4"></polygon></g></svg>
                                        <div className='text-[#333] text-sm font-medium ml-5 flex flex-column justify-center'>Show less</div>
                                    </li>
                                </ul> : <></>
                        }
                    </ul>
                </li>
                {/* Subscriptions */}
                <li className='flex flex-col justify-center mt-3'>
                    <ul className='list-none flex flex-col justify-center pt-3.5 border-t border-[rgba(0,0,0,0.1)]'>
                        <h3 className='text-base px-3 py-1 text-[#333] font-normal'>Subscriptions</h3>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel1} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>The Appealing World</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel2} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>Mr Harry Potter</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel1} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>The Appealing World</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel2} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>Mr Harry Potter</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel1} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>The Appealing World</div>
                        </li>
                        <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                            <img src={channel2} className='w-[25px] h-[25px] rounded-[50%]' alt="" />
                            <div className='text-[#333] text-sm font-medium ml-5 overflow-hidden whitespace-nowrap text-ellipsis'>Mr Harry Potter</div>
                        </li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}

export default SidebarExpand