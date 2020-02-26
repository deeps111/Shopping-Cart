
import axios from 'axios'

const ApiService = () => {
   return (axios.get("https://api.myjson.com/bins/qzuzi").then(response => {
       const users = response.data
        return users;
}));
  
}



export default ApiService;


