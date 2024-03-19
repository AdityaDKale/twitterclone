import React from 'react'
import { SearchIcon } from './Media'

const Subscribe = (props) => {
    return (
        <div className='bg-slate-200 h-40 w-[330px] max-lg:w-[290px] rounded-xl p-1 mt-3'>
            <div className=' ml-5 h-max items-center justify-center pt-2'>
                <h1 className='font-sans font-bold text-xl '>{props.title}</h1>
                <p className='mt-2 mb-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <BlueButton text={'Subscribe'} />
            </div>
        </div >
    )
}

const BlueButton = ({ text }) => <button className='h-9 bg-sky-500 hover:bg-sky-600 rounded-full mr-12 w-24 text-white text-base justify-center font-bold pl-2 pr-2'> {text} </button>;

const SearchButton = () => {
    return (
        <div className='flex bg-slate-200 mt-1 items-center w-[330px] max-lg:w-[290px] rounded-full h-12'>
            <SearchIcon className='ml-5' />
            <input className='focus:outline-none pl-4 ml-1 h-11 bg-slate-200' placeholder='Search'></input>
        </div>
    )
}

const RightSidebar = () => {
    return (
        <div className='w-[28%] border-l border-slate-200 max-2xl:hidden'>
            <div className='ml-8'>
                <SearchButton />
                <Subscribe title={"Subscribe to Premium"} content={"hello"} />

            </div>

        </div>
    )
}

export default RightSidebar
