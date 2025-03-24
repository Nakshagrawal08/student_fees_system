import { useState } from "react";
import { useNavigate } from "react-router";
import studentAPi from '../../api/studentApi'
function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  // to navigate to another page 
  const navigator = useNavigate()
  const goToDashboard= ()=>{
  studentAPi.login({username , password}).then((isLoggedin)=>{
    if(isLoggedin){
      console.log('done')
      alert('success')
      navigator("/dashboard")
    }
    else{
console.log('invalic cridentials')
console.log(username,password)
alert('failed')
    }
  })
   
  }
  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   // Handle login logic here (e.g., API call)
  //   console.log('Username:', username, 'Password:', password, 'Remember Me:', rememberMe);
  // };

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center">
      <div className="bg-white p-8 rounded-lg shadow-2xl max-w-md w-full">
        <h1 className="text-3xl font-bold text-indigo-700 mb-6 text-center">Login</h1>
       
          <div>
            <label htmlFor="username" className="block text-sm font-medium text-gray-700">Username</label>
            <input
              type="text"
              id="username"
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>
            <div className="relative">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="mt-1 p-2 w-full border rounded-md"
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute inset-y-0 right-0 pr-3 flex items-center text-sm leading-5"
              >
                {showPassword ? '👁️' : '👁️‍🗨️'}
              </button>
            </div>
          </div>

          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <input
                id="remember-me"
                name="remember-me"
                type="checkbox"
                className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
              />
              <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-900">
                Remember me
              </label>
            </div>

            <div className="text-sm">
              <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
                Forgot password?
              </a>
            </div>
          </div>

          <div>
            <button
            onClick={goToDashboard}
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 rounded-md transition duration-300 ease-in-out"
            >
              Login
            </button>
          </div>
          <div className="text-center mt-4">
            <a href="#" className="font-medium text-indigo-600 hover:text-indigo-500">
              Sign up
            </a>
          </div>
        
      </div>
    </div>
  );
}

export default Login
