import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import groupRequest from "../../api/StudentGroup/student-group.request";

export const getGroupsStore = createAsyncThunk(
  "student-groups/getGroup",
  async (thunkAPI) => {
    try {
      const res = await groupRequest.getStudentGroups();
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const getOneGroupStore = createAsyncThunk(
  "student-groups/getOneGroup",
  async (groupId, thunkAPI) => {
    try {
      const res = await groupRequest.getOneStudentGroup(groupId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const addGroupStore = createAsyncThunk(
  "student-groups/addGroup",
  async (group, thunkAPI) => {
    try {
      const res = await groupRequest.addStudentGroup(group);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const updateGroupStore = createAsyncThunk(
  "student-groups/updateGroup",
  async (group, thunkAPI) => {
    try {
      const res = await groupRequest.updateStudentGroup(group);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

export const deleteGroupStore = createAsyncThunk(
  "student-groups/deleteGroup",
  async (groupId, thunkAPI) => {
    try {
      const res = await groupRequest.deleteStudentGroup(groupId);
      return res.data;
    } catch (error) {
      return thunkAPI.rejectWithValue(error);
    }
  },
);

const initialState = {
  groups: [],
};

export const groupSlice = createSlice({
  name: "groups",
  initialState,
  extraReducers: {
    // Get all StudentGroups
    /* eslint-disable no-param-reassign */
    [getGroupsStore.fulfilled]: (state, action) => {
      state.groups = action.payload;
    },
    // eslint-disable-next-line
    [getGroupsStore.rejected]: (state, action) => {
      state.groups = [];
    },
    // Get one StudentGroup
    /* eslint-disable no-param-reassign */
    [getOneGroupStore.fulfilled]: (state, action) => {
      state.groups = action.payload;
    },
    // Add StudentGroup
    [addGroupStore.fulfilled]: (state, action) => {
      state.groups.push(action.payload);
    },
    // eslint-disable-next-line
    [addGroupStore.rejected]: (state, action) => {
      // state.groups = [];
    },
    // Update StudentGroup
    [updateGroupStore.fulfilled]: (state, action) => {
      const { groupID, groupName, topic } = action.payload;
      const existingGroup = state.find((group) => group.id === groupID);
      if (existingGroup) {
        existingGroup.groupName = groupName;
        existingGroup.topic = topic;
      }
    },
    // Delete StudentGroup
    [deleteGroupStore.fulfilled]: (state, action) => {
      state.groups = state.groups.filter(
        (group) => group.id !== action.meta.arg,
      );
    },
    // eslint-disable-next-line
    [deleteGroupStore.rejected]: (state, action) => {
      // state.groups = [];
    },
  },
});

const { reducer } = groupSlice;
export default reducer;
