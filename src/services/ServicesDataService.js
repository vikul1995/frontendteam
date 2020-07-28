import http from "../http-common";

class ServicesDataService {
  getAll() {
    return http.get("/api/services");
  }

  getservice() {
    return http.get(`/api/service`);
  }
  getsubcategory(id) {
    return http.get(`/api/subcategories/${id}`);
  }
  get(id) {
    return http.get(`/api/company/${id}`);
  }

  
  getservicebyid(id) {
    return http.get(`/api/serviceshowbyid/${id}`);
  }
  getServicesubcategoryid(id) {
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
 
  getasc() {
    return http.get("/api/serviceasc");
  }
  getdesc() {
    return http.get("/api/servicedesc");
  }

  getcompanyasc() {
    return http.get("/api/Scompanyasc");
  }
  getcompanydesc() {
    return http.get("/api/Scompanydesc");
  }
  getupdate(id,data) {
    return http.put(`/api/service/${id}?${data}`);
  }
  delete(id) {
    return http.delete(`/api/service/${id}`);
  }
  deleteImg(id) {
    return http.delete(`/api/serviceImg/${id}`);
  }
  postImg(data) {
    return http.post(`/api/serviceImg`,data);
  }
  deleteImgById(id) {
    return http.delete(`/api/serviceImgById/${id}`);
  }
  postBrochure(data) {
    return http.post(`/api/SinsertBrochure`,data);
  }
  deleteBrochure(id) {
    return http.delete(`/api/SdeleteBrochure/${id}`);
  }
}

export default new ServicesDataService();