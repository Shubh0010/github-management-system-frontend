import { createSlice } from '@reduxjs/toolkit';

const getInitialHistory = () => {
  const savedHistory = localStorage.getItem('searchHistory');
  return savedHistory ? JSON.parse(savedHistory) : [];
};

const searchSlice = createSlice({
  name: 'search',
  initialState: {
    history: getInitialHistory(),
    currentUser: null,
    loading: false,
    error: null,
  },
  reducers: {
    setLoading: (state, action) => {
      state.loading = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
    setCurrentUser: (state, action) => {
      state.currentUser = action.payload;
    },
    addToHistory: (state, action) => {
      state.history.unshift(action.payload);
      localStorage.setItem('searchHistory', JSON.stringify(state.history));
    },
    clearHistory: (state) => {
      state.history = [];
      localStorage.removeItem('searchHistory');
    },
  },
});

export const {
  setLoading,
  setError,
  setCurrentUser,
  addToHistory,
  clearHistory,
} = searchSlice.actions;

export default searchSlice.reducer;