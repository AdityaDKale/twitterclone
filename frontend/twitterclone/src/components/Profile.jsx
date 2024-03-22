import React from "react";
import { BackButtonLight } from './Media';
import { Link } from "react-router-dom";
import Banner from "../assets/banner.jpg"
import Avatar from "react-avatar";
import { CalenderIcon, BagIcon } from "./Media";
import { Tweets } from "./Feed";

const Header = ({ act_name, no_of_posts }) => {
    return (
        <div className="flex h-14 items-center border-b border-slate-200">
            <Link to={'/'} className="w-9 h-9 rounded-full hover:bg-slate-200 flex items-center justify-center mr-8 ml-1">
                <BackButtonLight />
            </Link>
            <div>
                <div className="font-bold text-lg">{act_name}</div>
                <div className="text-slate-500 text-sm">{no_of_posts} posts</div>
            </div>
        </div>
    )
}

const EditProfileButton = () => {
    return (
        <div className="rounded-full justify-center items-center h-fit p-2 pr-5 pl-5 border-2 border-slate-100 font-semibold hover:bg-slate-200 ml-auto mr-4">
            Edit Profile
        </div>
    )
}

const ProfileHeadingContent = ({ act_name, username }) => {
    return (
        <div className="ml-5">
            <div className="font-bold text-xl">{act_name}</div>
            <div className="text-slate-500">@{username}</div>
            <br />
            <div className="w-[90%] text-wrap text-slate-800 text-[0.95rem] font-sans">Python Programmer | Flask Developer | UI/UX Designer | Machine Learning Enthusiast | Professional FIDE Rated Chess Player</div>
            <div className="mt-4">
                <div className="inline-flex h-max item-center">
                    <BagIcon className='fill-slate-500 mt-[2px]' />
                    <div className="text-slate-500">Software developer/Programmer/Software engineer</div>
                </div>
                <div className="flex">
                    <CalenderIcon className='fill-slate-500 mt-[2px]' />
                    <div className="text-slate-500">Joined September 2023</div>
                </div>
            </div>
            <div className="flex mt-4 text-sm">
                <div className="flex mr-4">
                    <div className="flex font-bold">17</div>
                    <div className="flex ml-1 text-slate-500">Following</div>
                </div>
                <div className="flex">
                    <div className="flex font-bold">7</div>
                    <div className="flex ml-1 text-slate-500">Followers</div>
                </div>
            </div>
        </div>
    )
}

const ProfileButton = ({ text }) => {
    return (
        <div className="flex h-12 w-auto items-center justify-center p-5 hover:bg-slate-200">{text}</div>
    )
}

const Profile = () => {
    return (
        <div className='w-[50%] border-r border-slate-200 flex flex-col max-2xl:w-[100%]'>
            <Header act_name={"Aditya Kale"} no_of_posts={107} />
            <img src={Banner} className="z-1"></img>
            <div className="flex place-items-center">
                <Avatar name={"AK"} className="z-2 rounded-full mt-[-1.7rem] ml-2" />
                <EditProfileButton />
            </div>
            <ProfileHeadingContent act_name={"Aditya Kale"} username={"adityadkale"} />
            <div className="grid grid-cols-6 mt-4 w-full justify-items-stretch border-b border-slate-200">
                <ProfileButton text={"Posts"} />
                <ProfileButton text={"Replies"} />
                <ProfileButton text={"Highlights"} />
                <ProfileButton text={"Articles"} />
                <ProfileButton text={"Media"} />
                <ProfileButton text={"Likes"} />
            </div>
            <Tweets image={'AK'} act_name="Aditya Kale" username='adityadkale' time={"2h"} />
            <Tweets image={'AK'} act_name="Aditya Kale" username='adityadkale' time={"2h"} />
            <Tweets image={'AK'} act_name="Aditya Kale" username='adityadkale' time={"2h"} />
        </div>
    )
}

export default Profile;
