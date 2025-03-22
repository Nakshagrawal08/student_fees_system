import axiosConfig from '../config/axios'
const login = async ({username , password })=>{
return await axiosConfig.post('/students/login',
    {username , password})
    if(Response.status==200)return true
    else return false
}
export default {login}