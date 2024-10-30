// import React from 'react'

// export default function Siteinfo() {
//   return (
//     <div>
      
//     </div>
//   )
// }
// src/SiteInfo.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faWhatsapp, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';

const SiteInfo = () => {
  return (
    <footer className="bg-gray-800 py-4 text-center text-white">
      <div className="flex justify-center space-x-6">
        <a
          href="https://www.facebook.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
          aria-label="Facebook"
        >
          <FontAwesomeIcon icon={faFacebook} size="2x" />
        </a>
        <a
          href="https://www.whatsapp.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
          aria-label="WhatsApp"
        >
          <FontAwesomeIcon icon={faWhatsapp} size="2x" />
        </a>
        <a
          href="https://www.instagram.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
          aria-label="Instagram"
        >
          <FontAwesomeIcon icon={faInstagram} size="2x" />
        </a>
        <a
          href="https://www.twitter.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-gray-300 hover:text-white"
          aria-label="Twitter"
        >
          <FontAwesomeIcon icon={faTwitter} size="2x" />
        </a>
      </div>
      <p className="text-sm text-gray-500 mt-4">© 2024 Your Company. All rights reserved.</p>
    </footer>
  );
};

export default SiteInfo;
