import http from "../http-common";

class EquipmentDataService {
  getAll() {
    return http.get("/api/equipment");
  }
  getequipmentsubcategoryid(id) {
    return http.get(`/api/equipmentshowbysubcategoryid/${id}`);
  }
  getequipmentbyid(id) {
    return http.get(`/api/equipmentshowbyid/${id}`);
  }
   
}
export default new EquipmentDataService();