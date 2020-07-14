import http from "../http-common";

class DataService {
  createRegister(data){
    return http.post("./api/register",data);
  }  

  create(data) {
    console.log ('create DataService');
    return http.post("./api/posts",data);
  }
  getAll() {
    console.log ('create DataService');
    return http.get("/api/posts");
  }
  get(user_id) {
    return http.get(`/posts/${user_id}`);
  }
  getAllUser() {
    console.log ('create DataService');
    return http.get("/api/users");
  }
  login(formData){
    return http.post("./api/login",formData);
  }
  company(data) {
    console.log ('create DataService');
    return http.post("./api/company",data);
  }
  getAllService() {
    return http.get("/api/service");
  }

  getService(id) {
    return http.get(`/service/${id}`);
  }
  getAllEquipment() {
    return http.get("/api/equipment");
  }
  getequipmentsubcategoryid(id) {
    return http.get(`/api/equipmentshowbysubcategoryid/${id}`);
  }
  getequipmentbyid(id) {
    return http.get(`/api/equipmentshowbyid/${id}`);
  }
  getAllCompany() {
    return http.get("/api/company");
  }

  getservice() {
    return http.get(`/api/service`);
  }
  getsubcategory(id) {
    return http.get(`/api/subcategories/${id}`);
  }
  getCompany(id) {
    return http.get(`/api/company/${id}`);
  }

  
  getservicebyid(id) {
    return http.get(`/api/serviceshowbyid/${id}`);
  }
  getservicebysubcategoryid(id) {
    return http.get(`/api/serviceshowbysubcategoryid/${id}`);
  }
   
  getservicedetails(category,subcategory,id) {
    return http.get(`/api/servicedetails/${category}/${subcategory}/${id}`);
  }
  getequipmentdetails(category,subcategory,id) {
    return http.get(`/api/equipmentdetails/${category}/${subcategory}/${id}`);
  }
  getsupplierdetails(category,subcategory,id) {
    return http.get(`/api/supplierdetails/${category}/${subcategory}/${id}`);
  } 
  getunit_rigsdetails(category,subcategory,id) {
    return http.get(`/api/unit_rigsdetails/${category}/${subcategory}/${id}`);
  }
  getAllBlogs() {
    return http.get("/api/blogs");
  }

  getBlogs(id) {
    return http.get(`/blogs/${id}`);
  }
  createComments(data){
    return http.post("/api/comments",data);
  }
  createReply(data){
    return http.post("/api/replies",data);
  }
  getAllReply(){
    return http.get("/api/replies");
  }
  getAllComments(){
    return http.get("/api/comments");
  }
  getcommentbypostid(id){
    return http.get(`/api/commentbypostid/${id}`);
  }
  createLike(data){
    return http.post("/api/likepost",data)    
  }
  commentLike(data){
    return http.post("./api/likecomment",data)
  }
  getUsers(){
    return http.get("./api/users");
  }
  createReplyLike(data){
    return http.post("./api/likereply",data);
  }
  getUser(){
    return http.get("./api/user");
  }

  getAllProfileImages(){
    return http.get("./api/profileimg");
  }
  profile(data) {
    console.log ('create DataService');
    return http.post("./api/profiles", data);
  
  }
  updateprofile(id,data) {
    return http.put(`./api/profiles/${id}?${data}`);
  
  }
  about(data) {
    return http.post("./api/abouts",data);
  }
  
  getabout() {
    return http.get("./api/abouts");
  }
  
  updateabout(id,data) {
    return http.put(`./api/abouts/${id}?${data}`);
  
  }
  experiences(data){
  return http.post("./api/experiences",data);
  
  }
  
  getexperiences(){
    return http.get("./api/experiences");
    
    }
    updateexp(id,data) {
      return http.put(`./api/experiences/${id}?${data}`);
    
    }
    getimage()
    {
      return http.get("./api/profileimg");
    
    }
    postimage(data)
    {
      return http.post("./api/profileimg",data);
    
    }
    
  education(data) {
  return http.post("./api/education",data);
  
  }
  
  geteducation() {
    return http.get("./api/education");
    
    }
    updateedu(id,data) {
      return http.put(`./api/education/${id}?${data}`);
    
    }
    
  getProfile(){
    return http.get("./api/profiles",);
  }

}

export default new DataService();