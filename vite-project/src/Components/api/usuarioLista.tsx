// src/components/UserList.jsx
import React, { useState, useEffect } from 'react';
import { getUsers } from '../api/usuarioService';

function UserList() {
  

  useEffect(() => {
    getUsers() 
      .then(data => {
        setUsers(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  
}
export default UserList();