import React, { useState } from 'react';
import { LogoLight, HomeLight, ExploreLight, NotificationsLight, MessagesLight, GrokLight, ListsLight, ProfileLight, MoreLight, BreadCrumb, BookmarksLight, CommunityLight } from './Media';
import Avatar from 'react-avatar';
import { Link } from 'react-router-dom';

const Element = ({ icon, text, selected, link, onClick }) => {
	return (
		<Link to={link} onClick={onClick}>
			<div className={`flex w-[75%] text-xl font-sans hover:bg-slate-200 rounded-full h-[3rem] items-center transition-all ${selected && 'font-bold'}`}>
				<div className='m-3'>{icon}</div>
				<div className={`m-3 max-lg:hidden${selected ? '' : ''}`}>{text}</div>
			</div>
		</Link>
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
	const [selectedStates, setSelectedStates] = useState({
		Home: true,
		Explore: false,
		Notifications: false,
		Messages: false,
		Grok: false,
		Lists: false,
		Bookmarks: false,
		Communities: false,
		Premium: false,
		Profile: false,
		More: false
	});

	const handleElementClick = (element) => {
		const updatedStates = { ...selectedStates };
		console.log(selectedStates)
		Object.keys(updatedStates).forEach(key => {
			updatedStates[key] = key === element ? true : false;
		});
		setSelectedStates(updatedStates);
	};

	return (
		<div className="sticky top-0 flex flex-col h-screen border-r border-slate-200">
			<div className='flex flex-col overflow-y-auto mt-1 mb-1'>
				<LogoLight className='m-3' />
				<Element
					icon={<HomeLight selected={selectedStates['Home']} />}
					text={'Home'}
					selected={selectedStates['Home']}
					onClick={() => handleElementClick('Home')}
				/>
				<Element
					icon={<ExploreLight selected={selectedStates['Explore']} />}
					text={'Explore'}
					selected={selectedStates['Explore']}
					onClick={() => handleElementClick('Explore')}
				/>
				<Element
					icon={<NotificationsLight selected={selectedStates['Notifications']} />}
					text={'Notifications'}
					selected={selectedStates['Notifications']}
					onClick={() => handleElementClick('Notifications')}
				/>
				<Element
					icon={<MessagesLight selected={selectedStates['Messages']} />}
					text={'Messages'}
					selected={selectedStates['Messages']}
					onClick={() => handleElementClick('Messages')}
				/>
				<Element
					icon={<GrokLight selected={selectedStates['Grok']} />}
					text={'Grok'}
					selected={selectedStates['Grok']}
					onClick={() => handleElementClick('Grok')}
				/>
				<Element
					icon={<ListsLight selected={selectedStates['Lists']} />}
					text={'Lists'}
					selected={selectedStates['Lists']}
					onClick={() => handleElementClick('Lists')}
				/>
				<Element
					icon={<BookmarksLight selected={selectedStates['Bookmarks']} />}
					text={'Bookmarks'}
					selected={selectedStates['Bookmarks']}
					onClick={() => handleElementClick('Bookmarks')}
				/>
				<Element
					icon={<CommunityLight selected={selectedStates['Communities']} />}
					text={'Communities'}
					selected={selectedStates['Communities']}
					onClick={() => handleElementClick('Communities')}
				/>
				<Element
					icon={<LogoLight />}
					text={'Premium'}
					selected={selectedStates['Premium']}
					onClick={() => handleElementClick('Premium')}
				/>
				<Element
					icon={<ProfileLight selected={selectedStates['Profile']} />}
					text={'Profile'}
					selected={selectedStates['Profile']}
					link={'profile'}
					onClick={() => handleElementClick('Profile')}
				/>
				<Element
					icon={<MoreLight />}
					text={'More'}
					selected={selectedStates['More']}
					onClick={() => handleElementClick('More')}
				/>
				<BlueButton text={'Post'} />
			</div>
			<div className='mt-auto'>
				<UserButton image={"AK"} act_name={'Aditya Kale'} username={'adityadkale'} />
			</div>
		</div>
	);
};


export default LeftSidebar;
