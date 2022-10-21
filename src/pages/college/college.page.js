import "./college.page.css";
import { Navbar } from "../../components/navbar/navbar";
import { SearchSideBar } from "../../components/search-side-bar/searchSideBar";
import { CourseCard } from "../../components/course-card/courseCard";

// icons
import { MdOutlineNavigateNext } from "react-icons/md";
import { BsArrowDown } from "react-icons/bs";
export function CollegePage() {
    document.title = "Colleges | Demi";
    return (
        <>
            <Navbar />
            <div className="container">
                <div className="sideBar-content-container">
                    <SearchSideBar />
                    <div className="content">
                        <div className="college-page-content">
                            <div className="college-headings-selects-titles">
                                <h1 className="college-heading">
                                    list of top colleges in india based on 2022
                                    ranking
                                </h1>
                                <div className="college-selects">
                                    <div className="college-select">
                                        <div className="select-title">
                                            select stream
                                        </div>
                                        <div className="select-info">
                                            <div className="select-options">
                                                <a className="select-option">
                                                    education (8)
                                                </a>
                                                <a className="select-option">
                                                    engineering (13)
                                                </a>
                                                <a className="select-option">
                                                    development (5)
                                                </a>
                                            </div>
                                            <a className="select-next-btn">
                                                <MdOutlineNavigateNext />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="college-select">
                                        <div className="select-title">
                                            select course
                                        </div>
                                        <div className="select-info">
                                            <div className="select-options">
                                                <a className="select-option">
                                                    BDS
                                                </a>
                                                <a className="select-option">
                                                    B.ED
                                                </a>
                                                <a className="select-option">
                                                    BDS
                                                </a>
                                                <a className="select-option">
                                                    B.ED
                                                </a>
                                                <a className="select-option">
                                                    BDS
                                                </a>
                                                <a className="select-option">
                                                    B.ED
                                                </a>
                                                <a className="select-option">
                                                    BDS
                                                </a>
                                                <a className="select-option">
                                                    B.ED
                                                </a>
                                                <a className="select-option">
                                                    BDS
                                                </a>
                                                <a className="select-option">
                                                    B.ED
                                                </a>
                                            </div>
                                            <a className="select-next-btn">
                                                <MdOutlineNavigateNext />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="college-select college-select-sort">
                                        <div className="select-title">
                                            sort by:
                                        </div>
                                        <div className="select-info">
                                            <a className="select-sort-btn">
                                                <span>popularity</span>
                                                <BsArrowDown />
                                            </a>
                                            <a className="select-sort-btn">
                                                <span>rating</span>

                                                <BsArrowDown />
                                            </a>
                                            <a className="select-sort-btn">
                                                <span>highest fee</span>
                                                <BsArrowDown />
                                            </a>
                                            <a className="select-sort-btn">
                                                <span>lowest fee</span>
                                                <BsArrowDown />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* courses container */}
                            <div className="courses-container">
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                                <CourseCard />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
