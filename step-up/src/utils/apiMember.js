import axios from "axios";

export default {
  // Gets all members
  getmembers: function() {
    return axios.get("/api/member");
  },
  // Gets the member with the given id
  // getMember: function(data) {
  //   console.log('data', data);
  //   return axios.post("/api/member", data);
  // },
  signInMember: function(data) {
    console.log('data', data);
    return axios.post("/api/member", data);
  },
  
  getMemberPopulateBlog: function(id){
   return axios.get("api/populatedmember");
 },
 
  // Deletes the member with the given id
  deleteMember: function(id) {
    return axios.delete("/api/member/" + id);
  },
  // Saves a member to the database
  saveMember: function(memberData) {
    return axios.post("/api/member/" + memberData.id, memberData);
  }
};
