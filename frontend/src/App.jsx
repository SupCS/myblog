import { useRef } from 'react';
import Header from './components/Header/Header';
import Posts from './components/Posts/Posts';

function App() {
  const postsRef = useRef(null);

  const scrollToPosts = () => {
    if (postsRef.current) {
      postsRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div>
      <Header scrollToPosts={scrollToPosts} />
      <div ref={postsRef}>
        <Posts />
      </div>
    </div>
  );
}

export default App;
