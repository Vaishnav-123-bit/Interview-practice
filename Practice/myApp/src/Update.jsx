import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const Update = () => {
  const { id } = useParams();
  const users = useSelector((state) => state.users);
  const existingUser = users.filter((user) => user.id === id);

  // Check if existingUser has a valid element before destructuring
  const { name, email } = existingUser.length > 0 ? existingUser[0] : null;

  const [uname, setName] = useState(name);
  const [uemail, setEmail] = useState(email);

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
    <div>
      <h3>Update</h3>
      <form action="">
        <div>
          <label htmlFor="name">Name</label>
          <input type="text" value={uname} onChange={handleNameChange} />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input type="text" value={uemail} onChange={handleEmailChange} />
        </div>
        <button>Submit</button>
      </form>
    </div>
  );
};

export default Update;
