import React, { Component } from 'react';
//import BlogForm from '../component/blogForm'
import MainBlog from '../component/blogPageCard'
//import { throws } from 'assert';

class BlogPage extends Component {
    state = {
        memberid: '',
        freeform: '',
        goals: '',
        gratitude:'',
        affirmations: ''
    }
    
    handleChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      }

      handleBlog = event => {
        console.log('this state', this.state);
        //const blogData = { freeform: this.state.freeform, goals: this.state.goals, affirmations: this.state.affirmations, gratitude: this.state.gratitude };
        console.log('');
        event.preventDefault();
    //     apiMember.saveMember()
    //       .then(response => {
    //         sessionStorage.setItem('authenticated', true);
    //         this.setState({
    //           memberid: response.data._id,
    //         }, () => {
    //           this.props.history.push({
    //             pathname: '/profile',
    //             state: { memberid: this.state.memberid }
    //           })
    //         })
    
    //         console.log(response)
    //       });
     }

    render() {
        return (
            <div>
                <MainBlog 
                handleBlog={this.handleBlog}
                freeform={this.state.freeform}
                goals={this.state.goals}
                affirmations= {this.state.affirmations}
                gratitude={this.state.gratitude}
                />
            </div>
        )
    }

}

export default BlogPage; 