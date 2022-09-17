import React from 'react';

import './Display.css';

export default function Display({ catchphraseArray }) {
  const theRealArray = catchphraseArray.map((phrase) =>
    <li key={phrase.toString()}>{phrase}</li>
  );
  
  return (
    <div className="display">
      <ul>{theRealArray}</ul>
    </div>
  );
}


// {
//   articles.map((article) => (
//     <MyAmazingArticle caption={article.title} color={article.background} />
//   ));
// }