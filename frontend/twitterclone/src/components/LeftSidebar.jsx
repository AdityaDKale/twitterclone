import React from 'react'
import {LogoLight ,HomeLight, ExploreLight, NotificationsLight, MessagesLight, GrokLight, ListsLight, ProfileLight, MoreLight} from './Media'

const Element = ({icon, text, selected}) => {
    if (selected === true) {
    return (
        <div className='flex w-max font-bold text-xl font-sans hover:bg-slate-200 rounded-full h-16 items-center'>
            <div className='m-3'>{icon}</div>
            <div className='m-3'>{text}</div>
        </div>
    )}
    return (
        <div className='flex w-max text-xl font-sans hover:bg-slate-200 rounded-full h-16 items-center'>
            <div className='m-3'>{icon}</div>
            <div className='m-3'>{text}</div>
        </div>
    )
}

const BlueButton = ({text}) => <button className='h-12 bg-sky-400 hover:bg-sky-500 rounded-full m-3 text-white text-base'> {text} </button>

const UserButton = ({image, act_name, username}) => {
    return (
        <div className='flex'>
            <div>{image}</div>
            <div>
                <div>{act_name}</div>
                <div>@{username}</div>
            </div>
        </div>
    )
}

const LeftSidebar = () => {
    return (
        <div>
            <div className='inline-flex mt-1 mb-1 flex-col'>
                <LogoLight className='m-3'/>
                <Element icon={<HomeLight selected={true}/>} text={'Home'} selected={true}/>
                <Element icon={<ExploreLight selected={false}/>} text={'Explore'} selected={false}/>
                <Element icon={<NotificationsLight selected={false}/>} text={'Notifications'} selected={false}/>
                <Element icon={<MessagesLight selected={false}/>} text={'Messages'} selected={false}/>
                <Element icon={<GrokLight selected={false}/>} text={'Grok'} selected={false}/>
                <Element icon={<ListsLight selected={false}/>} text={'Lists'} selected={false}/>
                <Element icon={<LogoLight/>} text={'Premium'} selected={false}/>
                <Element icon={<ProfileLight selected={false}/>} text={'Profile'} selected={false}/>
                <Element icon={<MoreLight/>} text={'More'} selected={false}/>
                <BlueButton text={'Post'}/>
            </div>
        </div>
    )
}

export default LeftSidebar
