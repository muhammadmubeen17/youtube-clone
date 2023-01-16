import React from 'react'

function SidebarCollapse() {
    return (
        <div className='w-[70px] h-[100vh] fixed top-14 pt-3 left-0 right-0 bg-white z-40 hidden md:block'>
            <ul className='list-none flex flex-col justify-center'>
                <li className='text-center flex flex-col justify-center py-4 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 576 512" className='mx-auto w-[20px]'><path fill="currentColor" d="M575.8 255.5c0 18-15 32.1-32 32.1h-32l.7 160.2c0 2.7-.2 5.4-.5 8.1V472c0 22.1-17.9 40-40 40H456c-1.1 0-2.2 0-3.3-.1c-1.4 .1-2.8 .1-4.2 .1H416 392c-22.1 0-40-17.9-40-40V448 384c0-17.7-14.3-32-32-32H256c-17.7 0-32 14.3-32 32v64 24c0 22.1-17.9 40-40 40H160 128.1c-1.5 0-3-.1-4.5-.2c-1.2 .1-2.4 .2-3.6 .2H104c-22.1 0-40-17.9-40-40V360c0-.9 0-1.9 .1-2.8V287.6H32c-18 0-32-14-32-32.1c0-9 3-17 10-24L266.4 8c7-7 15-8 22-8s15 2 21 7L564.8 231.5c8 7 12 15 11 24z"></path></svg>
                    <div className='text-[0.6rem] mt-1'>Home</div>
                </li>
                <li className='text-center flex flex-col justify-center py-4 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px] mx-auto'><g height="24" viewBox="0 0 24 24" width="24"><path d="M10 14.65v-5.3L15 12l-5 2.65zm7.77-4.33c-.77-.32-1.2-.5-1.2-.5L18 9.06c1.84-.96 2.53-3.23 1.56-5.06s-3.24-2.53-5.07-1.56L6 6.94c-1.29.68-2.07 2.04-2 3.49.07 1.42.93 2.67 2.22 3.25.03.01 1.2.5 1.2.5L6 14.93c-1.83.97-2.53 3.24-1.56 5.07.97 1.83 3.24 2.53 5.07 1.56l8.5-4.5c1.29-.68 2.06-2.04 1.99-3.49-.07-1.42-.94-2.68-2.23-3.25zm-.23 5.86l-8.5 4.5c-1.34.71-3.01.2-3.72-1.14-.71-1.34-.2-3.01 1.14-3.72l2.04-1.08v-1.21l-.69-.28-1.11-.46c-.99-.41-1.65-1.35-1.7-2.41-.05-1.06.52-2.06 1.46-2.56l8.5-4.5c1.34-.71 3.01-.2 3.72 1.14.71 1.34.2 3.01-1.14 3.72L15.5 9.26v1.21l1.8.74c.99.41 1.65 1.35 1.7 2.41.05 1.06-.52 2.06-1.46 2.56z"></path></g></svg>
                    <div className='text-[0.6rem]  mt-1'>Shorts</div>
                </li>
                <li className='text-center flex flex-col justify-center py-4 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px] mx-auto'><g><path d="M10,18v-6l5,3L10,18z M17,3H7v1h10V3z M20,6H4v1h16V6z M22,9H2v12h20V9z M3,10h18v10H3V10z"></path></g></svg>
                    <div className='text-[0.6rem] mt-1'>Subscriptions</div>
                </li>
                <li className='text-center flex flex-col justify-center py-4 rounded-xl cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px] mx-auto'><g><path d="M11,7l6,3.5L11,14V7L11,7z M18,20H4V6H3v15h15V20z M21,18H6V3h15V18z M7,17h13V4H7V17z"></path></g></svg>
                    <div className='text-[0.6rem] mt-1'>Library</div>
                </li>
            </ul>
        </div>
    )
}

export default SidebarCollapse;