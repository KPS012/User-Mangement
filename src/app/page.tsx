"use client"
import React, { useState } from 'react';

import { User } from '@/components/types';
import UserList from '@/components/UserList';
import UserDetails from '@/components/UserDetails';
import SearchBar from '@/components/SearchBar';
import Pagination from '@/components/Pagination';
import useFetchUsers from '@/components/useFetchUsers';

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [selectedUser, setSelectedUser] = useState<User | null>(null);
  const [searchTerm, setSearchTerm] = useState<string>('');
  const pageSize: number = 10;

  const { users, isLoading, error } = useFetchUsers();

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  const handleUserClick = (user: User) => {
    setSelectedUser(user);
  };

  const handleSearch = (term: string) => {
    setSearchTerm(term);
    setCurrentPage(1);
  };

  const filteredUsers = users.filter(
    (user) =>
      user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      user.username.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const startIndex = (currentPage - 1) * pageSize;
  const paginatedUsers = filteredUsers.slice(startIndex, startIndex + pageSize);

  return (
    <div className="flex flex-col items-center justify-center mt-10">
      <h1 className='text-center text-3xl font-bold ml:text-xl'>
        User Management System
      </h1>
      <div className="mt-8 flex flex-col justify-center items-center">
        <div className="w-[100%] flex justify-end">  
          <SearchBar onSearch={handleSearch} />
        </div>
        {error && <div>Error: {error.message}</div>}
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <>
            <UserList users={paginatedUsers} onUserClick={handleUserClick} />
            <Pagination
              totalItems={filteredUsers.length}
              itemsPerPage={pageSize}
              currentPage={currentPage}
              onPageChange={handlePageChange}
            />
            {selectedUser && <UserDetails user={selectedUser} onClose={() => setSelectedUser(null)} />}
          </>
        )}
      </div>
    </div>
  );
};

export default App;
