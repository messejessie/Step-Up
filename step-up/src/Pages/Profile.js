import React, { Component } from '../../node_modules/react';
import ProfileBlog from '../component/blogCard'
import ProfileJumbo from '../component/profileJumbo'
class Profile extends Component {

    render() {
      return (
        <div>
         <ProfileJumbo />
         <br />
        <ProfileBlog />
          
        </div>
      )
    }
  };
  export default Profile;