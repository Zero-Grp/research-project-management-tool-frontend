import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Sidebar } from "../../components/Sidebar";
import { Header } from "../../components/Header";
import { getGroupsStore } from "../../store/StudentGroup";
import groupRequest from "../../api/StudentGroup/student-group.request";
import userRequest from "../../api/User/user.request";



export const StudentGroupCreate = () => {

const initialState = [{
    groupName: "",
    groupMembers: [],
    panelMembers: [],
    supervisor: {},
    co_supervisor: {},
    supervisor_status: "",
    co_supervisor_status: ""
  }];

  const dispatch = useDispatch();
  const [group, setStudentGroup] = useState([]);
  const [user, setUser] = useState([]);
  const [inputs, setInputs] = useState(initialState);

  

  const StudentGroupCreate = () => {
    groupRequest
      .addStudentGroup({
        groupName: inputs.name,
        groupMembers: inputs.groupMembers,
        panelMembers: inputs.panelMembers,
        supervisor: inputs.supervisor,
        co_supervisor: inputs.co_supervisor,
        supervisor_status: inputs.supervisor_status,
        co_supervisor_status: inputs.co_supervisor_status
      })
      .then((res) => {
        console.log(res);
        if (res.data === "Group saved successfully") {
          setInputs(initialInput);
          toast.success("Group creation success!");
        } else {
          toast.error("Something went wrong!");
        }
      });
  };
  
  const handleChange = (e) => {
    const { value, name } = e.target;
    setInputs((values) => ({ ...values, [name]: value }));
    console.log(inputs);
  };

  useEffect(() => {
    dispatch(getGroupsStore()).then((response) => {
      //console.log(response);
    });
  }, [dispatch]);

  useEffect(() => {
    userRequest.getAllUsers().then((res) => {
      console.log(res);
      setUser(res.data.data);
    });
  }, []);

  return (
    <div className="flex flex-row h-screen">
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <div className="w-full px-64 pt-10">
          <h1 className="mb-4 text-xl font-semibold text-gray-700 dark:text-gray-200">
            Create Your Group Here
          </h1>
          <label className="label">
            <span className="label-text">Group Name</span>
          </label>
          <input
            className="mt-1 input input-bordered w-full"
            type="text"
            name="groupName"
            placeholder="Enter group name..."
            value={inputs.groupName}
            onChange={handleChange}
            required
          />
          <label className="label">
            <span className="label-text">Group Members</span>
          </label>
          <select
            multiple={true}
            className="mt-1 input input-bordered w-full"
            value={inputs.groupMembers}
            name="group_members"
            onChange={handleChange}>
              <option disabled>Select the group members...</option>
              {user.map((u) => (
              <option value={u.firstName} key={u.id}>
                {u.firstName}
              </option>
              ))}
          </select>
          <label className="label">
            <span className="label-text">Panel Members</span>
          </label>
          <select
            multiple={true}
            className="mt-1 input input-bordered w-full"
            value={inputs.panelMembers}
            name="panel_members"
            onChange={handleChange}>
              <option disabled>Select the panel members...</option>
              {user.map((u) => (
              <option value={u.firstName} key={u.id}>
                {u.firstName}
              </option>
              ))}
          </select>
          <label className="label">
            <span className="label-text">Supervisor</span>
          </label>
          <select
            className="mt-1 input input-bordered w-full"
            value={inputs.supervisor}
            name="supervisor"
            onChange={handleChange}>
              <option defaultValue disabled>Select a supervisor...</option>
              {user.map((u) => (
              <option value={u.firstName} key={u.id}>
                {u.firstName}
              </option>
              ))}
          </select>
          <label className="label">
            <span className="label-text">Co-Supervisor</span>
          </label>
          <select
            className="mt-1 input input-bordered w-full"
            value={inputs.co_supervisor}
            name="co_supervisor"
            onChange={handleChange}>
              <option defaultValue disabled>Select a co-supervisor...</option>
              {user.map((u) => (
              <option value={u.firstName} key={u.id}>
                {u.firstName}
              </option>
              ))}
          </select>
          <label className="label">
            <span className="label-text">Supervisor status</span>
          </label>
          <select
            className="mt-1 input input-bordered w-full"
            value={inputs.supervisor_status}
            name="supervisor_status"
            onChange={handleChange}>
              <option defaultValue>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
          </select>
          <label className="label">
            <span className="label-text">Co-supervisor status</span>
          </label>
          <select
            className="mt-1 input input-bordered w-full"
            value={inputs.co_supervisor_status}
            name="supervisor_status"
            onChange={handleChange}>
              <option defaultValue>Pending</option>
              <option>Approved</option>
              <option>Rejected</option>
          </select>
          <button
            className="mt-4 btn btn-active btn-primary w-full"
            onClick={StudentGroupCreate}>
            SAVE
          </button>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};
