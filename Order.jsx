import React, { useState } from 'react';
// import OrderReport from "./OrderReport"; // Import component báo cáo đơn hàng
import "./styles.css"; // Import CSS nếu có


const Sidebar = () => {
  return (
    <div className="sidebar">
      <div className="logo">
        <h1>242 Perfume</h1>
      </div>
      <div className="menu">
        <div className="menu-item">
          <i className="fas fa-dashboard"></i> <span>Tổng quan</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-shopping-cart"></i> <span>Đơn hàng</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-box"></i> <span>Sản phẩm</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-users"></i> <span>Khách hàng</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-chart-line"></i> <span>Báo cáo</span>
        </div>
        <div className="menu-item">
          <i className="fas fa-cog"></i> <span>Cài đặt</span>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  return (
    <div className="header">
      <h2>Tổng quan</h2>
      <div className="user-info">
        <img src="images/user.jpg" alt="Admin" />
        <div>
          <h4>Lại Nhật Trường</h4>
          <small>Quản lý</small>
        </div>
      </div>
    </div>
  );
};

const Dashboard = () => {
  return (
    <div className="container">
      <Sidebar />
      <div className="main-content">
        <Header />
        <OrderReport /> {/* Hiển thị bảng báo cáo đơn hàng */}
      </div>
    </div>
  );
};

export { Dashboard };

  









const OrderReport = () => {
  const [orders, setOrders] = useState([
    {
      id: 'DH001',
      customerName: 'Nguyễn Văn A',
      product: 'Áo thun nam',
      quantity: 2,
      totalPrice: 200000,
      status: 'Đã giao',
      orderDate: '05/03/2025'
    },
    {
      id: 'DH002',
      customerName: 'Trần Thị B',
      product: 'Quần jean nữ',
      quantity: 1,
      totalPrice: 350000,
      status: 'Đang xử lý',
      orderDate: '04/03/2025'
    },
    {
      id: 'DH003',
      customerName: 'Lê Văn C',
      product: 'Giày thể thao',
      quantity: 3,
      totalPrice: 1500000,
      status: 'Chờ thanh toán',
      orderDate: '03/03/2025'
    }
  ]);

  const getStatusColor = (status) => {
    switch(status) {
      case 'Đã giao': return 'text-green-600';
      case 'Đang xử lý': return 'text-yellow-600';
      case 'Chờ thanh toán': return 'text-blue-600';
      default: return 'text-gray-600';
    }
  };

  return (
    <div className="w-full max-w-4xl mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4 text-center">Báo Cáo Đơn Hàng</h2>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-3 text-left border">Mã ĐH</th>
              <th className="p-3 text-left border">Tên Khách Hàng</th>
              <th className="p-3 text-left border">Sản Phẩm</th>
              <th className="p-3 text-left border">Số Lượng</th>
              <th className="p-3 text-left border">Tổng Tiền</th>
              <th className="p-3 text-left border">Trạng Thái</th>
              <th className="p-3 text-left border">Ngày Đặt</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50">
                <td className="p-3 border">{order.id}</td>
                <td className="p-3 border">{order.customerName}</td>
                <td className="p-3 border">{order.product}</td>
                <td className="p-3 border">{order.quantity}</td>
                <td className="p-3 border">{order.totalPrice.toLocaleString()} đ</td>
                <td className="p-3 border">
                  <span className={getStatusColor(order.status)}>
                    {order.status}
                  </span>
                </td>
                <td className="p-3 border">{order.orderDate}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export { OrderReport };