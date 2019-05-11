import React, { Component } from 'react';
//import BlogForm from '../component/blogForm'
import MainBlog from '../component/blogPageCard'
import apiBlog from '../utils/apiBlog';
//import { throws } from 'assert';

class BlogPage extends Component {
    state = {
        memberid: '',
        freeform: '',
        goals: '',
        gratitude: '',
        affirmations: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        });
    }

    handleBlog = event => {
        console.log('this state', this.state);
        //const blogData = { freeform: this.state.freeform, goals: this.state.goals, affirmations: this.state.affirmations, gratitude: this.state.gratitude };
        console.log('');
        const { freeform, goals, gratitude, affirmations } = this.state;
        event.preventDefault();
        const blogData = {  freeform, goals, gratitude, affirmations }
        const memberid = sessionStorage.getItem('memberid');
        apiBlog.saveBlog(blogData, memberid)
            .then(response => {
                //sessionStorage.setItem('authenticated', true)
                this.setState({
                    memberid: response.data_id,
                }, () => {
                    this.props.history.push({
                        pathname: '/profile',
                        state: { memberid: 'something' }
                    })
                })
                
         console.log(response)
            });
  
    }

    render() {

        console.log(this.props)
        return (
            <div>
                <MainBlog
                    handleChange={this.handleChange}
                    handleBlog={this.handleBlog}
                    freeform={this.state.freeform}
                    goals={this.state.goals}
                    affirmations={this.state.affirmations}
                    gratitude={this.state.gratitude}
                />
            </div>
        )
    }

}

export default BlogPage; 