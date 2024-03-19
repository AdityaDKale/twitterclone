import React from 'react'
import { SearchIcon } from './Media'

const SearchButton = () => {
    return (
        <div className='flex bg-slate-200 mt-1 ml-8 items-center w-[330px] max-lg:w-[290px] rounded-full h-12'>
            <SearchIcon className='ml-5' />
            <input className='focus:outline-none pl-4 ml-1 h-11 bg-slate-200' placeholder='Search'></input>
        </div>
    )
}

const RightSidebar = () => {
    return (
        <div className='w-[28%] border-l border-slate-200'>
            <SearchButton />
        </div>
    )
}

export default RightSidebar
