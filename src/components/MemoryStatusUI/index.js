
import React, { Fragment } from 'react';

import './memory-status-ui.css';

const MemoryStatusUI = ({ totalJSHeapSize, usedJSHeapSize, jsHeapSizeLimit, overLoad, unsupportMessage }) => (
  <div className='list'>
    <a
      className='notice'
      target='_blank'
      rel='noopener noreferrer'
      href='https://www.chromium.org/developers/how-tos/run-chromium-with-flags'>
      To enable more accurate memory monitoring, start Chrome with the --enable-precise-memory-info flag
    </a>
    { unsupportMessage ? (
      <div>{unsupportMessage}</div>
    ) : (
      <Fragment>
        <div className='list-item'>
          <div>totalJSHeapSize(Byte):</div>
          <div>{totalJSHeapSize}</div>
        </div>
        <div className='list-item'>
          <div>usedJSHeapSize(Byte):</div>
          <div>{usedJSHeapSize}</div>
        </div>
        <div className='list-item'>
          <div>jsHeapSizeLimit(Byte):</div>
          <div>{jsHeapSizeLimit}</div>
        </div>

        <div className='list-item'>
          <div>Is Memory overLoad?:</div>
          <div>{overLoad.toString()}</div>
        </div>
      </Fragment>
    ) }
  </div>
);

export default MemoryStatusUI;
