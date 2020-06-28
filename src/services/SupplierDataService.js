import http from "../http-common";

class SupplierDataService {
  getAll() {
    return http.get("/api/supplier");
  }
  getsuppliersubcategoryid(id) {
    return http.get(`/api/suppliershowbysubcategoryid/${id}`);
  }
  getsupplierbyid(id) {
    return http.get(`/api/suppliershowbyid/${id}`);
  }
   
}
export default new SupplierDataService();