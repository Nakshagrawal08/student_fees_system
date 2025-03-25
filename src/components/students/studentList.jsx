import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchStudents } from '../../slices/StudentSlice'

function studentList() {
    const dispatch = useDispatch()
    const studentState = useSelector (state=>state.students)
    useEffect (()=>{
        dispatch(fetchStudents())
    },[])
    if ( studentState.state == 'idle'){
        return
    }
    if ( studentState.state =='pendong'){
        return "loading"
    }
    if ( studentState.state == 'failed'){
        return "failed"
    }
  

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Student List</h2>
      
        <table className="min-w-full leading-normal">
          <thead>
            <tr>
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Name
              </th>
              
              <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-700 uppercase tracking-wider">
                Email
              </th>
            </tr>
          </thead>
          <tbody>
            {studentState?.students.map((student) => (
             
              <tr key={student.id}>
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <div className="flex items-center">
                    <div className="ml-3">
                      <p className="text-gray-900 whitespace-no-wrap">{student.username}</p>
                    </div>
                  </div>
                </td>
               
                <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                  <a href={`mailto:${student.email}`} className="text-blue-600 hover:text-blue-900">
                    {student.email}
                  </a>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      
    </div>
  )
}

export default studentList
