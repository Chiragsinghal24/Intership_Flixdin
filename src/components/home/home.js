// import './App.css';
import Nav from './sidebar/sidebar';
// import Flixlogo from "..../"
// image: "/images/flix_Logo.svg"
import Heading from './Heading/Heading';
import Section from './sections/sections';
import Post from './connectionCalls_home/connectionCalls_home'
import PostCard from './post/post';
import ProfileList from './cards/card2';
import Profile from './cards/card1'
import Carousel from './caro/Carousel';
// import "./caro/carousel.css";
// import "./caro/carousel_styling"
import "./styles/carousel.css"

function home() {
  return (
    <>
    <div className="App flex flex-row">
      <div class="basis-1/4 bg-[#F7EAA9] rounded-r-3xl my-2">
        <Nav></Nav>
      </div>
      <div class="basis-1/2 pr-3">
        <Heading></Heading>
        <Section></Section>
        <Carousel />
        <Post></Post>
        <PostCard></PostCard>
      </div>
      <div class="basis-1/4">
        <Profile></Profile>
        <ProfileList></ProfileList>
      </div>
    </div>
    </>
  );
}

export default home;