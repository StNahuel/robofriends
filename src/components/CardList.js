import React from 'react';
import Card from './Card';

import uuid from 'uuid4';

const CardList = ({ robots }) => {
  return (
    <div>
      {robots.map(el => {
        return <Card key={uuid()} robot={el} />;
      })}
    </div>
  );
};

export default CardList;
