import axios from "axios";
export default axios.create({
  URL_EXPERIENCE: "http://localhost:8085/experiences",
  headers: {
    "Content-type": "application/json"
  }
});