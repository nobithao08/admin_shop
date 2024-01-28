import React, { useEffect, useState } from 'react';
import queryString from 'query-string'
import ProductAPI from '../API/ProductAPI';
import Pagination from './Component/Pagination';
import { Link } from 'react-router-dom';

function Products(props) {

    const [products, setProducts] = useState([]);
    const [temp, setTemp] = useState([]);

    const [pagination, setPagination] = useState({
        page: '1',
        count: '8',
        search: '',
        category: 'all'
    })

    const onChangeText = (e) => {
        const value = e.target.value
        if (!value) {
            setProducts(temp);
            return;
        }
        const searchProducts = temp.filter(item => item.name.toUpperCase().indexOf(value.toUpperCase()) !== -1);
        setProducts(searchProducts)
    }

    //Tổng số trang
    const [totalPage, setTotalPage] = useState()

    const handlerChangePage = (value) => {
        setPagination({
            page: value,
            count: pagination.count,
            category: pagination.category
        })
    }

// const handleDelete = async (productId) => {
//     try {
//         console.log("ghj", productId)
//         const response = await ProductAPI.deleteProduct(productId);

//         if (response?.message === 'Xóa sản phẩm thành công') {
//             console.log('Sản phẩm đã được xóa thành công');
//         } else {
//             console.error('Lỗi khi xóa sản phẩm:', response.error || 'Xảy ra lỗi không xác định');
//         }
//     } catch (error) {
//         console.error('Lỗi khi xóa sản phẩm:', error);
//     }
// };
    

    useEffect(() => {
        const fetchAllData = async () => {

            const params = {
                page: pagination.page,
                count: pagination.count,
                // search: pagination.search,
                category: pagination.category
            }

            const query = queryString.stringify(params)

            const newQuery = '?' + query

            const { products, total } = await ProductAPI.getPagination(newQuery)
            setProducts(products);
            setTemp(products);

            //Tinh tong so trang = tong so sp/ sluong sp 1 trang
            const totalPage = Math.ceil(parseInt(total) / parseInt(pagination.count));
            setTotalPage(totalPage)
        }
        fetchAllData()
    }, [pagination])

    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="col-7 align-self-center">
                        <div className="d-flex align-items-center">
                            <nav aria-label="breadcrumb">
                                <ol className="breadcrumb m-0 p-0">
                                    <li className="breadcrumb-item"><a href="/" className="text-muted">Trang chủ</a></li>
                                    <li className="breadcrumb-item text-muted active" aria-current="page">Bảng</li>
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
                                <h4 className="card-title">Sản phẩm</h4>
                                <div className='d-flex justify-content-between'>
                                    <a
                                        href={'/products/view-edit'}
                                        style={{ cursor: 'pointer', color: 'white' }}
                                        className='btn btn-success'>
                                        Tạo sản phẩm
                                    </a>
                                </div>
                                
                                <br />
                                <div className="table-responsive">
                                    <table className="table table-striped table-bordered no-wrap">
                                        <thead>
                                            <tr>
                                                <th>ID</th>
                                                <th>Tên</th>
                                                <th>Giá</th>
                                                <th>Hình ảnh</th>
                                                <th>Mô tả</th>
                                                <th>Loại</th>
                                                <th>Sửa</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {
                                                products && products.map(value => (
                                                    <tr key={value._id}>
                                                        <td>{value._id}</td>
                                                        <td>{value.name}</td>
                                                        <td>{value.price}</td>
                                                        <td>
                                                            <img src={value.img1} style={{ height: '60px', width: '60px' }} alt="" />
                                                        </td>
                                                        <td>
                                                            <div className='line-clamp'>
                                                                {value?.description}
                                                            </div>
                                                        </td>
                                                        <td>{value.category}</td>
                                                        <td>
                                                            <a href={`/products/view-edit?id=${value._id}`} style={{ cursor: 'pointer', color: 'white' }} className="btn btn-success">Cập nhật</a>
                                                        </td>

                                                        {/* <td>
                                                            <a
                                                                onClick={() => handleDelete(value._id)}
                                                                style={{ cursor: 'pointer', color: 'white' }}
                                                                className="btn btn-danger"
                                                            >
                                                                Xóa
                                                            </a>
                                                        </td> */}
                                                    </tr>
                                                ))
                                            }
                                        </tbody>
                                    </table>
                                    <Pagination pagination={pagination} handlerChangePage={handlerChangePage} totalPage={totalPage} />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="footer text-center text-muted">
                All Rights Reserved by Adminmart.
            </footer>
        </div>
    );
}

export default Products;