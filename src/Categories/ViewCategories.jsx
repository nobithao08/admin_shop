import React, { useEffect, useState } from "react";

import { useLocation } from "react-router-dom";
import ProductAPI from "../API/ProductAPI";

function useQuery() {
    const { search } = useLocation();
    return React.useMemo(() => new URLSearchParams(search), [search]);
}

const ViewCategories = () => {

    const categoryId = useQuery().get('id');
    const [category, setCategory] = useState({});

    useEffect(() => {
        if (categoryId) {
            (async () => {
                const res = await ProductAPI.getDetailCategory(categoryId);
                if (res._id) {
                    setCategory({...res});
                }
            })();
        }
    }, [])

    const handleCreateCategory = async () => {
        if (categoryId) {
            const res = await ProductAPI.updateCategory(categoryId, category);
            if (res?._id) {
                window.location.href = '/categories';
            }
        } else if (!categoryId) {
            const res = await ProductAPI.createCategory(category);
            if (res?._id) {
                setCategory({});
            }
        }
    }

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <h4 className="page-title text-truncate text-dark font-weight-medium mb-1">Tạo danh mục</h4>
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">Trang chủ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page"></li>
                                </ol>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-12">
                        <div className="card" style={{ paddingTop: '1.5rem' }}>
                            <div style={{ margin: '0 1.5rem 1.5rem' }}>
                                <h5 className="card-title">Tên danh mục</h5>
                                <div className='d-flex justify-content-between'>
                                    <input
                                        onChange={(e) => setCategory({ ...category, ['category']: e.target.value })}
                                        value={category?.category || ''}
                                        className="form-control w-50"
                                        type="text"
                                        placeholder="Nhập tên danh mục!"
                                    />
                                </div>
                            </div>
                            <div className="d-flex" style={{ margin: '0 1.5rem 1.5rem' }}>
                                <button
                                    disabled={!category?.category}
                                    onClick={handleCreateCategory}
                                    style={{ cursor: 'pointer', color: 'white' }}
                                    className='btn btn-success'>
                                    {categoryId ? 'Cập nhật' : 'Tạo'}
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Admin.
            </footer>
        </div>
    )
}

export default ViewCategories;