import http from "../http-common";

class EquipmentDataService {
  getAll() {
    return http.get("/api/equipments");
  }
  getequipmentsubcategoryid(id) {
    return http.get(`/api/equipmentshowbysubcategoryid/${id}`);
  }
  getequipmentbyid(id) {
    return http.get(`/api/equipmentshowbyid/${id}`);
  }
  getuser() {
    return http.get("/api/user");
  }
  getasc() {
    return http.get("/api/equipmentasc");
  }
  getdesc() {
    return http.get("/api/equipmentdesc");
  }

  getcompanyasc() {
    return http.get("/api/Ecompanyasc");
  }
  getcompanydesc() {
    return http.get("/api/Ecompanydesc");
  }

  getsubcategoryasc(id) {
    return http.get(`/api/subcategoryasc/${id}`);
  }
  getsubcategorydesc(id) {
    return http.get(`/api/subcategorydesc/${id}`);
  }
 subcategorysearch(data,id) {
    return http.post(`/api/subcategorysearch/${id}`,data);
  }
  getupdate(id,data) {
    return http.put(`/api/equipment/${id}?${data}`);
  }
  delete(id) {
    return http.delete(`/api/equipment/${id}`);
  }
  deleteImg(id) {
    return http.delete(`/api/equipmentImg/${id}`);
  }
  postImg(data) {
    return http.post("/api/equipmentImg",data);
  }
  deleteImgById(id) {
    return http.delete(`/api/equipmentImgById/${id}`);
  }
  admin() {
    return http.get("/api/friend_list");
  }
  postBrochure(data) {
    return http.post(`/api/EinsertBrochure`,data);
  }
  deleteBrochure(id) {
    return http.delete(`/api/EdeleteBrochure/${id}`);
  }
}
export default new EquipmentDataService();