import http from "../http-common";

class companyservice {
  getAll() {
    return http.get("/api/companyindex");
  }

  getcompanys(id) {
    return http.get(`/api/companybyid/${id}`);
  }
  updatecompany(id,data) {
    return http.put(`/api/company/${id}?${data}`); 
}
   Deletecompany(id) {
    return http.delete(`/api/company/${id}`); 
}
}

export default new companyservice();