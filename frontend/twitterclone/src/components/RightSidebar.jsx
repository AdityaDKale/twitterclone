import React from 'react'
import {SearchIcon} from './Media'

const SearchButton = () => {
    return(
        <div className='flex bg-slate-200'>
            <SearchIcon /> 
            <input className='focus:outline-none pl-4' placeholder='Search'></input>
        </div>
    )
}

const RightSidebar = () => {
    return (
        <div className='w-72 border-l border-slate-200'>
            <SearchButton />
        </div>
    )
}

export default RightSidebar
