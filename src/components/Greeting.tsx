import React from 'react';

interface GreetingProps {
  name: string;
}

const Greeting: React.FC<GreetingProps> = ({ name }) => {
  return <h2 className="greeting">Hello, {name}!</h2>;
};

export default Greeting;
