
import http from "../http-common";
class Unit_rigsDataService {
    getAll() {
      return http.get("/api/Unit_rigs");
    }
    getunit_rigsubcategoryid(id) {
      return http.get(`/api/unit_rigshowbysubcategoryid/${id}`);
    }
    getunit_rigsbyid(id) {
      return http.get(`/api/unit_rigshowbyid/${id}`);
    }
     
  }
  export default new Unit_rigsDataService();