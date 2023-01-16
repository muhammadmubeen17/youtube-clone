import React from 'react';
import { useEffect, useState, useRef } from 'react';

/**
 * Hook that alerts clicks outside of the passed ref
 */
function useOutsideAlerter(ref, sethideshowNotificationsOption) {
    useEffect(() => {
        /**
         * Alert if clicked on outside of element
         */
        function handleClickOutside(event) {
            if (ref.current && !ref.current.contains(event.target)) {
                sethideshowNotificationsOption("hide");
            }
        }
        // Bind the event listener
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            // Unbind the event listener on clean up
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref]);
}

const NotificationOptions = ( props ) => {
    const OptionsRef = useRef(null);
    useOutsideAlerter(OptionsRef, props.sethideshowNotificationsOption);

    return (
        <div id='notification_option_dropdown' ref={OptionsRef} className='absolute top-7 right-0 z-[120] py-1 bg-white rounded-xl flex flex-row justify-center'>
            <ul className='list-none flex flex-col justify-center w-[250px]'>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
                    <div className="w-[25px]">
                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M3.85,3.15L3.15,3.85L6.19,6.9C4.31,8.11,2.83,9.89,2,12c1.57,3.99,5.45,6.82,10,6.82c1.77,0,3.44-0.43,4.92-1.2l3.23,3.23 l0.71-0.71L3.85,3.15z M13.8,14.5c-0.51,0.37-1.13,0.59-1.8,0.59c-1.7,0-3.09-1.39-3.09-3.09c0-0.67,0.22-1.29,0.59-1.8L13.8,14.5z M12,17.82c-3.9,0-7.35-2.27-8.92-5.82c0.82-1.87,2.18-3.36,3.83-4.38L8.79,9.5c-0.54,0.69-0.88,1.56-0.88,2.5 c0,2.25,1.84,4.09,4.09,4.09c0.95,0,1.81-0.34,2.5-0.88l1.67,1.67C14.9,17.49,13.48,17.82,12,17.82z M11.49,7.95 c0.17-0.02,0.34-0.05,0.51-0.05c2.25,0,4.09,1.84,4.09,4.09c0,0.17-0.02,0.34-0.05,0.51l-1.01-1.01c-0.21-1.31-1.24-2.33-2.55-2.55 L11.49,7.95z M9.12,5.59C10.04,5.33,11,5.18,12,5.18c4.55,0,8.43,2.83,10,6.82c-0.58,1.47-1.48,2.78-2.61,3.85l-0.72-0.72 c0.93-0.87,1.71-1.92,2.25-3.13C19.35,8.45,15.9,6.18,12,6.18c-0.7,0-1.39,0.08-2.06,0.22L9.12,5.59z"></path></g></svg>
                    </div>
                    <div className='text-[#333] text-sm font-normal ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>Hide this notification</div>
                </li>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
                    <div className="w-[25px]"></div>
                    <div className='text-[#333] text-sm font-normal ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>Turn off all from Harry Potter</div>
                </li>
            </ul>
        </div>
    );
}

export default NotificationOptions;
