import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

import { getAccounts } from '../controllers/accountsSlice.js';

function Accounts() {
  const dispatch = useDispatch();

  const { msg } = useSelector((state) => state.accounts);

  useEffect(() => {
    dispatch(getAccounts());
  }, [dispatch]);

  return (
    <>
      <section className="accounts">
        <h2 className="title">accounts</h2>
        <div>{ 
              <h1 key={msg.pagename}>{msg.pagename}</h1>
            }</div>
      </section>
    </>
  );
}

export default Accounts;
