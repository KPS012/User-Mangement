import React from 'react';
import { User } from './types';

interface Props {
  user: User;
  onClose: () => void;
}

const UserDetails: React.FC<Props> = ({ user, onClose }) => {
  return (
    <div className="flex justify-center items-center fixed">
      <div className="bg-[#ffff] p-10 rounded-lg relative shadow-md hover:shadow-lg">
        <span className="w-8 h-8 flex items-center justify-center absolute top-5 right-8 text-2xl text-white bg-[#141517] rounded-full cursor-pointer" onClick={onClose}>&times;</span>
        <div className="mt-8">
            <h2 className='text-center text-xl font-bold'>User Details</h2>
            <div className='mt-4 flex flex-col'>
                <span><strong>ID:</strong> {user.id}</span>
                <span><strong>Name:</strong> {user.name}</span>
                <span><strong>Username:</strong> {user.username}</span>
                <span><strong>Email:</strong> {user.email}</span>
                <span><strong>Address:</strong> {user.address.street}, {user.address.city}</span>
                <span><strong>Phone:</strong> {user.phone}</span>
                <span><strong>Website:</strong> {user.website}</span>
            </div>
        </div>
      </div>
    </div>
  );
};

export default UserDetails;
