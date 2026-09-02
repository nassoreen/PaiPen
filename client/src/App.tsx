import { useEffect, useState } from 'react';
import { LandingPage } from './pages/landing/LandingPage';

function Home() {
  const [message, setMessage] = useState('กำลังเชื่อมต่อ Backend...');

  useEffect(() => {
    fetch(`${import.meta.env.VITE_API_URL}/`)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Backend error');
        }
        return response.text();
      })
      .then(setMessage)
      .catch(() => {
        setMessage('ไม่สามารถเชื่อมต่อ Backend ได้');
      });
  }, []);

  return (
    <main>
      <h1>PaiPen</h1>
      <p>ข้อความจาก NestJS: {message}</p>
    </main>
  );
}

function App() {
  const [page, setPage] = useState<'login' | 'home'>(
    localStorage.getItem('token') ? 'home' : 'login',
  );

  if (page === 'login') {
    return <LandingPage />;
  }

  return (
    <div>
      <Home />
      <button
        onClick={() => {
          localStorage.removeItem('token');
          setPage('login');
        }}
        style={{ margin: '16px', padding: '8px 16px', cursor: 'pointer' }}
      >
        ออกจากระบบ
      </button>
    </div>
  );
}

export default App;