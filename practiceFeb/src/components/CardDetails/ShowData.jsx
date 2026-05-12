import React, {useState} from 'react';

function ShowData({ user }) {
  const [details, showDetails] = useState(false);

  return (
    <>
      <ul>
        <p>{user.name}</p>
        <p>{user.role}</p>
        {details && (
          <p>
            <span>{user.email} - </span>
            <span>{user.city}</span>
          </p>
        )}
        <button onClick={() => showDetails(!details)}> {details === true ? 'hide details' : 'show details'}</button>
      </ul>
    </>
  );
}

export default ShowData;