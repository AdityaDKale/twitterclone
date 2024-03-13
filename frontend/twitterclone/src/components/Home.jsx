import React from 'react'
import LeftSidebar from './LeftSidebar'
import Feed from './Feed'
import RightSidebar from './RightSidebar'

const Home = () => {
    return (
        <div>
            <LeftSidebar />
            <Feed />
            <RightSidebar />
        </div>
    )
}

export default Home
