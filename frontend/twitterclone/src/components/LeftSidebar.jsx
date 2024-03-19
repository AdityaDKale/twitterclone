import React from 'react';
import { LogoLight, HomeLight, ExploreLight, NotificationsLight, MessagesLight, GrokLight, ListsLight, ProfileLight, MoreLight, BreadCrumb, BookmarksLight, CommunityLight } from './Media';
import Avatar from 'react-avatar';

const Element = ({ icon, text, selected }) => {
  return (
    <div className={`flex text-xl font-sans hover:bg-slate-200 rounded-full h-[3rem] items-center transition-all ${selected && 'font-bold'}`}>
      <div className='m-3'>{icon}</div>
      <div className={`m-3 max-lg:hidden${selected ? '' : ''}`}>{text}</div>
    </div>
  );
};

const BlueButton = ({ text }) => <button className='h-12 bg-sky-500 hover:bg-sky-600 rounded-full ml-3 mr-3 mt-6 w-60 text-white text-base font-bold max-lg:hidden'>{text}</button>;

const UserButton = ({ image, act_name, username }) => {
  return (
    <div className='flex place-items-center p-4 hover:bg-slate-200 rounded-full'>
      <div>
        <Avatar name={image} className='rounded-full mr-3' size='3rem' />
      </div>
      <div className='max-lg:hidden'>
        <div className='font-sans font-bold'>{act_name}</div>
        <div className='text-slate-500'>@{username}</div>
      </div>
      <div className='align-middle ml-auto max-lg:hidden'>
        <BreadCrumb />
      </div>
    </div>
  );
};

const LeftSidebar = () => {
  return (
    <div className="flex flex-col h-screen border-r border-slate-200">
      <div className='flex flex-col overflow-y-auto mt-1 mb-1'>
        <LogoLight className='m-3' />
        <Element icon={<HomeLight selected={true} />} text={'Home'} selected={true} />
        <Element icon={<ExploreLight selected={false} />} text={'Explore'} selected={false} />
        <Element icon={<NotificationsLight selected={false} />} text={'Notifications'} selected={false} />
        <Element icon={<MessagesLight selected={false} />} text={'Messages'} selected={false} />
        <Element icon={<GrokLight selected={false} />} text={'Grok'} selected={false} />
        <Element icon={<ListsLight selected={false} />} text={'Lists'} selected={false} />
        <Element icon={<BookmarksLight selected={false} />} text={'Bookmarks'} selected={false} />
        <Element icon={<CommunityLight selected={false} />} text={'Communities'} selected={false} />
        <Element icon={<LogoLight />} text={'Premium'} selected={false} />
        <Element icon={<ProfileLight selected={false} />} text={'Profile'} selected={false} />
        <Element icon={<MoreLight />} text={'More'} selected={false} />
        <BlueButton text={'Post'} />
      </div>
      <div className='mt-auto'>
        <UserButton image={"AK"} act_name={'Aditya Kale'} username={'adityadkale'} />
      </div>
    </div>
  );
};

export default LeftSidebar;
