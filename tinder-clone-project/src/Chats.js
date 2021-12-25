import React from "react";
import "./Chats.css";
import Chat from "./Chat";

const Chats = () => {
  return (
    <div className="chats">
      <Chat
        name="Emma Watson"
        message="win gar dium levi OH sa 😤"
        timestamp="6 mins ago"
        profilePic="https://img.i-scmp.com/cdn-cgi/image/fit=contain,width=1098,format=auto/sites/default/files/styles/1200x800/public/d8/images/canvas/2021/12/07/4cc13a06-dbe9-4adb-b761-3c7c2caf04d8_98f9ca2f.jpg?itok=242NacV2&v=1638870231https://gooddoggies.online/wp-content/uploads/2020/06/5-Tips-To-Training-A-Labrador-Puppy-1.jpg"
      />
      <Chat
        name="Robert Downey Jr."
        message="I am Iron Man!"
        timestamp="1 hr ago"
        profilePic="https://www.looper.com/img/gallery/biggest-robert-downey-jr-moments-that-transformed-his-life/intro-1629919156.jpg"
      />
      <Chat
        name="Taylor Swift"
        message="Shake It Off! 👯‍♀️"
        timestamp="4 hrs ago"
        profilePic="https://media1.popsugar-assets.com/files/thumbor/hnVKqXE-xPM5bi3w8RQLqFCDw_E/475x60:1974x1559/fit-in/2048xorig/filters:format_auto-!!-:strip_icc-!!-/2019/09/09/023/n/1922398/9f849ffa5d76e13d154137.01128738_/i/Taylor-Swift.jpg"
      />
    </div>
  );
};

export default Chats;
