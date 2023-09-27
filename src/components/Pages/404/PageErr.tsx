import React from 'react';
import Button from '../../Common/Button';
import './pageErr.scss';
import Link from 'next/link';

function PageErr() {
  // const navigation = useNavigate()
  return (
    <div className="err-page">
      <h2>404</h2>
      <p>Page not found</p>
      <Link href="/">
        <div className="button">
        <Button text='Back to Home' type='primary' />
        </div>
      </Link>
     
    </div>
  );
}

export default PageErr;
