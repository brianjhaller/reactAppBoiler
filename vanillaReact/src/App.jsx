import React, { useState, useEffect } from 'react';
// import './App.css';
import useInfiniteScroll from './useInfiniteScroll';

function App() {
  const [links, setLinks] = useState([]);

  const infiniteScroll = useInfiniteScroll();

  useEffect(() => {
    fetch('/imgUrls')
      .then((res) => res.json())
      .then((json) => {
        setLinks(json);
      });
  }, []);

  return (
    <div>
      <h1>NOT INSTAGRAM</h1>
      <div>
        {/* render all of the links as img tags */}
        {links
          .slice(0, infiniteScroll)
          .map((url) => (
            <img alt="loading" src={url} key={url + Math.random() + Math.random()} />
          ))}
      </div>
    </div>
  );
}


export default App;
