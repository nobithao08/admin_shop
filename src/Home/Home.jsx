import React from 'react';
import PropTypes from 'prop-types';

Home.propTypes = {

};

function Home(props) {
    return (
        <div className="page-wrapper">
            <div className="page-breadcrumb">
                <div className="row">
                    <div className="align-self-center">
                        <h3 className="page-title text-truncate text-dark font-weight-medium mb-1">Xin chào Admin</h3>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;