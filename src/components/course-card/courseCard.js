import "./courseCard.css";

// icons
import { BiLike } from "react-icons/bi";
import { AiOutlineFile } from "react-icons/ai";
import { FiUserPlus } from "react-icons/fi";
import { IoMdShareAlt } from "react-icons/io";
import { MdMenuBook } from "react-icons/md";
import { ImLocation } from "react-icons/im";

export function CourseCard() {
    return (
        <>
            <div className="course-card">
                <div className="course-header">
                    <div className="college-img">
                        <img src="assets/images/college-img.png" />
                    </div>
                    <div className="college-name">
                        <a>
                            Aptech computer education, gujranwala, punjab,
                            Pakistan
                        </a>
                    </div>
                </div>
                <div className="college-description">
                    <div className="college-info">
                        <div className="college-location">
                            <ImLocation /> <span>Gujranwala, Punjab</span>
                        </div>
                        <div className="college-syllabus">
                            <MdMenuBook />
                            <span>ugc</span>
                        </div>
                    </div>
                    <div className="course-info">
                        <div className="course-property">
                            <div className="course-property-title">Course</div>
                            <div className="course-property-value">B.Ed</div>
                        </div>
                        <div className="course-property">
                            <div className="course-property-title">Fees</div>
                            <div className="course-property-value">
                                ₹ 63,000
                            </div>
                        </div>
                        <div className="course-property">
                            <div className="course-property-title">Exam</div>
                            <div className="course-property-value">AKNUCET</div>
                        </div>
                        <div className="course-property">
                            <div className="course-property-title">Ranked</div>
                            <div className="course-property-value">#0 by</div>
                        </div>
                    </div>
                    <div className="course-ratings">
                        <div className="course-rating-item">
                            <BiLike />
                            <span>551</span>
                        </div>
                        <div className="course-rating-item">
                            <FiUserPlus />
                            <span>43</span>
                        </div>
                        <div className="course-rating-item">
                            <IoMdShareAlt />
                            <span>12</span>
                        </div>
                        <div className="course-rating-item">
                            <AiOutlineFile />
                            <span>64</span>
                        </div>
                    </div>
                </div>
                <div className="course-btns">
                    <a>
                        <span>courses & fees</span>
                    </a>
                    <a>
                        <span>apply now</span>
                    </a>
                </div>
            </div>
        </>
    );
}
