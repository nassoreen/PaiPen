import { useEffect, useState } from 'react';

function App() {
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

export default App;