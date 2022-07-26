import React from 'react'
import { useSelector } from 'react-redux';
import { Link, useHistory } from 'react-router-dom'
import AdminHomeHelper from '../../Components/AdminHomeHelper'

const AdminHome = () => {
    const store = useSelector((store) => store)

    const history = useHistory()
    return (
        <div>

            {store.admin.isAuthenticated ? <>
                <AdminHomeHelper />
                <div className="container">
                    <div className="row mt-5">
                        {/* <div className="col-2">
                        </div> */}
                        <div className="col-12">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.admin.admin.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                            <h6 className="card-title" style={{color: "red"}}>Name: {store.admin.admin.name.toUpperCase()}</h6>
                                            <h6 className="card-title" style={{color: "blue"}}>User ID: {store.admin.admin.registrationNumber}</h6>
                                            {/* <button type="submit" style={{textAlign: "center"}} className="btn btn-warning"><Link to='/admin/updateProfile' style={{color:"#111", textAlign: "center"}}>Update Profile</Link></button> */}
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <table className="table border">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{store.admin.admin.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{store.admin.admin.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Registration Number</th>
                                                <td>{store.admin.admin.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <th>Joining Year</th>
                                                <td>{store.admin.admin.joiningYear}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>{store.admin.admin.department}</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td>{store.admin.admin.contactNumber ?
                                                    store.admin.admin.contactNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        {/* <div className="col-2">
                        </div> */}
                    </div>
                </div>
                </> : (history.push('/'))}
                
        </div>
    )
}

export default AdminHome
