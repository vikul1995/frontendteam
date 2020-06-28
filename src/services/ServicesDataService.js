import http from "../http-common";

class ServicesDataService {
  getAll() {
    return http.get("/api/company");
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
 
 
}

export default new ServicesDataService();