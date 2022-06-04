import apiInstance from "../apiInstance";

const getStudentGroups = async () => {
  try {
    const response = await apiInstance
      .get(`/api/student-group/`);
    return response;
  } catch { }
};

const getOneStudentGroup = async (groupID) => {
  try {
    const response = await apiInstance
      .get(`/api/student-group/${groupID}`);
    return response;
  } catch (error) {
    return error;
  }
};

const addStudentGroup = async (group) => {
  try {
    const response = await apiInstance
      .post(`/api/student-group/`, group);
    return response;
  } catch { }
};

const updateStudentGroup = async (groupID, group) => {
  try {
    const response = await apiInstance
      .put(`/api/student-group/${groupID}`, group);
    return response;
  } catch (error) {
    return error;
  }
};

const deleteStudentGroup = async (groupId) => {
  try {
    const response = await apiInstance
      .delete(`/api/student-group/${groupId}`);
    return response;
  } catch { }
};

const groupRequest = {
  getStudentGroups,
  getOneStudentGroup,
  addStudentGroup,
  updateStudentGroup,
  deleteStudentGroup,
};

export default groupRequest;
