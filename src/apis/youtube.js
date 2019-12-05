import axios from 'axios';

const KEY = "AIzaSyCNwnxka0dFn2VVQxQOXZv1i1Y_tdyiUCU";

export default axios.create({
   baseURL: 'https://www.googleapis.com/youtube/v3',
   params: {
      part: 'snippet',
      maxResults: 5,
      key: KEY
   }
});
