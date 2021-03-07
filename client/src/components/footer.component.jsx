import React, { useState } from 'react';
import Footer from 'rc-footer';
import 'rc-footer/assets/index.css';

const MyFooter = () => {
  return (
    <div>
      <Footer
        theme='dark'
        columns={[
          {
            title: 'Developed by',
            items: [
              {
                title: 'Samee Shahood',
                url: 'https://github.com/samee-shahood',
                openExternal: true,
              },
              {
                title: 'Anees Aissaoui',
                url: 'https://github.com/aaiss1',
                openExternal: true,
              },
              {
                title: 'Andy Ung',
                url: 'https://github.com/andyung17',
                openExternal: true,
              }
              
            ],
          },
        ]}
      />
    </div>
  );
}

export default MyFooter;