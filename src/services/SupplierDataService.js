import http from "../http-common";

class SupplierDataService {
  getAll() {
    return http.get("/api/suppliers");
  }
  getSuppliersubcategoryid(id) {
    return http.get(`/api/suppliershowbysubcategoryid/${id}`);
  }
  getsupplierbyid(id) {
    return http.get(`/api/suppliershowbyid/${id}`);
  }
  getasc() {
    return http.get("/api/supplierasc");
  }
  getdesc() {
    return http.get("/api/supplierdesc");
  }

  getcompanyasc() {
    return http.get("/api/Sucompanyasc");
  }
  getcompanydesc() {
    return http.get("/api/Sucompanydesc");
  }
  getupdate(id,data) {
    return http.put(`/api/supplier/${id}?${data}`);
  }
  delete(id) {
    return http.delete(`/api/supplier/${id}`);
  }
  deleteimg(id) {
    return http.delete(`/api/supplierImg/${id}`);
 
  }
  postImg(data) {
    return http.post(`/api/supplierImg`,data);
 
  }
  deleteImgById(id) {
    return http.delete(`/api/supplierImgById/${id}`);
  }
  postBrochure(data) {
    return http.post(`/api/SuinsertBrochure`,data);
  }
  deleteBrochure(id) {
    return http.delete(`/api/SudeleteBrochure/${id}`);
  }
}
export default new SupplierDataService();