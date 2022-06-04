import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { LogIn } from "./pages/LogIn.jsx";
import { SignUp } from "./pages/SignUp.jsx";
import { StudentGroup } from "./pages/StudentGroup/index.jsx";
import { StudentGroupsList } from "./pages/StudentGroup/groupsList.jsx";
import { StudentGroupCreate } from "./pages/StudentGroup/groupCreate.jsx";
import { Submission } from "./pages/Submission/index.jsx";
import { MarkSheet } from "./pages/Marksheet/index.jsx";
import { Stage } from "./pages/Stage/index.jsx";
import { Marks } from "./pages/Marksheet/marks.jsx";
import { SubmissionList } from "./pages/Submission/submissionList.jsx";
import { CheckStage } from "./pages/Stage/checkStage.jsx";
import { Chat } from "./pages/Chat/index.jsx";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/student-groups" element={<StudentGroup />} />
        <Route path="/student-groups-list" element={<StudentGroupsList />} />
        <Route path="/student-group-create" element={<StudentGroupCreate />} />
        <Route path="/" element={<Home />} />
        <Route path="/submission" element={<Submission />} />
        <Route path="/marksheet" element={<MarkSheet />} />
        <Route path="/stage" element={<Stage />} />
        <Route path="/marks" element={<Marks />} />
        <Route path="/submissionList" element={<SubmissionList />} />
        <Route path="/checkstage" element={<CheckStage />} />
        <Route path="/chat" element={<Chat />} />
      </Routes>
    </BrowserRouter>
  );
};
