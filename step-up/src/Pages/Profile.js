import React, { Component } from 'react';
import ProfileBlogCard from '../component/profileBlogCard'
import ProfileJumbo from '../component/profileJumbo'


class Profile extends Component {

    render() {
      return (
        <div>
         <ProfileJumbo />
         <br />
        <ProfileBlogCard />
          
        </div>
      )
    }
  };
  export default Profile;