import { useSelector, useDispatch } from 'react-redux';
import { clearHistory } from '../store/searchSlice';

function History() {
  const dispatch = useDispatch();
  const { history } = useSelector((state) => state.search);

  return (
    <div className="max-w-2xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-2xl font-bold">Your Search History</h1>
        {history.length > 0 && (
          <button
            onClick={() => dispatch(clearHistory())}
            className="px-4 py-2 bg-emerald-500 text-white rounded-md hover:bg-emerald-600"
          >
            Clear Search History
          </button>
        )}
      </div>

      <div className="space-y-4">
        {history.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-lg shadow">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium">Search Term: {item.searchTerm}</p>
                <p className="text-sm text-gray-500">
                  {new Date(item.timestamp).toLocaleString()}
                </p>
              </div>
              {item.success ? (
                <span className="px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
                  Found
                </span>
              ) : (
                <span className="px-2 py-1 bg-red-100 text-red-800 rounded-full text-sm">
                  Not Found
                </span>
              )}
            </div>
            {item.success && item.userData && (
              <div className="mt-4 flex items-center gap-4">
                <img
                  src={item.userData.avatar_url}
                  alt={item.userData.login}
                  className="w-12 h-12 rounded-full"
                />
                <div>
                  <p className="font-medium">{item.userData.name || item.userData.login}</p>
                  <p className="text-sm text-gray-600">{item.userData.bio}</p>
                </div>
              </div>
            )}
          </div>
        ))}

        {history.length === 0 && (
          <p className="text-center text-gray-500">No search history yet</p>
        )}
      </div>
    </div>
  );
}

export default History;