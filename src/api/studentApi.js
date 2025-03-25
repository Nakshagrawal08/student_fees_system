import axiosConfig from '../config/axios'

const getAllStudents = async ()=>{
    try{
        const response = await axiosConfig.get('/students')
        if (response.status==200){
            return response.data
        }
    }catch(error){
        console.log(error)
        return new Error(error)
    }
}

const createStudent = async(req,res)=>{
  try { const response = await axiosConfig.post('/students',student)
    if(response.status==201){
        return response.data
    }}catch(err){

    }
}
const login = async ({username , password })=>{
    try {const response = await axiosConfig.post('/students/login',
    {username , password})
    if(response.status==200)
    return true
   
}catch(err){
console.log(err)
return false
}}
export default {login , getAllStudents ,createStudent}