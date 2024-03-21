import React from 'react';
import { User } from './types';

type Props = {
  users: User[];
  onUserClick: (user: User) => void;
};

const UserList: React.FC<Props> = ({ users, onUserClick }) => {
  return (
    <div className="w-[90vw] p-8 overflow-x-scroll scrollbar-w-1 scrollbar-track-gray-200 scrollbar-thumb-gray-500 shadow-2xl rounded-lg flex items-center">
      <table className="p-8 flex flex-col justify-center items-center">
        <thead>
          <tr className='w-[1200px] flex justify-between text-left'>
            <th className='w-[2vw] text-left'>ID</th>
            <th className='w-[20vw] text-left'>Name</th>
            <th className='w-[10vw] text-left'>Username</th>
            <th className='w-[15vw] text-left'>Email</th>
            <th className='w-[10vw] text-left'>City</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr className='w-[1200px] flex justify-between items-center' key={user.id} onClick={() => onUserClick(user)}>
              <td className='w-[2vw] text-left' >{user.id}</td>
              <td className='w-[20vw] text-left' >{user.name}</td>
              <td className='w-[10vw] text-left' >{user.username}</td>
              <td className='w-[15vw] text-left' >{user.email}</td>
              <td className='w-[10vw] text-left' >{user.address.city}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
