import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { getGroupsStore } from "../../store/StudentGroup";
import groupRequest from "../../api/StudentGroup/student-group.request";

export const StudentGroupsList = () => {
  const state = useSelector((state) => state.StudentGroup);
  const [group, setStudentGroup] = useState([]);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getGroupsStore()).then((response) => {
      //console.log(response);
    });
  }, [dispatch]);

  useEffect(() => {
    groupRequest.getStudentGroups().then((res) => {
      //console.log(res);
      //console.log(res.data.data[0].description);
      setStudentGroup(res.data.data);
    });
  }, [group]);

  const DeleteGroup = (id) => {
    groupRequest.deleteStudentGroup(id).then((res) => {
      console.log(res);
    });
  };

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
              <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                  <th scope="col" className="px-6 py-3">
                    Group Name
                  </th>
                  <th scope="col" className="px-6 py-3"></th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                  <td className="px-6 py-1">
                    {group.map((g) => (
                      <div key={g.groupID}>
                        {g.groupName}
                        <br />
                        <br />
                      </div>
                    ))}
                  </td>
                  <td className="px-6 py-1">
                    {group.map((g) => (
                      <div key={g.groupID}>
                        <a
                          href="#"
                          className="font-medium text-blue-600 dark:text-blue-500 hover:underline">
                          <button onClick={() => DeleteGroup(g.groupID)}>
                            Delete
                          </button>
                        </a>
                        <br />
                        <br />
                      </div>
                    ))}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};
