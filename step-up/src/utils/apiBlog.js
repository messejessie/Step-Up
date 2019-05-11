import axios from "axios";


export default {
  // Gets all postings
  getblogs: function () {
    return axios.get("/api/blog");
  },
  // Gets the post with the given id
  getBlog: function (id) {
    return axios.get("/api/blog/" + id);
  },
  // Deletes the post with the given id
  deleteBlog: function (id) {
    return axios.delete("/api/blog/" + id);
  },
  // Saves a post to the database
  saveBlog: function (blogData, memberid) {
    return axios.post("/api/blog/" + memberid, blogData);
  },

//   getPopulateBlog: function (id) {
//     return axios.get(`/api/blog/populatedmember/${id}`);
//   },
};
