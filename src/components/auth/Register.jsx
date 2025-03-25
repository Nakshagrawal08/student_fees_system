import {useState} from 'react'

function Register() {
  
    const [formData, setFormData] = useState({
      username : "",
      email : "",
      password : "",
      confirmPassword:"",
     
    });
   
    
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Handle registration logic here (e.g., API call)
      console.log('Username:', username, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    };
    const handleChange = (e) => {
      const {name , value}=e.target;
      setFormData({...formData , name: value});
      // Handle registration logic here (e.g., API call)
      // console.log('Username:', username, 'Email:', email, 'Password:', password, 'Confirm Password:', confirmPassword);
    };
    return (
      <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
        <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
          <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Register</h1>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
              <input
                type="text"
                id='username'
                name="username"
                value={formData.username}
              
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="mt-1 p-2 w-full border rounded-md"
              />
            </div>
            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
              <div className="relative">
                <input
                  type='text' 
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <button
                  type="button"
                  onClick={''}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                 
                </button>
              </div>
            </div>
            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700">Confirm Password</label>
              <div className="relative">
                <input
                  type='text'
                  id="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="mt-1 p-2 w-full border rounded-md"
                />
                <button
                  type="button"
                  onClick={''}
                  className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
                >
                
                </button>
              </div>
            </div>
            <div>
              <button
                type="submit"
                className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out"
              >
                Register
              </button>
            </div>
            <div className="text-center mt-4">
              <a href="/login" className="font-medium text-indigo-600 hover:text-indigo-500">
                Already have an account? Login
              </a>
            </div>
          </form>
        </div>
      </div>
    
  )
}

export default Register
