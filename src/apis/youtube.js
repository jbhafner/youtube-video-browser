import axios from 'axios';

const KEY = "AIzaSyCMHKx9YLmD_y0OUlBORTNbS_RIDjyfNiw";

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});