import React, { useState, useEffect } from 'react';
import api from "../api";
import { Link } from 'react-router-dom';
import './order.css';

function OrderPage() {
    const [orders, setOrders] = useState([]);
    const statusNames = {
        0: "Not Paid",
        1: "Paid",
        2: "Shipping",
        3: "Delivered",
    };

    useEffect(() => {
        getOrders();
    }, [])

    const getOrders = () => {
        api
            .get("/order/")
            .then((res) => res.data)
            .then((data)=> {setOrders(data); console.log(data)})
            .catch((err) => alert(err));
    }
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
                                    {JSON.parse(order.productIDs).slice(0, 2).map((item, index) => (
                                    <div key={index}>{item.name}</div>
                                    ))}
                                {JSON.parse(order.productIDs).length > 2 && <div>...</div>}
                                </div>
                            </div>
                            <div className="detail-section">
                                <span className="label">Status</span>
                                <span>{statusNames[order.status]}</span>
                            </div>
                            <div className="detail-section">
                                <span className="label">Price</span>
                                <span>${order.price}</span>
                            </div>
                            </div>
                            {/* <button onClick={() => viewOrderDetails(order.id)}>View Details</button> */}
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
