import axios from "axios";

export const formspree = axios.create({
  baseURL: "https://formspree.io/",
});
