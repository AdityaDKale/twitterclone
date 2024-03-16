import React from 'react'
import {SettingsLight, ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon} from './Media'
import Avatar from 'react-avatar'
import TextareaAutosize from 'react-textarea-autosize';

const TopButtons = () => {
    return (
    <div className='flex justify-between border-b border-slate-200'>
        <button className='w-64 h-14 hover:bg-slate-200 transition-all font-sans'>For You</button>
        <button className='w-72 h-14 hover:bg-slate-200 transition-all font-sans'>Following</button>
        <div className='w-14 h-14 align-middle items-center justify-center flex'>
            <div className='w-9 h-9 hover:bg-slate-200 rounded-full justify-center items-center flex transition-all'>
                <SettingsLight />
            </div>
        </div>
    </div>
    )
}

const InputTweet = ({image}) => {
    return(
        <div>
            <div className='flex m-5'>
                <Avatar name={image} className='rounded-full mr-3' size='3rem'/>
                <form className='w-full pt-1 pl-3'>
                    <TextareaAutosize className='w-[40rem] focus:outline-none resize-none text-2xl ' placeholder="What is happening?!"/>
                </form>
            </div>
            <div className='border-b border-slate-200 ml-24 mr-14 mt-7 mb-7'></div>
            <div className='flex justify-between mr-4'>
                <div className='flex items-center ml-[5.5rem]'>
                    <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                        <ImageIcon className='fill-sky-500'/>
                    </div>
                    <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                        <GIFIcon className='fill-sky-500'/>
                    </div>
                    <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                        <PollIcon className='fill-sky-500'/>
                    </div>
                    <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                        <EmojiIcon className='fill-sky-500'/>
                    </div>
                    <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                        <ScheduleIcon className='fill-sky-500'/>
                    </div>
                </div>
                <BlueButton text={"Post"}/>
            </div>
            <div className='border-b border-slate-200 mt-5'></div>
        </div>

    )
}

const BlueButton = ({text}) => <button className='h-9 bg-sky-500 hover:bg-sky-600 rounded-full mr-12 w-20 text-white text-base font-bold'> {text} </button>

const Feed = () => {
    return (
        <div className='w-[80%]'>
            <TopButtons />
            <InputTweet image={'AK'} />
        </div>
    )
}

export default Feed
