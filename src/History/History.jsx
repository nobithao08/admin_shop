import React, { useEffect, useState } from 'react';
import HistoryAPI from '../API/HistoryAPI';

// import io from "socket.io-client";
// const socket = io("http://localhost:8000");

function History(props) {

    const [history, setHistory] = useState([])

    const [detailOrder, setDetailOrder] = useState(null);

    const [load, setLoad] = useState(false)

    const [text, setText] = useState('')

    useEffect(() => {

        const fetchData = async () => {

            const response = await HistoryAPI.getAll()
            console.log(response)

            setHistory(response)

        }

        fetchData()

    }, [])

    const handleViewDetail = (order) => {
        console.log("Order detail:", order);
        setDetailOrder(order);
    };
    

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">Trang chủ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">Lịch sử</li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card">
                            <div className="card-body">
                                <h4 className="card-title">Lịch sử</h4>
                                <h3>{text}</h3>
                                <br />
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>ID người dùng</th>
                                                <th>Tên</th>
                                                <th>Số điện thoại</th>
                                                <th>Địa chỉ</th>
                                                <th>Tổng cộng</th>
                                                <th>Vận chuyển</th>
                                                <th>Trạng thái</th>
                                                <th>Chi tiết</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                history && history.map(value => (
                                                    <tr key={value._id}>
                                                        <td>{value.idUser}</td>
                                                        <td>{value.fullname}</td>
                                                        <td>{value.phone}</td>
                                                        <td>{value.address}</td>
                                                        <td>${value.total}</td>
                                                        <td>{value.delivery ? 'Đã Vận Chuyển' : 'Chưa Vận Chuyển'}</td>
                                                        <td>{value.status ? 'Đã Thanh Toán' : 'Chưa Thanh Toán'}</td>
                                                        <td>
                                                        <a
                                                            onClick={() => handleViewDetail(value)}
                                                            style={{ cursor: 'pointer', color: 'white' }}
                                                            className="btn btn-success"
                                                        >
                                                            Xem
                                                        </a>
                                                        </td>
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>

                                    <div>
                                    {/* Hiển thị thông tin chi tiết đơn hàng */}
                                    {detailOrder && (
                                        <div className="detail-order">
                                            <p>ID đơn hàng: {detailOrder._id}</p>                  
                                            <p>Họ và tên: {detailOrder.fullname}</p>
                                            <p>ID người dùng: {detailOrder.idUser}</p>
                                            <p>Số điện thoại: {detailOrder.phone}</p>
                                            <p>Địa chỉ: {detailOrder.address}</p>
                                            <p>Tổng cộng: ${detailOrder.total}</p>
                                        </div>
                                    )}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Admin.
            </footer>
        </div>
    );
}

export default History;