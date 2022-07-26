import React,{useEffect} from 'react'
import { useSelector } from 'react-redux'
import { Link, useHistory } from 'react-router-dom'
import HomeHelper from '../Components/HomeHelper'

const Home = () => {
    const store = useSelector((store) => store)
    const history = useHistory()

    return (
        <div>
            {store.student.isAuthenticated ? <>
                <HomeHelper />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12 mt-5">
                            <div className="row">
                                <div className="col-md-4">
                                    <div className="card" style={{ width: "18rem" }}>
                                        <img className="card-img-top" src={store.student.student.student.avatar} alt="Card image cap" />
                                        <div className="card-body">
                                        <h6 className="card-title" style={{color: "red"}}>Name: {store.student.student.student.name.toUpperCase()}</h6>
                                            <h6 className="card-title" style={{color: "blue"}}>User ID: {store.student.student.student.registrationNumber}</h6>
                                            <button type="submit" style={{textAlign: "center"}} className="btn btn-warning"><Link to='/faculty/updateProfile' style={{color:"#111", textAlign: "center"}}>Update Profile</Link></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-md-8">
                                    <table className="table ">
                                        <tbody>
                                            <tr>
                                                <th>Name</th>
                                                <td>{store.student.student.student.name}</td>
                                            </tr>
                                            <tr>
                                                <th>Email</th>
                                                <td>{store.student.student.student.email}</td>
                                            </tr>
                                            <tr>
                                                <th>Registration Number</th>
                                                <td>{store.student.student.student.registrationNumber}</td>
                                            </tr>
                                            <tr>
                                                <th>Date Of Birth</th>
                                                <td>{store.student.student.student.dob}</td>
                                            </tr>
                                            <tr>
                                                <th>Year</th>
                                                <td>{store.student.student.student.year}</td>
                                            </tr>
                                            <tr>
                                                <th>Department</th>
                                                <td>{store.student.student.student.department}</td>
                                            </tr>
                                            <tr>
                                                <th>Section</th>
                                                <td>{store.student.student.student.section}</td>
                                            </tr>
                                            <tr>
                                                <th>Batch</th>
                                                <td>{store.student.student.student.batch}</td>
                                            </tr>
                                            <tr>
                                                <th>Gender</th>
                                                <td>{store.student.student.student.gender ? store.student.student.student.gender : 
                                                
                                                   "NA"
                                                }</td>
                                            </tr>
                                            <tr>
                                                <th>Contact Number</th>
                                                <td>{store.student.student.student.studentMobileNumber ?
                                                    store.student.student.student.studentMobileNumber : "NA"}</td>
                                            </tr>
                                            <tr>
                                                <th>Aadhar Card</th>
                                                <td>{store.student.student.student.aadharCard ? store.student.student.student.aadharCard : "NA"} </td>
                                            </tr>
                                            <tr>
                                                <th>Father Name</th>
                                                <td>{store.student.student.student.fatherName ? store.student.student.student.fatherName : "NA" }</td>
                                            </tr>
                                            <tr>
                                                <th>Father Contact Number</th>
                                                <td>{store.student.student.student.fatherMobileNumber ? store.student.student.student.fatherMobileNumber : "NA"}</td>
                                            </tr>
                                        </tbody>
                                    </table>

                                </div>
                            </div>
                        </div>
                        

                    </div>
                </div>

            </> : (history.push('/'))}
        </div>

    )
}

export default Home
