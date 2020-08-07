// axios
import axios from 'axios'
import router from './router'
import tunnel from 'tunnel'

const baseURL = ''

var tunnelingAgent = tunnel.httpsOverHttp({
  proxy: {
    host: '113.52.144.36',
    port: 9339,
    proxyAuth: 'allwebnet@gmail.com:dtNj0hSa',
  }
});

const client = axios.create({
  baseURL,
  withCredentials: true,
  headers :{
   'Access-Control-Allow-Origin': '*',
  },
  httpAgent: tunnelingAgent
    
  // You can add your headers here
})

client.interceptors.response.use(
  res => res,
  err => {
   		
   		if(err.response.status == 401){

   			localStorage.clear()
   			router.push('/')
   		}
  }
)

export default client