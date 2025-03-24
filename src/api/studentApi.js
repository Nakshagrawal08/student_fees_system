import axiosConfig from '../config/axios'

const getAllStudents = async ()=>{
    try{
        const response = await axiosConfig.get('/students')
        if ( response.status==200){
            return response
        }
    }catch(error){
        
    }
}


const login = async ({username , password })=>{
    try {const response = await axiosConfig.post('/students/login',
    {username , password})
    if(response.status==200)return true
    else return false
}catch(err){
console.log(err)
return false
}}
export default {login , getAllStudents}