import React from 'react';

const Loading = ({ show, centered, full }) => {
  return (
    show &&
    <div className="loading--fixed">
      <div className="lds-css ng-scope">
        <div className="lds-dual-ring">
          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  )
}

export { Loading };
