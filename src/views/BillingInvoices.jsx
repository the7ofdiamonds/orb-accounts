import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getUser } from '../controllers/accountsUserSlice';
import { getClientInvoices } from '../controllers/accountsInvoiceSlice';

import LoadingComponent from '../loading/LoadingComponent.jsx';
import ErrorComponent from '../error/ErrorComponent.jsx';

function BillingInvoices() {
  const dispatch = useDispatch();

  const { user_email, stripe_customer_id } = useSelector(
    (state) => state.accountsUser
  );
  const { invoiceLoading, invoiceError, invoices } = useSelector(
    (state) => state.accountsInvoice
  );

  useEffect(() => {
    if (user_email) {
      dispatch(getUser());
    }
  }, [user_email, dispatch]);

  useEffect(() => {
    if (stripe_customer_id) {
      dispatch(getClientInvoices());
    }
  }, [stripe_customer_id, dispatch]);

  if (invoiceLoading) {
    return <LoadingComponent />;
  }

  if (invoiceError) {
    return <ErrorComponent error={invoiceError} />;
  }

  const now = new Date().getTime();
  let sortedInvoices = [];

  if (Array.isArray(invoices)) {
    sortedInvoices = invoices.slice().sort((a, b) => {
      const timeDiffA = Math.abs(a.due_date - now);
      const timeDiffB = Math.abs(b.due_date - now);

      return timeDiffA - timeDiffB;
    });
  }

  return (
    <>
      <section className="invoices">
        <h2 className="title">Invoices</h2>
        {Array.isArray(sortedInvoices) && sortedInvoices.length > 0 ? (
          <div className="card invoice">
            <table>
              <thead>
                <tr>
                  <th>
                    <h4>Invoice ID</h4>
                  </th>
                  <th>
                    <h4>Status</h4>
                  </th>
                  <th>
                    <h4>Balance</h4>
                  </th>
                  <th>
                    <h4>Due Date</h4>
                  </th>
                  <th>
                    <h4>Quote ID</h4>
                  </th>
                  <th>
                    <h4>Page</h4>
                  </th>
                </tr>
              </thead>
              <tbody>
                {sortedInvoices.map((invoice) => (
                  <>
                    <tr>
                      <td>{invoice.id}</td>
                      <td>{invoice.status}</td>
                      <td>
                        {/* add currency column using var invoice.currency */}
                        {new Intl.NumberFormat('us', {
                          style: 'currency',
                          currency: 'USD',
                        }).format(invoice.amount_remaining)}
                      </td>
                      <td>
                        {invoice.due_date
                          ? new Date(invoice.due_date * 1000).toLocaleString()
                          : ''}
                      </td>
                      <td>{invoice.quote_id}</td>
                      <td>
                        {invoice.status === 'deleted' ? (
                          <h5>Deleted</h5>
                        ) : invoice.status === 'paid' ? (
                          <a href={`/services/invoice/${invoice.id}`}>
                            <button>
                              <h5>View</h5>
                            </button>
                          </a>
                        ) : invoice.status === 'void' ? (
                          <h5>Void</h5>
                        ) : invoice.status === 'uncollectible' ? (
                          <h5>Uncollectible</h5>
                        ) : invoice.status === 'open' ? (
                          <a href={`/services/invoice/${invoice.id}`}>
                            <h5>Continue</h5>
                          </a>
                        ) : (
                          <a>
                            <button onClick={console.log('invoice deleted')}>
                              <h5>Delete</h5>
                            </button>
                          </a>
                        )}
                      </td>
                    </tr>
                  </>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          ''
        )}
      </section>
    </>
  );
}

export default BillingInvoices;
