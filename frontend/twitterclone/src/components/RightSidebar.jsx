import React from 'react'
import { SearchIcon, BreadCrumb } from './Media'
import Avatar from 'react-avatar'

const Subscribe = (props) => {
    return (
        <div className='bg-slate-100 h-40 w-[330px] max-lg:w-[290px] rounded-xl p-1 mt-3'>
            <div className=' ml-5 h-max items-center justify-center pt-2'>
                <h1 className='font-sans font-bold text-xl '>{props.title}</h1>
                <p className='mt-2 mb-2'>Subscribe to unlock new features and if eligible, receive a share of ads revenue.</p>
                <BlueButton text={'Subscribe'} />
            </div>
        </div >
    )
}

const TrendingElement = ({ header, tag, no_of_posts }) => {
    return (
        <div className='mt-6 mb-2 mr-3 flex place-items-center'>
            <div>
                <p className='font-sans text-slate-500 text-xs'>{header}</p>
                <p className='font-sans font-bold'>#{tag}</p>
                <p className='font-sans text-slate-500 text-xs'>{no_of_posts} posts</p>
            </div>
            <div className='ml-auto'>
                <BreadCrumb className='fill-slate-500' />
            </div>
        </div>
    )
}

const TrendingBox = () => {
    return (
        <div className='bg-slate-100 w-[330px] max-lg:w-[290px] rounded-xl p-1 mt-3'>
            <div className=' ml-5 h-max items-center justify-center pt-2 mb-6'>
                <h1 className='font-sans font-bold text-xl '>What's happening</h1>
                <TrendingElement header={"Trending in India"} tag={"stockmarkets"} no_of_posts={"15.3K"} />
                <TrendingElement header={"Trending in India"} tag={"Angular"} no_of_posts={"15.3K"} />
                <TrendingElement header={"Trending in India"} tag={"Binod"} no_of_posts={"15.3K"} />
                <TrendingElement header={"Trending in India"} tag={"YalgaarHo"} no_of_posts={"15.3K"} />
                <div className='font-sans text-sm mt-6 text-sky-600'>Show More</div>
            </div>
        </div>
    )
}


const UserButton = ({ image, act_name, username }) => {
    return (
        <div className='flex place-items-center hover:bg-slate-200 rounded-full mt-5 mb-5'>
            <div>
                <Avatar name={image} className='rounded-full mr-3' size='3rem' />
            </div>
            <div className='max-lg:hidden'>
                <div className='font-sans font-bold'>{act_name}</div>
                <div className='text-slate-500'>@{username}</div>
            </div>
            <div className='align-middle ml-auto max-lg:hidden'>
                <BlackButton text={"Follow"} />
            </div>
        </div>
    );
};


const FollowBox = () => {
    return (
        <div className='bg-slate-100 w-[330px] max-lg:w-[290px] rounded-xl p-1 mt-3'>
            <div className=' ml-5 h-max items-center justify-center pt-2 mb-6'>
                <h1 className='font-sans font-bold text-xl mb-6'>Who to follow</h1>
                <UserButton image={"Akh"} act_name={"Aditya Khade"} username={'adityakhadeak'} />
                <UserButton image={'RJAIN'} act_name="Rushabh Jain" username='rjain' time={"2h"} />
                <UserButton image={'MM'} act_name="Mayur Mane" username='mayur' time={"2h"} />
                <div className='font-sans text-sm mt-6 text-sky-600'>Show More</div>
            </div>
        </div>
    )
}


const BlackButton = ({ text }) => <button className='h-9 bg-black hover:bg-sky-600 rounded-full mr-2 w-20 text-white text-base font-bold'> {text} </button>;

const BlueButton = ({ text }) => <button className='h-9 bg-sky-500 hover:bg-sky-600 rounded-full mr-12 w-24 text-white text-base justify-center font-bold pl-2 pr-2'> {text} </button>;

const SearchButton = () => {
    return (
        <div className='flex bg-slate-100 mt-1 items-center w-[330px] max-lg:w-[290px] rounded-full h-12'>
            <SearchIcon className='ml-5' />
            <input className='focus:outline-none pl-4 ml-1 h-11 bg-slate-100' placeholder='Search'></input>
        </div>
    )
}

const RightSidebar = () => {
    return (
        <div className='sticky top-0 w-[28%] max-2xl:hidden'>
            <div className='ml-8'>
                <SearchButton />
                <Subscribe title={"Subscribe to Premium"} content={"hello"} />
                <TrendingBox />
                <FollowBox />
            </div>

        </div>
    )
}

export default RightSidebar
