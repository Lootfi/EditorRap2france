// axios
import axios from 'axios'
import router from './router'

const baseURL = ''

const client = axios.create({
  baseURL
  // You can add your headers here
})

client.interceptors.response.use(
  res => res,
  err => {
   		
   		if(err.response.status == 401 || err.response.status == 403){

   			localStorage.clear()
   			router.push('/')
   		}
  }
)

export default client