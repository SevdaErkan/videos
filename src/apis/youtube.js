import axios from "axios"
const KEY ="AIzaSyAD2OnTMICAisrxy9wVwT0nhPFHboRouIs";

export default axios.create({
  baseURL:"https://www.googleapis.com/youtube/v3",
  params:{
    part:"snippet",
    maxResults:5,
    key:KEY
  }
})