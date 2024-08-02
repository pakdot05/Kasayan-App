import React, { useState, useEffect } from 'react';
import Book from './Book';  // Importing the Book component
import SearchFilter from './SearchFilter';  // Importing the SearchFilter component
import './App.css';  // Import your CSS file for styling

const Books = () => {
  // Predefined books
  const predefinedBooks = [
    { title: 'Math Book', author: 'Mike', status: 'Available', dueDate: null },
    { title: 'English Book', author: 'John', status: 'Checked Out', dueDate: new Date().toLocaleDateString() },
    { title: 'History', author: 'Lisa', status: 'Available', dueDate: null },
    { title: 'Algebra', author: 'Jane', status: 'Checked Out', dueDate: new Date().toLocaleDateString() },
    { title: 'TLE Book', author: 'Lisa', status: 'Available', dueDate: null },
    { title: 'IT Book', author: 'Mike', status: 'Checked Out', dueDate: new Date().toLocaleDateString() },
    { title: 'Filipino Book', author: 'John', status: 'Available', dueDate: null },
    { title: 'Science Book', author: 'Jane', status: 'Checked Out', dueDate: new Date().toLocaleDateString() },
    { title: 'Chemistry Book', author: 'Mike', status: 'Available', dueDate: null },
    { title: 'Personal Development', author: 'John', status: 'Checked Out', dueDate: new Date().toLocaleDateString() },
  ];

  // Generate additional random books to fill up to a total of 10 books
  const generateRandomBooks = (count) => {
    const authors = ['John', 'Jane', 'Mike', 'Lisa'];
    const statuses = ['Checked Out', 'Available'];
    const today = new Date();
    const books = [];

    for (let i = 0; i < count; i++) {
      const title = `Random Book ${i + 1}`;
      const author = authors[Math.floor(Math.random() * authors.length)];
      const status = statuses[Math.random() > 0.4 ? 0 : 1];  // 60% chance Checked Out, 40% Available
      const dueDate = status === 'Checked Out'
        ? new Date(today.getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)).toLocaleDateString()
        : null;

      books.push({ title, author, dueDate, status });
    }

    return books;
  };

  // Combine predefined books with random books to ensure a total of 10
  const generateBooks = () => {
    const totalBooks = predefinedBooks.length;
    const randomBooksCount = Math.max(0, 10 - totalBooks);
    return [...predefinedBooks, ...generateRandomBooks(randomBooksCount)];
  };

  const [books, setBooks] = useState(generateBooks());
  const [filteredBooks, setFilteredBooks] = useState(books);

  useEffect(() => {
    setFilteredBooks(books);
  }, [books]);

  const toggleStatus = (index) => {
    const newBooks = [...books];
    newBooks[index].status = newBooks[index].status === 'Checked Out' ? 'Available' : 'Checked Out';
    newBooks[index].dueDate = newBooks[index].status === 'Checked Out'
      ? new Date(new Date().getTime() + Math.random() * (30 * 24 * 60 * 60 * 1000)).toLocaleDateString()
      : null;

    setBooks(newBooks);
  };

  return (
    <div>
      <SearchFilter books={books} setFilteredBooks={setFilteredBooks} />
      <table>
        <thead>
          <tr>
            <th>No.</th>
            <th>Title</th>
            <th>Author</th>
            <th>Due Date</th>
            <th>Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {filteredBooks.map((book, index) => (
            <Book 
              key={index}
              book={book}
              index={index}
              toggleStatus={toggleStatus}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Books;
