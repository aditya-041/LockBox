import React from 'react'

const Footer = () => {
    return (
        <div className='bg-slate-800 text-white items-center justify-center flex flex-col w-full'>
            <div className="logo font-bold text-2xl">
                <span className='text-green-700'> &lt;</span>
                LockBox
                <span className='text-green-700'>/&gt;</span>
            </div>
            <div>
                <div className='flex justify-center items-center'>Created With <img className='w-6 mx-2' src="icons/heart.png" alt="Heart" /><a href="https://www.linkedin.com/in/aditya-basu-bbb882256/">by Aditya Basu</a></div>
            </div>
        </div>
    )
}

export default Footer
