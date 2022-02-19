import http from "../http-common";
class CvService {
  getAll() {
    return http.get("http://localhost:8085/experiences");
  }
  get(id) {
    return http.get("http://localhost:8085/experiences/"+id);
  }
  create(data) {
    return http.post("http://localhost:8085/experiences/add", data);
  }
  update(id, data) {
    return http.put("http://localhost:8085/experiences/update/"+id, data);
  }
  delete(id) {
    var url="http://localhost:8085/experiences/delete/"+id;
    console.log(url);
    return http.delete("http://localhost:8085/experiences/delete/"+id);
  }
  getAllCompetences(){
    return http.get("http://localhost:8083/competences");
  }
  getCompetence(id){
    return http.get("http://localhost:8083/competences/"+id);
  }
  addCompetence(data){
    return http.post("http://localhost:8083/competences/add", data);
  }
  updateCompetence(id, data) {
    return http.put("http://localhost:8083/competences/update/"+id, data);
  }
  deleteCompetence(id) {
    var url="http://localhost:8083/competences/delete/"+id;
    console.log(url);
    return http.delete("http://localhost:8083/competences/delete/"+id);
  }
  getAllProjets(){
    return http.get("http://localhost:8084/projets");
  }
  getProjet(id){
    return http.get("http://localhost:8084/projets/"+id);
  }
  addProjet(data){
    return http.post("http://localhost:8084/projets/add", data);
  }
  updateProjet(id, data) {
    return http.put("http://localhost:8084/projets/update/"+id, data);
  }
  deleteProjet(id) {
    var url="http://localhost:8084/projets/delete/"+id;
    console.log(url);
    return http.delete("http://localhost:8084/projets/delete/"+id);
  }
  getAllFormations(){
    return http.get("http://localhost:8082/formations");
  }
  getFormation(id){
    return http.get("http://localhost:8082/formations/"+id);
  }
  addFormation(data){
    return http.post("http://localhost:8082/formations/add", data);
  }
  updateFormation(id, data) {
    return http.put("http://localhost:8082/formations/update/"+id, data);
  }
  deleteFormation(id) {
    var url="http://localhost:8082/formations/delete/"+id;
    console.log(url);
    return http.delete("http://localhost:8082/formations/delete/"+id);
  }
  getAllCandidate(){
    return http.get("http://localhost:8087/candidate");
  }
  getCandidate(id){
    return http.get("http://localhost:8087/candidate/"+id);
  }
  addCandidate(data){
    return http.post("http://localhost:8087/candidate/add", data);
  }
  updateCandidate(id, data) {
    return http.put("http://localhost:8087/candidate/update/"+id, data);
  }
  deleteCandidate(id) {
    var url="http://localhost:8087/candidate/delete/"+id;
    console.log(url);
    return http.delete("http://localhost:8087/candidate/delete/"+id);
  }
  
  
}
export default new CvService();