import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'


import FacultyHomeHelper from '../Components/FacultyHomeHelper'


const FacultyInterface = () => {
    const history = useHistory()
    const store = useSelector((store) => store)
    return (
        <>
            {store.faculty.isAuthenticated ? <>
                <FacultyHomeHelper />
                <div className="container">
                    <div className="row mt-5">
                        <div className="col-md-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.faculty.faculty.faculty.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h6 className="card-title" style={{color: "red"}}>Name: {store.faculty.faculty.faculty.name.toUpperCase()}</h6>
                                            <h6 className="card-title" style={{color: "blue"}}>User ID: {store.faculty.faculty.faculty.registrationNumber}</h6>
                                            <button type="submit" style={{textAlign: "center"}} className="btn btn-warning"><Link to='/faculty/updateProfile' style={{color:"#111", textAlign: "center"}}>Update Profile</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{store.faculty.faculty.faculty.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{store.faculty.faculty.faculty.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Registration Number</th>
                                                <td>{store.faculty.faculty.faculty.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <th>Date Of Birth</th>
                                                <td>{store.faculty.faculty.faculty.dob}</td>
                                            </tr>
                                            <tr>
                                                <th>Designation</th>
                                                <td>{store.faculty.faculty.faculty.designation}</td>
                                            </tr>
                                            <tr>
                                                <th>Joining Year</th>
                                                <td>{store.faculty.faculty.faculty.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>{store.faculty.faculty.faculty.department}</td>
                                            </tr>
                                            <tr>
                                                <th>Gender</th>
                                                <td>{store.faculty.faculty.faculty.gender ? store.faculty.faculty.faculty.gender :

                                                    "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td>{store.faculty.faculty.faculty.facultyMobileNumber ?
                                                    store.faculty.faculty.faculty.facultyMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </> : (history.push('/'))}
           
        </>


    )
}

export default FacultyInterface
