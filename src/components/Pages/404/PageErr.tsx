import React from 'react';
import Button from '../../Common/Button';
import './pageErr.scss';

function PageErr() {
  // const navigation = useNavigate()
  return (
    <div className="err-page">
      <h2>404</h2>
      <p>Page not found</p>
      <div className="button">
      <Button text='Back to Home' type='primary' />
      </div>
     
    </div>
  );
}

export default PageErr;
