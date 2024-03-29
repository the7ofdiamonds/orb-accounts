import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

const LoadingComponent = lazy(() => import('./loading/LoadingComponent.jsx'));
const ErrorComponent = lazy(() => import('./error/ErrorComponent.jsx'));

const Accounts = lazy(() => import('./views/Accounts.jsx'));

const Billing = lazy(() => import('./views/Billing.jsx'));

const Quote = lazy(() => import('./views/BillingQuote.jsx'));
const Quotes = lazy(() => import('./views/BillingQuotes.jsx'));

const Invoice = lazy(() => import('./views/BillingInvoice.jsx'));
const Invoices = lazy(() => import('./views/BillingInvoices.jsx'));

const Payment = lazy(() => import('./views/BillingPayment.jsx'));
const CardPayment = lazy(() => import('./views/BillingPaymentCard.jsx'));
const Wallet = lazy(() => import('./views/BillingPaymentWallet.jsx'));

const Receipt = lazy(() => import('./views/BillingReceipt.jsx'));
const Receipts = lazy(() => import('./views/BillingReceipts.jsx'));

const Client = lazy(() => import('./views/Client.jsx'));
const Start = lazy(() => import('./views/ClientStart.jsx'));
const Selections = lazy(() => import('./views/ClientSelections.jsx'));

const Dashboard = lazy(() => import('./views/Dashboard.jsx'));

function App() {
  return (
    <>
      <Router basename="/">
        <Suspense fallback={<LoadingComponent />}>
          <Routes>
            <Route path="accounts" element={<Accounts />} />
            <Route path="billing" element={<Billing />} />
            <Route path="billing/invoice/:id" element={<Invoice />} />
            <Route path="billing/invoices" element={<Invoices />} />
            <Route path="billing/payment/:id" element={<Payment />} />
            <Route path="billing/payment/card/:id" element={<CardPayment />} />
            <Route path="billing/payment/wallet/:id" element={<Wallet />} />
            <Route path="billing/quote/:id" element={<Quote />} />
            <Route path="billing/quotes" element={<Quotes />} />
            <Route path="billing/receipt/:id" element={<Receipt />} />
            <Route path="billing/receipts" element={<Receipts />} />
            <Route path="client" element={<Client />} />
            <Route path="client/selections" element={<Selections />} />
            <Route path="client/start" element={<Start />} />
            <Route path="dashboard" element={<Dashboard />} />
          </Routes>
        </Suspense>
      </Router>
    </>
  );
}

export default App;
