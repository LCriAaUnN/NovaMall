import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './order.css';

function OrderPage() {
    const [orders, setOrders] = useState([
        // 假数据示例
        { id: 'ORD001', items: ['iPhone 15', 'AirPods Pro'], status: 'Paid', price: 9999, date: '2024-04-10' },
        { id: 'ORD002', items: ['Book: React Basics', 'USB-C Charging Cable', 'USB-C Charging Cable'], status: 'Delivered', price: 299, date: '2024-04-09' },
        // 可以添加更多订单
    ]);

    // 查看订单详情的示例函数
    const viewOrderDetails = (id) => {
        alert(`查看订单 ${id} 的详情`);
        // 实际应用中，这里可以是打开一个模态框，或跳转到订单详情页面
    };

    return (
        <>
            <Link to="/" className="back-to-home">Back to Home</Link>
            <div className="orders-page">
                <h1>Your Orders</h1>
                {orders.length > 0 ? (
                    <div className="orders-list">
                        {orders.map((order) => (
                        <div key={order.id} className="order-card">
                            <div className="order-details">
                            <div className="detail-section">
                                <span className="label">Order ID</span>
                                <span>{order.id}</span>
                            </div>
                            <div className="detail-section items-section">
                                <span className="label">Items</span>
                                <div>
                                {order.items.slice(0, 2).map((item, index) => (
                                    <div key={index}>{item}</div>
                                ))}
                                {order.items.length > 2 && <div>...</div>}
                                </div>
                            </div>
                            <div className="detail-section">
                                <span className="label">Status</span>
                                <span>{order.status}</span>
                            </div>
                            <div className="detail-section">
                                <span className="label">Price</span>
                                <span>${order.price}</span>
                            </div>
                            </div>
                            <button onClick={() => viewOrderDetails(order.id)}>View Details</button>
                        </div>
                        ))}

                    </div>
                ) : (
                    <p>Your orders list is empty.</p>
                )}
            </div>
        </>
    );
}

export default OrderPage;
