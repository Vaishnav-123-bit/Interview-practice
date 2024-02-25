import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Home = () => {
    const users=useSelector((state)=>state.users)
    console.log(users)
  return (
    <div>
        <h2>
            JSON
        </h2>
        <Link to={"/create"}><button>Create</button></Link>
        
        <table>
            <thead>
                <tr>
                    <th>ID</th>
                    <th>Name</th>
                    <th>email</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                {users.map((item,idx)=>
                <tr key={idx}>
                    <tr>{item.id}</tr>
                    <td>{item.name}</td>
                    <td>{item.email}</td>
                    <td><Link to={`/update/${item.id}`}>Update</Link>
                    <button>Delete</button></td>
                </tr>)}
            </tbody>
        </table>
    </div>
  )
}

export default Home