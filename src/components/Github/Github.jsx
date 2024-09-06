import React, { useEffect, useState } from 'react';

function Github() {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch('https://api.github.com/users/Psrkrk')
      .then(response => response.json())
      .then(data => {
        console.log(data);
        setData(data);
      });
  }, []);

  return (
    <div className='p-4 m-4 text-3xl text-center text-white'>
      Github Followers: {data.followers}
      <img 
        src={data.avatar_url} 
        alt="GitHub avatar" 
        width={300} 
        className='rounded-full' // Tailwind CSS class for a rounded shape
      />
    </div>
  );
}

export default Github;
