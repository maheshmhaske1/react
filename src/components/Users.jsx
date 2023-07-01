import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./css/user.css";
import { getUser } from "./HTTP/Api";
import Home from "./Home";

function Users() {
  useEffect(() => {
    loadUsers();
  }, []);

  const [users, setUsers] = useState([]);

  const loadUsers = async () => {
    const users = await getUser();
    users == "API FAILURE"
      ? setUsers([])
      : users == undefined
      ? setUsers([])
      : users
      ? setUsers(users.data)
      : setUsers([]);
  };

  return (
    <>

      <Navbar />

      <div className="card shadow p-3 mb-5 m-2">
        <div className="card-body">
          <h3 className="text-center">Users</h3>

          <form className="row g-3 mb-3">
            <div className="col-auto">
              <input
                id="input-search"
                type="text"
                className="form-control"
                placeholder="Search"
              />
            </div>
            <div className="col-auto">
              <button id="search-btn" className="btn">
                <b>
                  <i className="bi bi-search text-white"></i>
                </b>
              </button>
            </div>
            <div className="col-auto">
              <div className="dropdown">
                <a
                  id="btn-filter"
                  className="btn btn-secondary dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  <i className="bi bi-funnel-fill"></i>
                  Filter
                </a>
                <ul className="dropdown-menu shadow">
                  <li>
                    <a className="dropdown-item" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a className="dropdown-item" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </form>

          <div className="table-responsive rounded">
            <table className="table table-bordered ">
              <thead>
                <tr>
                  <th className="text-center">#</th>
                  <th className="text-center">Photo</th>
                  <th className="text-center">Name</th>
                  <th className="text-center">Email</th>
                  <th className="text-center">Mobile</th>
                  <th className="text-center">Class</th>
                  <th className="text-center">Board</th>
                  <th className="text-center">Joined Date</th>
                  <th className="text-center">Details</th>
                </tr>
              </thead>
              <tbody>
                {users.map((user, i) => {
                  return (
                    <>
                      <tr key={i}>
                        <td>{i + 1}</td>
                        <td className="text-center">
                          <img
                            style={{
                              height: "40px",
                              width: "40px",
                              borderRadius: "100%",
                            }}
                            src={`http://35.78.201.111:4001/tutopia/user-profiles/${user.displayPhoto}`}
                            alt=""
                          />
                          {/* <i className="bi bi-person-circle"></i> */}
                        </td>
                        <td className="text-center">{user.name}</td>
                        <td className="text-center">{user.email}</td>
                        <td className="text-center">{user.mobile}</td>
                        <td className="text-center">{user.className}</td>
                        <td className="text-center">{user.board}</td>
                        <td className="text-center">
                          {user.createdAt.slice(0, 10)}
                        </td>
                        <td className="text-center">
                          <button
                            id="user-detail-btn"
                            className="btn text-white"
                            onClick={() => alert(user.name)}
                          >
                            {/* onClick={() => navigate("/users/detail")}> */}
                            Details
                          </button>
                        </td>
                      </tr>
                    </>
                  );
                })}
                {users.length === 0 && (
                  <tr>
                    <td className="text-center text-danger" colSpan="12">
                      <h6>No data found</h6>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </>
  );
}

export default Users;
