import React from 'react';
import './RegistryTabs.css';

import { Link } from 'react-router-dom';

export default function RegistryTabs({ isClient = true }) {
  const active = 'registry_tabs__link--active';

  return (
    <div className="resgistry-tabs">
      <Link
        className={`registry_tabs__link ${isClient ? active : ''}`}
        to="/registry/client">
        CLIENTE
      </Link>
      <Link
        className={`registry_tabs__link registry_tabs__link--right ${
          isClient ? '' : active
        }`}
        to="/registry/establishment">
        LOCAL
      </Link>
    </div>
  );
}
