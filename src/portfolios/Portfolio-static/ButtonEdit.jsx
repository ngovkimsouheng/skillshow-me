import React from 'react'
import { FaEdit } from "react-icons/fa";
import { NavLink } from 'react-router';
// export default function ButtonEdit() {
//     return (<button

//         className="ml-4 duration-500 animate-bounce cursor-pointer px-5 z-10 flex items-center gap-2 fixed bottom-20 right-35 py-2 bg-secondary text-primary text-xl font-bold uppercase tracking-widest border-brutal rounded-[20px] hover-lift"
//     >
//         <FaEdit className='text-2xl' />   Edit
//     </button>
//         // <div className="bg-secondary border-2 border-primary  z-10 font-black fixed right-40 bottom-20 flex gap-2 items-center justify-center text-primary px-6 py-3"> <FaEdit className='text-2xl' />Edit</div>
//     )
// }
export default function ButtonEdit({ onClick }) {
    return (
        <button
            onClick={onClick}
            className="ml-4 duration-500 animate-bounce cursor-pointer px-5 z-10 flex items-center gap-2 fixed bottom-20 right-35 py-2 bg-secondary text-primary text-xl font-bold uppercase tracking-widest border-brutal rounded-[20px] hover-lift"
        >
            Edit
        </button>
    );
}