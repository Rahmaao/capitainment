// src/components/UserManagement.tsx
"use client";

import { useEffect, useState } from 'react';
import { getUserManagementUsers } from '@/services/apiService';

type User = {
  firstName: string;
  lastName: string;
  createdDate: string;
  email: string;
  phoneNumber: string | null;
  status: number;
};

const UserManagement = () => {
  const [users, setUsers] = useState<User[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const data = await getUserManagementUsers();
        setUsers(data.result);
      } catch (err) {
        setError('Failed to load users.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchUsers();
  }, []);

  // Helper function to format date
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date.toLocaleDateString();
  };

  // Helper function to format status
  const formatStatus = (status: number) => {
    return status === 0 ? 'Inactive' : 'Active';
  };

  return (
    <div>
      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}
      {users && (
        <table>
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Created Date</th>
              <th>Email</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user) => (
              <tr key={user.email}>
                <td>{user.firstName}</td>
                <td>{user.lastName}</td>
                <td>{formatDate(user.createdDate)}</td>
                <td>{user.email}</td>
                <td>{formatStatus(user.status)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default UserManagement;
