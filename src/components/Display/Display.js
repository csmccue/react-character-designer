import React from 'react';

import './Display.css';

export default function Display({ catchphrase }) {
  // implement a Preview screen here
  //  Note - the HTML should have the following structure
  //  the main div should have a class of preview and the font-name prop
  //  and should have style interpolated using the alignment prop

  // <div class="preview indie-flower" style="text-align: center;">
  //   <h1> Blog Title</h1>
  //   <h3> Blog Subtitle</h3>
  //   <p>This is some blog text. </p>
  // </div>

  return (
    <div className="display">
      <h1>{catchphrase}</h1>
    </div>
  );
}
