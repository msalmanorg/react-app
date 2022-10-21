import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { CollegePage } from "./pages/college/college.page";
import { CorporatePage } from "./pages/corporate/corporate.page";
import { CoursesPage } from "./pages/courses/courses.page";
import { ExamsPage } from "./pages/exams/exams.page";
import { HomePage } from "./pages/home/home.page";

function App() {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Navigate to="/home" />} />
                    <Route path="/home" element={<HomePage />} />
                    <Route path="courses" element={<CoursesPage />} />
                    <Route path="exams" element={<ExamsPage />} />
                    <Route path="corporate" element={<CorporatePage />} />
                    <Route path="colleges" element={<CollegePage />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}

export default App;
