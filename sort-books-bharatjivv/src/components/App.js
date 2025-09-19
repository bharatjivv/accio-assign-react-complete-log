import React, { useEffect, useReducer } from 'react';

// Mock data simulating NY Times Books API response
const mockBooksData = [
  {
    title: "The Seven Husbands of Evelyn Hugo",
    author: "Taylor Jenkins Reid",
    publisher: "Atria Books",
    isbn: "9781501161933"
  },
  {
    title: "Where the Crawdads Sing",
    author: "Delia Owens",
    publisher: "G.P. Putnam's Sons",
    isbn: "9780735219090"
  },
  {
    title: "Educated",
    author: "Tara Westover",
    publisher: "Random House",
    isbn: "9780399590504"
  },
  {
    title: "The Midnight Library",
    author: "Matt Haig",
    publisher: "Viking",
    isbn: "9780525559474"
  },
  {
    title: "Atomic Habits",
    author: "James Clear",
    publisher: "Avery",
    isbn: "9780735211292"
  },
  {
    title: "The Silent Patient",
    author: "Alex Michaelides",
    publisher: "Celadon Books",
    isbn: "9781250301697"
  },
  {
    title: "Becoming",
    author: "Michelle Obama",
    publisher: "Crown Publishing",
    isbn: "9781524763138"
  },
  {
    title: "The Alchemist",
    author: "Paulo Coelho",
    publisher: "HarperCollins",
    isbn: "9780061122415"
  },
  {
    title: "1984",
    author: "George Orwell",
    publisher: "Signet Classics",
    isbn: "9780451524935"
  },
  {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    publisher: "J.B. Lippincott & Co.",
    isbn: "9780061120084"
  },
  // Add these 5 additional books to your mockBooksData array
{
  title: "The Great Gatsby",
  author: "F. Scott Fitzgerald",
  publisher: "Scribner",
  isbn: "9780743273565"
},
{
  title: "Pride and Prejudice",
  author: "Jane Austen",
  publisher: "T. Egerton",
  isbn: "9780141439518"
},
{
  title: "The Hobbit",
  author: "J.R.R. Tolkien",
  publisher: "Allen & Unwin",
  isbn: "9780547928227"
},
{
  title: "Harry Potter and the Philosopher's Stone",
  author: "J.K. Rowling",
  publisher: "Bloomsbury",
  isbn: "9780747532699"
},
{
  title: "The Catcher in the Rye",
  author: "J.D. Salinger",
  publisher: "Little, Brown and Company",
  isbn: "9780316769488"
}
  
];

// Redux-like action types
const ACTIONS = {
  FETCH_BOOKS_START: 'FETCH_BOOKS_START',
  FETCH_BOOKS_SUCCESS: 'FETCH_BOOKS_SUCCESS',
  FETCH_BOOKS_ERROR: 'FETCH_BOOKS_ERROR',
  SET_SORT_CRITERIA: 'SET_SORT_CRITERIA',
  SET_SORT_ORDER: 'SET_SORT_ORDER'
};

// Initial state
const initialState = {
  books: [],
  sortedBooks: [],
  loading: false,
  error: null,
  sortCriteria: 'title',
  sortOrder: 'asc'
};

// Redux-like reducer
function booksReducer(state, action) {
  switch (action.type) {
    case ACTIONS.FETCH_BOOKS_START:
      return {
        ...state,
        loading: true,
        error: null
      };
    
    case ACTIONS.FETCH_BOOKS_SUCCESS:
      const sortedBooks = sortBooks(action.payload, state.sortCriteria, state.sortOrder);
      return {
        ...state,
        books: action.payload,
        sortedBooks,
        loading: false,
        error: null
      };
    
    case ACTIONS.FETCH_BOOKS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload
      };
    
    case ACTIONS.SET_SORT_CRITERIA:
      const newSortedBooks = sortBooks(state.books, action.payload, state.sortOrder);
      return {
        ...state,
        sortCriteria: action.payload,
        sortedBooks: newSortedBooks
      };
    
    case ACTIONS.SET_SORT_ORDER:
      const reorderedBooks = sortBooks(state.books, state.sortCriteria, action.payload);
      return {
        ...state,
        sortOrder: action.payload,
        sortedBooks: reorderedBooks
      };
    
    default:
      return state;
  }
}

// Action creators
const fetchBooksStart = () => ({ type: ACTIONS.FETCH_BOOKS_START });
const fetchBooksSuccess = (books) => ({ type: ACTIONS.FETCH_BOOKS_SUCCESS, payload: books });
const fetchBooksError = (error) => ({ type: ACTIONS.FETCH_BOOKS_ERROR, payload: error });
const setSortCriteria = (criteria) => ({ type: ACTIONS.SET_SORT_CRITERIA, payload: criteria });
const setSortOrder = (order) => ({ type: ACTIONS.SET_SORT_ORDER, payload: order });

