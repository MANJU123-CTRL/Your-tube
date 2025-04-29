
        import React, { useEffect, useState } from 'react';

        function App() {
          const [theme, setTheme] = useState('dark');

          useEffect(() => {
            fetch('/api/login')
              .then(res => res.json())
              .then(data => setTheme(data.theme));
          }, []);

          return (
            <div style={{ backgroundColor: theme === 'dark' ? '#333' : '#fff', color: theme === 'dark' ? '#fff' : '#000' }}>
              <h1>Welcome to Video App</h1>
            </div>
          );
        }

        export default App;
    