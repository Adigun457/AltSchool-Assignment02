import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

function User() {
  const [post, setPost] = useState([])
  const fetchData = async () => {
    const response = await fetch('https://randomuser.me/api/?page-results-106seed-abc');

    const { results } = await response.json();


    console.log(results)

    setPost(results)

  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div>
      <h1>List of users</h1>
      {post.map(data => {
        <div key={data.id}>
          {data.title}
        </div>
      })}
    </div>
  )
}

export default User;