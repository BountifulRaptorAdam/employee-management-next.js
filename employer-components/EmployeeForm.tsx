// import AddEmployee from "../pages/api/AddEmployee"
// import { useState } from "react"
// import Button from "@/components/Button"
// import Input from "@/components/Input"
 
// const initial = {firstName: '', lastName: '', email: '', password: ''}


// export default function EmployeeForm() {
//     return (
//         <>
//         <div>

//         </div>
//         </>
    
//     )
// }


export default function EmployeeForm() {
    return (
        <div className="table-fixed text-lg">
            <thead>
    <tr>
      <th>Song</th>
      <th>Artist</th>
      <th>Year</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td>The Sliding Mr. Bones (Next Stop, Pottersville)</td>
      <td>Malcolm Lockyer</td>
      <td>1961</td>
    </tr>
    <tr>
      <td>Witchy Woman</td>
      <td>The Eagles</td>
      <td>1972</td>
    </tr>
    <tr>
      <td>Shining Star</td>
      <td>Earth, Wind, and Fire</td>
      <td>1975</td>
    </tr>
  </tbody>
        </div>
    
    )
}