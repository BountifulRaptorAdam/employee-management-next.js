// import { PrismaClient } from '@prisma/client'
// const prisma = new PrismaClient()
 
// import { createJWT, hashPassword } from '@/lib/auth'
// import {NextApiRequest, NextApiResponse} from 'next'




// export default async function AddEmployee(req: NextApiRequest, res: NextApiResponse) {

//     if (req.method === 'POST') {
//         const employee = await prisma.employee.create({
//             data: {
//                 firstName: req.body.firstName,
//                 lastName: req.body.lastName,
//                 email: req.body.email,
//                 password: await hashPassword(req.body.password),
//                 employerId: req.body.employerId,
//             }
//         })        
//     }    

//      // Return a 201 status code and the created employee data
//      res.status(201).json({ message: 'Employee added', employee });
//     } catch (error) {
//       // Handle errors and return appropriate status codes and messages
//       res.status(500).json({ message: 'Error adding employee', error });
//     }
//   } else {
//     res.setHeader('Allow', ['POST']);
//     res.status(405).end(`Method \${req.method} Not Allowed`);
//   }
// }