import React from 'react';
import { SettingsLight, ImageIcon, GIFIcon, PollIcon, EmojiIcon, ScheduleIcon, MessageIcon, RepostIcon, LikeIcon, ViewIcon } from './Media';
import Avatar from 'react-avatar';
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
  );
};

const InputTweet = ({ image }) => {
  return (
    <div>
      <div className='flex m-5'>
        <Avatar name={image} className='rounded-full mr-3' size='3rem' />
        <form className='flex flex-col flex-grow pt-1 pl-3'>
          <TextareaAutosize className='w-full focus:outline-none resize-none text-2xl mb-5' placeholder="What is happening?!" />
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                <ImageIcon className='fill-sky-500' />
              </div>
              <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                <GIFIcon className='fill-sky-500' />
              </div>
              <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                <PollIcon className='fill-sky-500' />
              </div>
              <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                <EmojiIcon className='fill-sky-500' />
              </div>
              <div className='h-9 w-9 hover:bg-blue-100 justify-center items-center rounded-full flex'>
                <ScheduleIcon className='fill-sky-500' />
              </div>
            </div>
            <BlueButton text={"Post"} />
          </div>
        </form>
      </div>
      <div className='border-b border-slate-200 ml-24 mr-14 mt-7 mb-7'></div>
    </div>
  );
};


const TweetElements = ({ icon, count }) => {
  return (
    <div className='flex items-center justify-center rounded-full hover:bg-slate-200 mr-3 sm:mr-6 mb-2 sm:mb-0'>
      {icon} <span className='text-xs sm:text-sm'>{count}</span>
    </div>
  );
};


const Tweets = ({ image, act_name, username, time }) => {
  return (
    <div className='flex flex-col m-5'>
      <div className='flex items-center'>
        <Avatar name={image} className='rounded-full mr-3' size='3rem' />
        <div className='font-sans flex flex-col'>
          <span className='font-bold'>{act_name} </span><span className='text-nowrap font-normal text-slate-500'> @{username} · {time}</span>
        </div>
      </div>
      <div>
        "When returning information in a structured format the fields can be a myriad of types: string, boolean, integers. One of the hardest types to correctly handle is high-cardinality categorical values (or enums)"
        <div className='flex mt-3'>
          <TweetElements icon={<MessageIcon className='fill-slate-500' />} count={5} />
          <TweetElements icon={<RepostIcon className='fill-slate-500' />} count={11} />
          <TweetElements icon={<LikeIcon className='fill-slate-500' />} count={7} />
          <TweetElements icon={<ViewIcon className='fill-slate-500' />} count={15} />
        </div>
      </div>
      <div className='border-b border-slate-200 mt-5'></div>
    </div>
  );
};

const BlueButton = ({ text }) => <button className='h-9 bg-sky-500 hover:bg-sky-600 rounded-full mr-12 w-20 text-white text-base font-bold'> {text} </button>;

const Feed = () => {
  return (
    <div className='w-[80%] max-w-full overflow-hidden flex flex-col flex-grow'>
      <TopButtons />
      <div className="flex-grow overflow-y-auto">
        <InputTweet image={'AK'} />
        <Tweets image={'AK'} act_name="Aditya Kale" username='adityadkale' time={"2h"} />
        <Tweets image={'AKH'} act_name="Aditya Khade" username='adityakhadeak' time={"2h"} />
        <Tweets image={'RJAIN'} act_name="Rushabh Jain" username='rjain' time={"2h"} />
        <Tweets image={'MM'} act_name="Mayur Mane" username='mayur' time={"2h"} />
        <Tweets image={'AK'} act_name="Aditya Kale" username='adityadkale' time={"2h"} />
      </div>
    </div>
  );
};

export default Feed;
