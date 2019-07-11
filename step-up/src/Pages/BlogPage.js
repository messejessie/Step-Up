import React, { Component } from 'react';
//import BlogForm from '../component/blogForm'
//import MainBlog from '../component/blogPageCard'
import apiBlog from '../utils/apiBlog';
//import { throws } from 'assert';
import { List, ListItem } from "../component/blogList"
import { Col, Row, Container } from "../component/grid";
import Jumbotron from "../component/jumbotron";
import { Input, TextArea, FormBtn } from "../component/Form";


class BlogPage extends Component {
  state = {
    memberid: '',
    allBlog: [],
    memberBlogs: [],
    freeform: '',
    goals: '',
    gratitude: '',
    affirmations: ''
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }
 
  componentDidMount() {
    this.loadBlogs();
    this.loadMemberBlogs();
  };

  loadBlogs = () => {
    console.log("at loadblogs")
    apiBlog.getBlogs("/api/blog")
      // .then(response => console.log(response));
      .then(res => this.setState({ allBlogs: res.data }))
    }

    loadMemberBlogs = () => {
      apiBlog.getPopulateBlog(this.props.location.state.memberid)
      .then(res => this.setState({memberBlogs: res.data}))
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
    const blogData = { freeform, goals, gratitude, affirmations }
    const memberid = sessionStorage.getItem('memberid');
    apiBlog.saveBlog(blogData, memberid)
      .then(res => this.loadBlogs())
      .then(res => this.loadMemberBlogs())
    

        console.log(blogData);

  }

  // handleButtonClick = (allBlog) => {
  //   console.log(allBlog)
  //   this.toggle(this.toggle.bind(this))
  // }



  render() {

    console.log(this.props)
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
            <Jumbotron>
              <h1>Breathe In...Breathe Out</h1>
            </Jumbotron>
            <form>
              <Input
                name="gratitude"
                placeholder="Something Your Grateful For"
                onChange={this.handleChange}

              />
              <Input
                name="affirmations"
                placeholder="Today's Affirmation"
                onChange={this.handleChange}
              />
              <Input
                name="goals"
                placeholder="Today's Goal"
                onChange={this.handleChange}
              />
              <TextArea
                name="freeform"
                placeholder="How was today?"
                onChange={this.handleChange}

              />
              <FormBtn onClick={this.handleBlog}>
                Submit
             </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
            </Jumbotron>
            <List>
              {/* {this.state.allBlogs.map(allBlog => ( */}
                <ListItem> 
                  {/* key={allBlog._id}> */}

                </ListItem>
              {/* ))} */}

            </List>
          </Col>
        </Row>
      </Container>
    )
    // return (
    //     <div>
    //         <MainBlog
    //             handleChange={this.handleChange}
    //             handleBlog={this.handleBlog}
    //             freeform={this.state.freeform}
    //             goals={this.state.goals}
    //             affirmations={this.state.affirmations}
    //             gratitude={this.state.gratitude}
    //         />
    //     </div>
    // )
  }
}

export default BlogPage; 