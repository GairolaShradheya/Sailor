import React from 'react'

function swipe() {
    return (

        <div ref={ref} className="w-[90vw] bg-contain bg-no-repeat mt-10 left-[5vw] box-border h-[30vh] absolute flex items-center bg-red-200 justify-between p-[10vw] rounded-3xl ">
          <button>
            <svg className="invert cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
              <path d="M13.5 16C13.5 16 10.5 13.054 10.5 12C10.5 10.9459 13.5 8 13.5 8" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
          <button>
            <svg className="invert cursor-pointer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" color="#000000" fill="none">
              <circle cx="12" cy="12" r="10" stroke="currentColor" stroke-width="1.5" />
              <path d="M10.5 8C10.5 8 13.5 10.946 13.5 12C13.5 13.0541 10.5 16 10.5 16" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
            </svg>
          </button>
        </div>
    )
}

export default swipe
