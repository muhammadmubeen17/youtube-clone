import React from 'react'
import channellogo from '../assets/images/profile.jpg'
import VideoComponent from '../components/VideoComponent'
import videothumbnail from '../assets/images/programming.jpg'
import videothumbnail1 from '../assets/images/thumbnail1.jpg'
import videothumbnail2 from '../assets/images/thumbnail2.jpg'
import videothumbnail3 from '../assets/images/thumbnail3.jpg'
import videothumbnail4 from '../assets/images/thumbnail4.jpg'
import videothumbnail5 from '../assets/images/thumbnail5.jpg'
import videothumbnail6 from '../assets/images/thumbnail6.jpg'
import videothumbnail7 from '../assets/images/thumbnail7.jpg'
import videothumbnail8 from '../assets/images/thumbnail8.jpg'
import videothumbnail9 from '../assets/images/thumbnail9.jpg'
import videothumbnail10 from '../assets/images/thumbnail10.jpg'
import videothumbnail11 from '../assets/images/thumbnail11.jpg'


function Home(props) {

    let homemarginleft;

    if (props.sidebarstate == "expand") {
        homemarginleft = "md:ml-[70px]";
    } else {
        homemarginleft = "md:ml-[240px]";
    }

    return (
        <div className={"w-full z-20 ml-0 " + homemarginleft}>
            <ul className="pt-4 list-none mt-[60px] flex flex-row flex-wrap content-start">
                <VideoComponent videothumbnail={videothumbnail1} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora!" noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail2} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail3} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail4} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail5} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail6} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail7} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail8} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail9} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail10} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail11} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail1} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora!" noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail2} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail3} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail4} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail5} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail6} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail7} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail8} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail9} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail10} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail11} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
                <VideoComponent videothumbnail={videothumbnail} channellogo={channellogo} channelname="Harry Potter" videotitle="Lorem ipsum dolor sit amet consectetur adipisicing elit." noofviews="131k views" uploadtime="17 minutes ago" />
            </ul>
        </div>
    )
}

export default Home