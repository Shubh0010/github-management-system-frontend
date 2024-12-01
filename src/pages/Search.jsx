import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { searchUser } from '../services/github';
import { setLoading, setError, setCurrentUser, addToHistory } from '../store/searchSlice';

function Search() {
  const [username, setUsername] = useState('');
  const dispatch = useDispatch();
  const { currentUser, loading, error } = useSelector((state) => state.search);

  const handleSearch = async (e) => {
    e.preventDefault();
    if (!username.trim()) return;

    dispatch(setLoading(true));
    dispatch(setError(null));

    try {
      const userData = await searchUser(username);
      dispatch(setCurrentUser(userData));
      dispatch(addToHistory({
        searchTerm: username,
        timestamp: new Date().toISOString(),
        success: true,
        userData,
      }));
    } catch (error) {
      dispatch(setError('User not found'));
      dispatch(addToHistory({
        searchTerm: username,
        timestamp: new Date().toISOString(),
        success: false,
      }));
    } finally {
      dispatch(setLoading(false));
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h1 className="text-2xl font-bold text-center mb-8">Search GitHub User</h1>
      
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex flex-col items-center gap-4">
          <input
            type="text"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            placeholder="Enter GitHub username"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button
            type="submit"
            disabled={loading}
            className="w-full px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600 disabled:opacity-50"
          >
            {loading ? 'Searching...' : 'Search'}
          </button>
        </div>
      </form>

      {error && (
        <div className="text-red-500 text-center mb-4">
          {error}
        </div>
      )}

      {currentUser && (
        <div className="bg-white p-6 rounded-lg shadow">
          <div className="flex items-center gap-4">
            <img
              src={currentUser.avatar_url}
              alt={currentUser.login}
              className="w-16 h-16 rounded-full"
            />
            <div>
              <h2 className="text-xl font-semibold">{currentUser.name || currentUser.login}</h2>
              <p className="text-gray-600">{currentUser.bio}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Search;