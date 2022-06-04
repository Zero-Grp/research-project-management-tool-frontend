import React from "react";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";

export const StudentGroup = () => {

return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <a className="mt-4 btn btn-active btn-primary w-full" href="http://localhost:1234/student-group-create">Create Student Group</a>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
