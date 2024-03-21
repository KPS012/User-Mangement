import { useState, useEffect } from 'react';
import { User } from './types';

interface ApiResponse {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    city: string;
    street: string;
  };
  phone: string;
  website: string;
}

const useFetchUsers = (): { users: User[]; isLoading: boolean; error: Error | null } => {
  const [users, setUsers] = useState<User[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<Error | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        if (!response.ok) {
          throw new Error('Failed to fetch users');
        }
        const data: ApiResponse[] = await response.json();
        const formattedUsers: User[] = data.map((user) => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email,
          address: {
            city: user.address.city,
            street: user.address.street
          },
          phone: user.phone,
          website: user.website
        }));
        setUsers(formattedUsers);
        setIsLoading(false);
      } catch (error: unknown) { 
        if (error instanceof Error) {
          setError(error);
        } else {
          setError(new Error('An unknown error occurred'));
        }
        setIsLoading(false);
      }
    };

    fetchData();

    return () => {
    };
  }, []);

  return { users, isLoading, error };
};

export default useFetchUsers;
