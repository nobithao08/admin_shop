import React from 'react';

function Menu(props) {

    return (
        <aside className="left-sidebar" data-sidebarbg="skin6">
            <div className="scroll-sidebar" data-sidebarbg="skin6">
                <nav className="sidebar-nav">
                    <ul id="sidebarnav">
                        <li className="sidebar-item"> <a className="sidebar-link sidebar-link" href='/'>
                            <i data-feather="home" className="feather-icon"></i><span
                                className="hide-menu">Trang chủ</span></a></li>
                        <li className="list-divider"></li>

                        <li className="sidebar-item"> <a className="sidebar-link has-arrow" href="#"
                            aria-expanded="false"><i data-feather="grid" className="feather-icon"></i><span
                                className="hide-menu">Bảng điều khiển </span></a>
                            <ul aria-expanded="false" className="collapse  first-level base-level-line">
                                <li className="sidebar-item"><a href="/users" className="sidebar-link"><span
                                    className="hide-menu">
                                    Dữ liệu người dùng
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/products" className="sidebar-link"><span className="hide-menu">
                                    Dữ liệu sản phẩm
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/categories" className="sidebar-link"><span className="hide-menu">
                                    Dữ liệu danh mục
                                        </span></a>
                                </li>
                                <li className="sidebar-item"><a href="/history" className="sidebar-link"><span
                                    className="hide-menu">
                                    Dữ liệu lịch sử
                                        </span></a>
                                </li>
                            </ul>
                        </li>


                    </ul>
                </nav>
            </div>
        </aside>
    );
}

export default Menu;