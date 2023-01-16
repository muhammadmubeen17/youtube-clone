import React from 'react';
import Filters from './Filters';

const Filterbar = (props) => {

    let filterPaddingLeft;

    if (props.sidebarstate == "expand") {
        filterPaddingLeft = "md:pl-[90px]";
    } else {
        filterPaddingLeft = "md:pl-[260px]";
    }

    return (
        <div id='filterbar' className={"w-full py-3 pr-2 fixed left-0 right-0 whitespace-nowrap bg-white overflow-x-scroll z-30 pl-4 " + filterPaddingLeft}>
            <Filters filtername="All" filteractive="active" />
            <Filters filtername="Movies" />
            <Filters filtername="Songs" />
            <Filters filtername="Sports" />
            <Filters filtername="News" />
            <Filters filtername="Comedy Shows" />
            <Filters filtername="New Year 2023" />
            <Filters filtername="Games" />
            <Filters filtername="History" />
            <Filters filtername="Cars" />
            <Filters filtername="Cricket" />
            <Filters filtername="Football" />
            <Filters filtername="Hockey" />
            <Filters filtername="New to you" />
            <Filters filtername="Mixes" />
        </div>
    );
}

export default Filterbar;
