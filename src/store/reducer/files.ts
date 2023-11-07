import { createSlice } from '@reduxjs/toolkit';

interface File {
  path: string;
  name: string;
}

interface Folder {
  path: string;
  name: string;
  children: Array<File | Folder>;
}

interface FilesState {
  filesTree: Folder;
  openedList: File["path"][];
}

const initialState: FilesState = {
  filesTree: {
    path: '~',
    name: '',
    children: [],
  },
  openedList: [],
};

export const filesSlice = createSlice({
  name: 'files',
  initialState,
  reducers: {
  },
});

// export const {  } = filesSlice.actions;

export default filesSlice.reducer;