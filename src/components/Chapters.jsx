import React, { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Navbar from "./Navbar";
import { addChapters, deleteChapters, getChapters } from "./HTTP/Api";
import { toast } from "react-toastify";
import Loader from "./Loader";

function Chapters() {
  useEffect(() => {
    loadChapter();
  }, []);

  const [addChapterModel, setaddChapterModel] = useState(false);
  const [isTableOpen, setIsTableOpen] = useState(true);
  const [chapters, setChapters] = useState([]);
  const [chapterName, setChapterName] = useState();
  const location = useLocation();
  const navigate = useNavigate();
  const { subjectId, subjectName } = location.state;

  const handleCloseModel = async () => {
    setaddChapterModel(false);
    setIsTableOpen(true);
  };

  const handleAddChapterBtn = async () => {
    setaddChapterModel(true);
    setIsTableOpen(false);
  };

  const handleDeleteChapter = async (chapterId) => {
    const payload = { chapter_id: chapterId };
    const isChapterdeleted = await deleteChapters(payload);
    if (isChapterdeleted.status == true) {
      toast.success("chapter deleted successfully");
      loadChapter();
    } else {
      toast.error("something went wrong");
    }
    alert();
  };

  const handleAddChapter = async () => {
    if (!chapterName) toast.error("please provide chapter name");
    const payload = { subject_id: subjectId, chapter_name: chapterName };
    const isChapterAdded = await addChapters(payload);
    if (isChapterAdded.status == true) {
      toast.success("chapter added successfully");
      loadChapter();
      handleCloseModel();
    } else {
      toast.error("something went wrong");
    }
  };

  const loadChapter = async (req, res) => {
    const payload = { subject_id: subjectId };
    const Chapters = await getChapters(payload);
    console.log(Chapters);
    Chapters == "API FAILURE"
      ? setChapters([])
      : Chapters == undefined
      ? setChapters([])
      : Chapters
      ? setChapters(Chapters.data)
      : setChapters([]);
  };

  const [chapterId, setChapterId] = useState("");
  const [questions, setQuestions] = useState([
    {
      question_index: 1,
      question: "",
      options: ["", "", "", ""],
      question_answer: 1,
    },
  ]);

  const handleQuestionChange = (index, field, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index] = {
      ...updatedQuestions[index],
      [field]: value,
    };
    setQuestions(updatedQuestions);
  };

  const handleOptionChange = (index, optionIndex, value) => {
    const updatedQuestions = [...questions];
    updatedQuestions[index].options[optionIndex] = value;
    setQuestions(updatedQuestions);
  };

  const handleAddQuestion = () => {
    const newIndex = questions.length + 1;
    setQuestions((prevState) => [
      ...prevState,
      {
        question_index: newIndex,
        question: "",
        options: ["", "", "", ""],
        question_answer: 1,
      },
    ]);
  };

  const handleRemoveQuestion = (index) => {
    setQuestions((prevState) => prevState.filter((_, i) => i !== index));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    // Prepare the data object to send to the API
    const data = {
      chapter_id: chapterId,
      test_data: questions.map(
        ({ question_index, question, options, question_answer }) => ({
          question_index,
          question,
          options,
          question_answer,
        })
      ),
    };

    // Send the data to the API (e.g., using fetch or axios)
    console.log(data);
    // Replace `console.log(data)` with your API call
  };

  return (
    <>
      <Navbar />
      <div className="card shadow p-3 mb-5 m-2">
        {isTableOpen === true && (
          <>
            <div className="card-body">
              <h3 className="text-center">Chapters of {subjectName}</h3>
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
                    onClick={() => handleAddChapterBtn()}
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
                      <th className="text-center">Chapter Name</th>
                      <th className="text-center">Joined</th>
                      <th className="text-center">Action</th>
                    </tr>
                  </thead>
                  <tbody>
                    {chapters.map((chapter, i) => {
                      return (
                        <>
                          <tr key={i}>
                            <td className="text-center">{i + 1}</td>
                            <td className="text-center">
                              {chapter.chapter_name}
                            </td>
                            <td className="text-center">
                              {chapter.createdAt.slice(0, 10)}
                            </td>
                            <td className="text-center">
                              <button
                                id="user-detail-btn"
                                className="btn text-white m-1"
                                style={{ backgroundColor: "black" }}
                                onClick={() => {
                                  handleDeleteChapter(chapter._id);
                                }}
                              >
                                <i class="bi bi-trash-fill"></i>
                              </button>
                              <button
                                id="user-detail-btn"
                                className="btn text-white"
                              >
                                Set Exam
                              </button>
                            </td>
                          </tr>
                        </>
                      );
                    })}
                    {chapters.length === 0 && (
                      <tr>
                        <td className="text-center text-danger" colSpan="12">
                          <Loader />
                        </td>
                      </tr>
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </>
        )}

        {addChapterModel === true && (
          <>
            <div className="container-fluid">
              <div className="row justify-content-center">
                <div className="col-md-4">
                  <h3 className="text-center">Add Chapter</h3>
                  <div className="card shadow p-3 mb-5 bg-white rounded">
                    <div className="card-body">
                      <div className="mb-3">
                        <input
                          id="login-input"
                          type="text"
                          className="form-control"
                          placeholder="chapter name"
                          onChange={(e) => setChapterName(e.target.value)}
                        />
                      </div>
                      <button
                        className="btn text-white bg-dark mb-3"
                        onClick={() => handleAddChapter()}
                      >
                        Add Chapter
                      </button>
                      <button
                        id="close-btn"
                        className="btn text-white bg-dark mb-3"
                        style={{ marginLeft: "5px" }} // Add the margin style here
                        onClick={() => handleCloseModel()}
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
      );
    </>
  );
}

export default Chapters;
