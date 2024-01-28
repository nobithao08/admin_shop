import React from 'react';
import Logotext from '../Image/logo_admin.png'

function Header(props) {
    return (
        <header className="topbar" data-navbarbg="skin6">
            <nav className="navbar top-navbar navbar-expand-md">
                <div className="navbar-header" data-logobg="skin6">
                    <a className="nav-toggler waves-effect waves-light d-block d-md-none" href="#"><i
                        className="ti-menu ti-close"></i></a>
                    <div className="navbar-brand">
                        <a href="#">
                            <span className="logo-admin">
                                <img src={Logotext} alt="homepage" width={100} className="dark-logo" />
                            </span>
                        </a>
                    </div>
                    <a className="topbartoggler d-block d-md-none waves-effect waves-light" href="#"
                        data-toggle="collapse" data-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"><i
                            className="ti-more"></i></a>
                </div>
                <div className="navbar-collapse collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav float-left mr-auto ml-3 pl-1">
                    </ul>
                    <ul className="navbar-nav float-right">
                        <li className="nav-item dropdown">
                            <a className="nav-link dropdown-toggle" href="#" data-toggle="dropdown"
                                aria-haspopup="true" aria-expanded="false">
                                <img src="../assets/images/users/admin.jpg" alt="user" className="rounded-circle"
                                    width="40" />
                                <span className="ml-2 d-none d-lg-inline-block"><span>Hello,</span> <span
                                    className="text-dark">ADMIN</span> <i data-feather="chevron-down"
                                        className="svg-icon"></i></span>
                            </a>
                            <div className="dropdown-menu dropdown-menu-right user-dd animated flipInY">
                                <a className="dropdown-item" href="#"><i data-feather="power"
                                    className="svg-icon mr-2 ml-1"></i>
                                    Đăng xuất</a>
                            </div>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}

export default Header;