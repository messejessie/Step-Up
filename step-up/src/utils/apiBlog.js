import axios from "axios";


export default {
  // Gets all postings
  getblogs: function() {
    return axios.get("/api/blog");
  },
  // Gets the post with the given id
  getBlog: function(id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the post with the given id
  deleteBlog: function(id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a post to the database
  saveBlog: function(blogData) {
    console.log('the blogData', blogData);
    return axios.post(`/api/blog/${blogData[0].memberid}`, blogData);
  }
};
