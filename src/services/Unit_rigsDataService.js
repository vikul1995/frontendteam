
import http from "../http-common";
class Unit_rigsDataService {
    getAll() {
      return http.get("/api/unit_rigs");
    }
    getUnit_rigsubcategoryid(id) {
      return http.get(`/api/unit_rigshowbysubcategoryid/${id}`);
    }
    getunit_rigsbyid(id) {
      return http.get(`/api/unit_rigshowbyid/${id}`);
    }
    getasc() {
      return http.get("/api/Unit_rigsasc");
    }
    getdesc() {
      return http.get("/api/Unit_rigsdesc");
    }
  
    getcompanyasc() {
      return http.get("/api/Ucompanyasc");
    }
    getcompanydesc() {
      return http.get("/api/Ucompanydesc");
    }
    getupdate(id,data) {
      return http.put(`/api/unit_rig/${id}?${data}`);
    }
    deleteimg(id) {
      return http.delete(`/api/unit_rigImg/${id}`);
    }
    deleteImgById(id) {
      return http.delete(`/api/unit_rigsImgById/${id}`);
    }
    postImg(data) {
      return http.post(`/api/unit_rigImg`,data);
   
    }
    postBrochure(data) {
      return http.post(`/api/UinsertBrochure`,data);
    }
    deleteBrochure(id) {
      return http.delete(`/api/UdeleteBrochure/${id}`);
    }
  }

  export default new Unit_rigsDataService();