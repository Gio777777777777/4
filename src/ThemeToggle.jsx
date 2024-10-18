import React, { useState } from 'react';

const ThemeToggle = () => {
    const [isDark, setIsDark] = useState(false);

    const toggleTheme = () => {
        setIsDark(!isDark);
    };

    return (
        <div style={{ background: isDark ? '#333' : '#fff', color: isDark ? '#fff' : '#000', padding: '20px' }}>
            <button onClick={toggleTheme}>
                {isDark ? 'Light' : 'Dark'} mode
            </button>
        </div>
    );
};

export default ThemeToggle;
