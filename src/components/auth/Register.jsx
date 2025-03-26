import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { saveStudent } from '../../slices/StudentSlice';
function Register() {

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    email: '',
    firstName: '',
    lastName: '',
    dob: '',

  });

  const dispatch = useDispatch()
  const studentState = useSelector(state => state.students)

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('saving')
    // Handle registration logic here (e.g., API call)
    dispatch(saveStudent(formData))
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
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
              placeholder="Username"
              value={formData.username}
              onChange={handleChange}

              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />
          </div>
          <div>
            <label htmlFor="password" className="block text-sm font-medium text-gray-700">Password</label>

            <input
              type='text'
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
            />


          </div>
          <div>
            <label htmlFor="firstName" className="block text-sm font-medium text-gray-700">First Name</label>
            <input
              className="mt-1 p-2 w-full border rounded-md"
              type="text"
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="lastName" className="block text-sm font-medium text-gray-700">Last Name</label>
            <input
              type="text"
              name="lastName"
              placeholder="First Name"
              value={formData.lastName}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>
          <div>
            <label htmlFor="dob" className="block text-sm font-medium text-gray-700">Date Of Birth</label>
            <input
              type="date"
              name="dob"
              placeholder="dob"
              value={formData.dob}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md"
              required
            />
          </div>

          {
            (studentState.status == "pending") ?
              //<Loading /> 
              "":
              <button
                type="submit"
                className="p-3 text-lg text-white bg-blue-600 rounded hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                Register
              </button>
          }
          {
            studentState.status == "failed" && <p className="text-red-500">Error: {studentState.error}</p>
          }
          {
            studentState.status == "success" && <p className="text-green-500">Student registered successfully</p>
          }
        </form>
      </div>
    </div>

  )
}

export default Register
