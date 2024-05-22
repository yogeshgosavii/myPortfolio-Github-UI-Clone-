import React from 'react';

function ImageView({ visibility = true, src, setVisibility }) {
  return (
    <>
      {visibility && (
        <div className='absolute  flex flex-col h-full w-full py-10 z-40 items-center top-0'>
          <div
            className='absolute -z-10 bg-[#000000d0] w-full h-full top-0'
            onClick={()=>{setVisibility(false)}}
            ></div>
          <span className='w-full flex justify-end px-10'>
            <svg
              className='h-8 w-8 text-gray-500'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
              onClick={()=>{setVisibility(false)}}
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </span>
          <img src={src} className='h-2/3 flex-1 ' />
        </div>
      )}
    </>
  );
}

export default ImageView;
