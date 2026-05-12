import React, {useState, useEffect} from 'react';
import users from '../../data';
import ShowData from './ShowData'

function CardDetails () {
        
  const [data, setData] = useState([]);

  useEffect(() => {
    setData([...users]);
  }, []);

  return (
    <div>

      <ul>
        {data.map((user) => (
          <ShowData key={user.id} user={user} />
        ))}
      </ul>
    </div>
  );
}

export default CardDetails;
