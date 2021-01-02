import React, { useState } from 'react'
const Item = (props) => {
    const [show, setshow] = useState(false);
    // const winSize = window.innerWidth;
    // const event = ['load', 'resize']
    // event.forEach(item => {
    //     window.addEventListener(item, () => {
    //         if (winSize >= 640) {
    //             setshow(true)
    //         } else {
    //             setshow(false)
    //         }
    //     })
    // })


    return (
        <li className="bg-gray-800 p-3 rounded-md ">
            <div className="flex flex-col space-y-2">
                <div onClick={() => setshow(!show)} className="flex justify-between pointer-events-none md:pointer-events-auto">
                    <div className="font-bold flex-1">{props.item[0]}st Year, {props.item[1]}st Semester</div>
                    <span onClick={() => setshow(!show)} className="text-white px-2 pointer-events-auto">
                        {
                            !show ? (<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd" />
                            </svg>) : (<svg className="w-6 h-6" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fillRule="evenodd" d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" clipRule="evenodd" />
                            </svg>)
                        }
                    </span>
                </div>
                {
                    show && (
                        <div className="space-x-1 flex items-center text-sm">
                            <span className="flex-0 bg-gray-600 hover:bg-gray-700 transform active:translate-y-1 cursor-pointer px-3 py-1 rounded-full text-white">Book Ref</span>
                            <span className="flex-0 bg-gray-600 hover:bg-gray-700 transform active:translate-y-1 cursor-pointer px-3 py-1 rounded-full text-white">Syllabus</span>
                            <span className="flex-0 bg-gray-600 hover:bg-gray-700 transform active:translate-y-1 cursor-pointer px-3 py-1 rounded-full text-white">Questions</span>
                        </div>
                    )
                }
            </div>
        </li>
    )
}

export default Item