import React from 'react';
import { useState } from 'react';
import NotificationOptions from './NotificationOptions';

const Notifications = (props) => {

    const [hideshowNotificationsOption, sethideshowNotificationsOption] = useState("hide");

    const openOptions = () => {
        if (hideshowNotificationsOption == "hide") {
            sethideshowNotificationsOption("show");
        } else {
            sethideshowNotificationsOption("hide");
        }
        console.log(hideshowNotificationsOption);
    }

    return (
        <li className='px-4 py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
            <div className="flex flex-row justify-center">
                <div className="w-[15%] flex flex-row items-center justify-center">
                    <img src={props.channellogo} alt="" className='w-[65px] h-[65px] sm:w-[50px] sm:h-[50px] rounded-[50%]' />
                </div>
                <div className="ml-2 w-full relative flex flex-col justify-center text-start">
                    <div className="flex flex-row justify-between">
                        <div className="w-[65%] pr-2">
                            <h4 className='pt-2 text-sm font-normal text-start video-title'>{props.videotitle}</h4>
                            <div className="flex flex-col mt-2">
                                <div className="text-xs text-[#606060] text-start">
                                    <span>{props.videouploadtime}</span>
                                </div>
                            </div>
                        </div>
                        <div className="w-[25%] flex flex-col justify-center">
                            <img src={props.videothumbnail} alt="" className='w-[90%] self-center rounded' />
                        </div>
                        <div className="w-[10%] text-right relative">
                            <button className="" onClick={openOptions}>
                                <svg viewBox="0 0 24 24" className='w-[20px]'><g><path d="M12,16.5c0.83,0,1.5,0.67,1.5,1.5s-0.67,1.5-1.5,1.5s-1.5-0.67-1.5-1.5S11.17,16.5,12,16.5z M10.5,12 c0,0.83,0.67,1.5,1.5,1.5s1.5-0.67,1.5-1.5s-0.67-1.5-1.5-1.5S10.5,11.17,10.5,12z M10.5,6c0,0.83,0.67,1.5,1.5,1.5 s1.5-0.67,1.5-1.5S12.83,4.5,12,4.5S10.5,5.17,10.5,6z"></path></g></svg>
                            </button>
                            {
                                hideshowNotificationsOption == 'show' ?
                                    <NotificationOptions sethideshowNotificationsOption={sethideshowNotificationsOption} /> : <></>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </li>
    );
}

export default Notifications;
