import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import "./css/Classes.css";
import { useNavigate } from "react-router-dom";
import { addClass, deleteClass, getClasses } from "./HTTP/Api";
import { toast } from "react-toastify";

function Classes() {
  useEffect(() => {
    loadClasses();
  }, []);

  const navigate = useNavigate();
  const [isAddClassModelOpen, setIsAddClassModelOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(true);
  const [classes, setClasses] = useState([]);
  const [className, setClassName] = useState();
  const [boardName, setBoardName] = useState();
  const [streamName, setStreamName] = useState();

  const handleAddClassModel = async () => {
    setIsAddClassModelOpen(true);
    setIsTableOpen(false);
  };

  const handleAddClassCloseModel = async () => {
    setIsAddClassModelOpen(false);
    setIsTableOpen(true);
  };

  const loadClasses = async () => {
    const classes = await getClasses();
    classes == "API FAILURE"
      ? setClasses([])
      : classes == undefined
      ? setClasses([])
      : classes
      ? setClasses(classes.data)
      : setClasses([]);
  };

  const handleAddClass = async () => {
    if (!className) toast.warn("please provide class name");
    if (!boardName) toast.warn("please provide board name");
    if (!streamName) toast.warn("please provide stream name");

    const payload = {
      class_name: className,
      board_name: boardName,
      stream_name: streamName,
    };

    const isClassAdded = await addClass(payload);
    if (isClassAdded.status === true) {
      toast.success("class added successfully");
      loadClasses();
      handleAddClassCloseModel();
    } else {
      toast.error("error while adding class");
    }
  };

  const handleClassDelete = async (classId) => {
    console.log(classId);
    const payload = {
      class_id: classId,
    };

    const isClassDeleted = await deleteClass(payload);
    if (isClassDeleted.status === true) {
      toast.success("class deleted successfully");
      loadClasses();
    } else {
      toast.error("error while deleting class");
    }
  };

  return (
    <>
      <Navbar />

      <div className="card shadow p-3 mb-5 m-2">
        {isTableOpen === true && (
          <>
            <div className="card-body">
              <h3 className="text-center">Classes</h3>
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
                  <button id="search-btn" className="btn" type="button">
                    <i className="bi bi-search text-white"></i>
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
                <div className="col-auto">
                  <button
                    id="search-btn"
                    className="btn text-white"
                    type="button"
                    onClick={() => handleAddClassModel()}
                    // onClick={() => { handleAddChapter() }}
                  >
                    +
                  </button>
                </div>
              </form>

              <div className="table-responsive rounded">
                <table className="table table-bordered ">
                  <thead>
                    <tr>
                      <th className="text-center">#</th>
                      <th className="text-center">Name</th>
                      <th className="text-center">Board</th>
                      <th className="text-center">Stream</th>
                      <th className="text-center">Joined</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {classes.map((Class, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">{Class.class_name}</td>
                            <td className="text-center">{Class.stream_name}</td>
                            <td className="text-center">{Class.board_name}</td>
                            <td className="text-center">
                              {Class.createdAt.slice(0, 10)}
                            </td>
                            <td className="text-center">
                              <button
                                id="user-detail-btn"
                                className="btn text-white"
                                onClick={() => {
                                  navigate("/subject", {
                                    state: {
                                      classId: Class._id,
                                      className: Class.class_name,
                                    },
                                  });
                                }}
                              >
                                Get Subjects
                              </button>
                              <button
                                id="user-detail-btn"
                                className="btn text-white m-1"
                                style={{ backgroundColor: "black" }}
                                onClick={() => {
                                  handleClassDelete(Class._id);
                                }}
                              >
                                <i class="bi bi-trash-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    {classes.length === 0 && (
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
          </>
        )}

        {isAddClassModelOpen === true && (
          <>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <h3 className="text-center">Add Classes</h3>
                  <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                      <div className="mb-3">
                        <input
                          id="login-input"
                          type="text"
                          className="form-control"
                          placeholder="name"
                          // value={mobile}
                          onChange={(e) => setClassName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="login-input"
                          type="text"
                          className="form-control"
                          placeholder="board"
                          // value={mobile}
                          onChange={(e) => setBoardName(e.target.value)}
                        />
                      </div>
                      <div className="mb-3">
                        <input
                          id="login-input"
                          type="text"
                          className="form-control"
                          placeholder="stream"
                          // value={mobile}
                          onChange={(e) => setStreamName(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn text-white bg-dark mb-3"
                        onClick={() => handleAddClass()}
                      >
                        Add
                      </button>
                      <button
                        id="close-btn"
                        className="btn text-white bg-dark mb-3"
                        style={{ marginLeft: "5px" }} // Add the margin style here
                        onClick={() => handleAddClassCloseModel()}
                      >
                        Close
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Classes;
