import axios from "../Utils/axios";

export function getAllMenu() {
  return axios.get(`/menu`);
}
