import React from 'react';


const QuoteCard = ({ info, name, }) => {
    return (
      <div>
      <div>{info}</div>
      <div>{name}</div>
      </div>
    );
};

export default QuoteCard;