import http from "./service";

class DataService {
  getAll() {
    return http.get("/all-jobs");
  }
}

export default new DataService();
