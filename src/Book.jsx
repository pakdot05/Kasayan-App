import React from 'react';
import './App.css';  // Import your CSS file for styling

const Book = ({ book, index, toggleStatus }) => {
  return (
    <tr>
      <td>{index + 1}</td>
      <td>{book.title}</td>
      <td>{book.author}</td>
      <td>{book.status === 'Checked Out' ? book.dueDate : '-'}</td>
      <td>{book.status}</td>
      <td>
        <button onClick={() => toggleStatus(index)}>
          Toggle Status
        </button>
      </td>
    </tr>
  );
};

export default Book;
