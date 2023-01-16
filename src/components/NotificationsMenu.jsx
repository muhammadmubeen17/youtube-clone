import React from 'react';
import Notifications from './Notifications';
import channellogo from '../assets/images/profile.jpg'
import videothumbnail1 from '../assets/images/thumbnail1.jpg'
import videothumbnail2 from '../assets/images/thumbnail2.jpg'
import videothumbnail3 from '../assets/images/thumbnail3.jpg'
import videothumbnail4 from '../assets/images/thumbnail4.jpg'
import videothumbnail5 from '../assets/images/thumbnail5.jpg'
import videothumbnail6 from '../assets/images/thumbnail6.jpg'
import videothumbnail7 from '../assets/images/thumbnail7.jpg'
import videothumbnail8 from '../assets/images/thumbnail8.jpg'
import videothumbnail9 from '../assets/images/thumbnail9.jpg'
import videothumbnail10 from '../assets/images/thumbnail10.jpg'

const NotificationsMenu = () => {

    return (
        <div id='notifications_dropdown' className='fixed top-2 w-[35%] right-32 z-[110] py-1 bg-white rounded-xl flex flex-col justify-center'>
            <div className="flex flex-row justify-between px-3 py-1 border-b border-[rgba(0,0,0,0.1)]">
                <div className="flex flex-col justify-center">
                    <h3>Notifications</h3>
                </div>
                <div className="flex flex-col justify-center">
                    <button className="flex flex-col justify-center px-2 cursor-pointer w-[40px] h-[40px] rounded-[50%] relative hover:bg-[#e0e0e0]">
                        <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M12,9c1.65,0,3,1.35,3,3s-1.35,3-3,3s-3-1.35-3-3S10.35,9,12,9 M12,8c-2.21,0-4,1.79-4,4s1.79,4,4,4s4-1.79,4-4 S14.21,8,12,8L12,8z M13.22,3l0.55,2.2l0.13,0.51l0.5,0.18c0.61,0.23,1.19,0.56,1.72,0.98l0.4,0.32l0.5-0.14l2.17-0.62l1.22,2.11 l-1.63,1.59l-0.37,0.36l0.08,0.51c0.05,0.32,0.08,0.64,0.08,0.98s-0.03,0.66-0.08,0.98l-0.08,0.51l0.37,0.36l1.63,1.59l-1.22,2.11 l-2.17-0.62l-0.5-0.14l-0.4,0.32c-0.53,0.43-1.11,0.76-1.72,0.98l-0.5,0.18l-0.13,0.51L13.22,21h-2.44l-0.55-2.2l-0.13-0.51 l-0.5-0.18C9,17.88,8.42,17.55,7.88,17.12l-0.4-0.32l-0.5,0.14l-2.17,0.62L3.6,15.44l1.63-1.59l0.37-0.36l-0.08-0.51 C5.47,12.66,5.44,12.33,5.44,12s0.03-0.66,0.08-0.98l0.08-0.51l-0.37-0.36L3.6,8.56l1.22-2.11l2.17,0.62l0.5,0.14l0.4-0.32 C8.42,6.45,9,6.12,9.61,5.9l0.5-0.18l0.13-0.51L10.78,3H13.22 M14,2h-4L9.26,4.96c-0.73,0.27-1.4,0.66-2,1.14L4.34,5.27l-2,3.46 l2.19,2.13C4.47,11.23,4.44,11.61,4.44,12s0.03,0.77,0.09,1.14l-2.19,2.13l2,3.46l2.92-0.83c0.6,0.48,1.27,0.87,2,1.14L10,22h4 l0.74-2.96c0.73-0.27,1.4-0.66,2-1.14l2.92,0.83l2-3.46l-2.19-2.13c0.06-0.37,0.09-0.75,0.09-1.14s-0.03-0.77-0.09-1.14l2.19-2.13 l-2-3.46L16.74,6.1c-0.6-0.48-1.27-0.87-2-1.14L14,2L14,2z"></path></g></svg>
                    </button>
                </div>
            </div>
            <ul id='notifications_list' className='list-none bg-white h-96 overflow-y-scroll overflow-hidden'>
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail1} videotitle="Learn HTML in 30 days, Must Watch" videouploadtime="1 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail2} videotitle="Learn CSS in 30 days, Must Watch" videouploadtime="2 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail3} videotitle="Learn JavaScript in 30 days, Must Watch" videouploadtime="3 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail4} videotitle="Learn PHP in 30 days, Must Watch" videouploadtime="4 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail5} videotitle="Learn Laravel in 30 days, Must Watch" videouploadtime="5 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail6} videotitle="Learn React in 30 days, Must Watch" videouploadtime="6 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail7} videotitle="Learn MongoDB in 30 days, Must Watch" videouploadtime="7 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail8} videotitle="Learn jQuery in 30 days, Must Watch" videouploadtime="8 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail9} videotitle="Learn Bootstrap in 30 days, Must Watch" videouploadtime="9 minutes ago" />
                <Notifications channellogo={channellogo} videothumbnail={videothumbnail10} videotitle="Learn Tailwind in 30 days, Must Watch" videouploadtime="10 minutes ago" />
            </ul>
        </div>
    );
}

export default NotificationsMenu;
