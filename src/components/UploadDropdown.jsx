import React from 'react';

const UploadDropdown = () => {

    return (
        <div id='upload_dropdown' className='absolute top-10 left-0 z-[110] py-1 bg-white rounded-xl flex flex-row justify-center'>
            <ul className='list-none flex flex-col justify-center w-[175px]'>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M10,8l6,4l-6,4V8L10,8z M21,3v18H3V3H21z M20,4H4v16h16V4z"></path></g></svg>
                    <div className='text-[#333] text-sm font-normal ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>Upload video</div>
                </li>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M16.94 6.91l-1.41 1.45c.9.94 1.46 2.22 1.46 3.64s-.56 2.71-1.46 3.64l1.41 1.45c1.27-1.31 2.05-3.11 2.05-5.09s-.78-3.79-2.05-5.09zM19.77 4l-1.41 1.45C19.98 7.13 21 9.44 21 12.01c0 2.57-1.01 4.88-2.64 6.54l1.4 1.45c2.01-2.04 3.24-4.87 3.24-7.99 0-3.13-1.23-5.96-3.23-8.01zM7.06 6.91c-1.27 1.3-2.05 3.1-2.05 5.09s.78 3.79 2.05 5.09l1.41-1.45c-.9-.94-1.46-2.22-1.46-3.64s.56-2.71 1.46-3.64L7.06 6.91zM5.64 5.45L4.24 4C2.23 6.04 1 8.87 1 11.99c0 3.13 1.23 5.96 3.23 8.01l1.41-1.45C4.02 16.87 3 14.56 3 11.99s1.01-4.88 2.64-6.54z"></path><circle cx="12" cy="12" r="3"></circle></g></svg>
                    <div className='text-[#333] text-sm font-normal ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>Go live</div>
                </li>
                <li className='h-[40px] px-4 flex flex-row justify-start py-2 mb-1 cursor-pointer hover:bg-[#f2f2f2]'>
                    <svg viewBox="0 0 24 24" className='w-[25px]'><g><path d="M15.01,7.34l1.64,1.64L8.64,17H6.99v-1.64L15.01,7.34 M15.01,5.92l-9.02,9.02V18h3.06l9.02-9.02L15.01,5.92L15.01,5.92z M17.91,4.43l1.67,1.67l-0.67,0.67L17.24,5.1L17.91,4.43 M17.91,3.02L15.83,5.1l3.09,3.09L21,6.11L17.91,3.02L17.91,3.02z M21,10h-1 v10H4V4h10V3H3v18h18V10z"></path></g></svg>
                    <div className='text-[#333] text-sm font-normal ml-4 overflow-hidden whitespace-nowrap text-ellipsis'>Create post</div>
                </li>
            </ul>
        </div>
    );
}

export default UploadDropdown;