// Sorting utility function
function sortBooks(books, criteria, order) {
  if (!books || books.length === 0) return [];
  
  const sortedBooks = [...books].sort((a, b) => {
    let valueA = '';
    let valueB = '';
    
    switch (criteria) {
      case 'title':
        valueA = a.title.toLowerCase();
        valueB = b.title.toLowerCase();
        break;
      case 'author':
        valueA = a.author.toLowerCase();
        valueB = b.author.toLowerCase();
        break;
      case 'publisher':
        valueA = a.publisher.toLowerCase();
        valueB = b.publisher.toLowerCase();
        break;
      default:
        return 0;
    }
    
    if (order === 'asc') {
      return valueA.localeCompare(valueB);
    } else {
      return valueB.localeCompare(valueA);
    }
  });
  
  return sortedBooks;
}

// BooksList Component
function BooksList() {
  const [state, dispatch] = useReducer(booksReducer, initialState);

  // Simulate API fetch
  const fetchBooks = () => {
     dispatch(fetchBooksStart());
     new Promise(resolve => setTimeout(resolve, 1000))
       .then(() => {
         dispatch(fetchBooksSuccess(mockBooksData));
       })
       .catch(error => {
         dispatch(fetchBooksError('Failed to fetch books'));
       });
   };
  useEffect(() => {
    fetchBooks();
  }, []);

  const handleSortCriteriaChange = (e) => {
    dispatch(setSortCriteria(e.target.value));
  };

  const handleSortOrderChange = (e) => {
    dispatch(setSortOrder(e.target.value));
  };

  if (state.loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="text-center">
          <div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-600 mx-auto mb-4"></div>
          <p className="text-lg text-gray-600">Loading books...</p>
        </div>
      </div>
    );
  }

  if (state.error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50">
        <div className="bg-red-100 border border-red-400 text-red-700 px-6 py-4 rounded-lg">
          <h2 className="text-xl font-semibold mb-2">Error</h2>
          <p>{state.error}</p>
          <button 
            onClick={fetchBooks}
            className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700 transition-colors"
          >
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-lg shadow-lg">
          {/* Header */}
          <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-t-lg px-6 py-8">
            <h1 className="text-3xl font-bold text-center mb-2" data-testid="header-title">Books List</h1>
            <p className="text-center text-blue-100">Discover and sort your favorite books</p>
          </div>

          {/* Controls */}
          <div className="px-6 py-6 border-b border-gray-200">
            <div className="flex flex-wrap gap-4 items-center">
              <div className="flex items-center space-x-2">
                <label htmlFor="sortBy" className="text-sm font-medium text-gray-700">
                  Sort by:
                </label>
                <select
                  id="sortBy"
                  data-testid="sort-criteria"
                  value={state.sortCriteria}
                  onChange={handleSortCriteriaChange}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="title">Title</option>
                  <option value="author">Author</option>
                  <option value="publisher">Publisher</option>
                </select>
              </div>
              
              <div className="flex items-center space-x-2">
                <label htmlFor="sortOrder" className="text-sm font-medium text-gray-700">
                  Order:
                </label>
                <select
                  id="sortOrder"
                  data-testid="sort-order"
                  value={state.sortOrder}
                  onChange={handleSortOrderChange}
                  className="border border-gray-300 rounded-md px-3 py-2 bg-white text-sm focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
                >
                  <option value="asc">Ascending</option>
                  <option value="desc">Descending</option>
                </select>
              </div>

              <div className="ml-auto text-sm text-gray-600">
                Showing {state.sortedBooks.length} books
              </div>
            </div>
          </div>

          {/* Books Table */}
          <div className="overflow-x-auto">
            <table className="w-full" data-testid="books-table">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Title
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Author
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    Publisher
                  </th>
                  <th className="px-6 py-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                    ISBN
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {state.sortedBooks.map((book, index) => (
                  <tr 
                    key={book.isbn} 
                    className="hover:bg-gray-50 transition-colors duration-150"
                  >
                    <td className="px-6 py-4">
                      <div className="text-sm font-medium text-gray-900">
                        {book.title}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {book.author}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-700">
                        {book.publisher}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500 font-mono">
                        {book.isbn}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Empty State */}
          {state.sortedBooks.length === 0 && !state.loading && (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <svg className="mx-auto h-12 w-12" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No books found</h3>
              <p className="text-gray-500">Try refreshing the page to load books.</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default function App() {
  return <BooksList />;
}