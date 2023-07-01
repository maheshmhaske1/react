import React, { useEffect, useState } from "react";
import Navbar from "./Navbar";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { addSubject, deleteSubject, getSubjects } from "./HTTP/Api";
import { toast } from "react-toastify";

function Subjects() {
  useEffect(() => {
    loadSubjectsUnderClass();
  }, []);

  const [isAddClassModelOpen, setIsAddClassModelOpen] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(true);
  const [subjects, setSubjects] = useState([]);
  const [subjectName, setSubjectName] = useState("");
  const navigate = useNavigate();
  const location = useLocation();
  const { classId, className } = location.state;

  const loadSubjectsUnderClass = async () => {
    const payload = { class_id: classId };
    const Subjects = await getSubjects(payload);
    console.log(Subjects);
    Subjects == "API FAILURE"
      ? setSubjects([])
      : Subjects == undefined
      ? setSubjects([])
      : Subjects
      ? setSubjects(Subjects.data)
      : setSubjects([]);
  };

  const handleCloseAddSubjectModel = async () => {
    setIsAddClassModelOpen(false);
    setIsTableOpen(true);
  };

  const handleAddSubjectModel = async () => {
    setIsAddClassModelOpen(true);
    setIsTableOpen(false);
  };

  const handleAddSubject = async () => {
    if (!subjectName) toast.error("please provide subject name");

    const payload = { class_id: classId, subject_name: subjectName };
    const isSubjectAdded = await addSubject(payload);

    if (isSubjectAdded.status == true) {
      toast.success("subject added successfully");
      loadSubjectsUnderClass();
      handleCloseAddSubjectModel();
      setSubjectName("");
    } else {
      toast.error("something went wrong");
    }
  };

  const handleDeleteSubject = async (subjectId) => {
    const payload = { subject_id: subjectId };
    const isSubjectDeleted = await deleteSubject(payload);
    if (isSubjectDeleted.status == true) {
      toast.success("subject deleted successfully");
      loadSubjectsUnderClass();
    } else {
      toast.error("something went wrong");
    }
  };

  return (
    <>
      <Navbar />

      <div className="card shadow p-3 mb-5 m-2">
        {isTableOpen === true && (
          <>
            <div className="card-body">
              <h3 className="text-center">Subjects of {className}</h3>
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
                    onClick={() => handleAddSubjectModel()}
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
                      <th className="text-center">Subject Name</th>
                      <th className="text-center">Created</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {subjects.map((subject, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">
                              {subject.subject_name}
                            </td>
                            <td className="text-center">
                              {subject.createdAt.slice(0, 10)}
                            </td>
                            <td className="text-center">
                              <button
                                id="user-detail-btn"
                                className="btn text-white"
                                onClick={() => {
                                  navigate("/chapter", {
                                    state: {
                                      subjectId: subject._id,
                                      subjectName: subject.subject_name,
                                    },
                                  });
                                }}
                              >
                                Get Chapters
                              </button>
                              <button
                                id="user-detail-btn"
                                className="btn text-white m-1"
                                style={{ backgroundColor: "black" }}
                                onClick={() => {
                                  handleDeleteSubject(subject._id);
                                }}
                              >
                                <i class="bi bi-trash-fill"></i>
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    {subjects.length === 0 && (
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
                  <h3 className="text-center">Add Subject</h3>
                  <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                      <div className="mb-3">
                        <input
                          id="login-input"
                          type="text"
                          className="form-control"
                          placeholder="subject"
                          onChange={(e) => setSubjectName(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn text-white bg-dark mb-3"
                        onClick={() => handleAddSubject()}
                      >
                        Add Subject
                      </button>
                      <button
                        id="close-btn"
                        className="btn text-white bg-dark mb-3"
                        style={{ marginLeft: "5px" }} // Add the margin style here
                        onClick={() => handleCloseAddSubjectModel()}
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

export default Subjects;
