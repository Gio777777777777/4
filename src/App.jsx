import React from 'react';
import TodoApp from './TodoApp';
import ThemeToggle from './ThemeToggle';
import Counter from './Counter';
import Card from './Card';

const App = () => {
  return (
    <div>
      <h1>Car 777</h1>
      <ThemeToggle />
      <TodoApp />
      <Counter />
      <Card
        title="mercedes G class"
        image="https://www.topgear.com/sites/default/files/2024/05/5-Mercedes-G-Class-review.jpg?w=976&h=549"
        description=""
      />
    </div>
  );
};

export default App;
