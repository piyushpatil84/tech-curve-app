import './App.css';
import PODetails from './components/poDetails/poDetails';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import OrderDetails from './components/orderDetails/orderDetails';
import DefaultLayout from './components/defaultLayout/defaultLayout';
import Home from './pages/home/home';

function App() {
  return (
    <Router>
      <DefaultLayout>
        <div className="self-stretch flex-1 bg-page-back-ground flex flex-col items-start justify-start pt-0 px-0 pb-6 text-sm text-primary">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/purchase-order" element={<PODetails />} />
            <Route path="/order-details" element={<OrderDetails />} />
          </Routes>
        </div>
      </DefaultLayout>
    </Router>
  );
}

export default App;