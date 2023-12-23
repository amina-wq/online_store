import React, {useEffect, useState} from 'react';
import api from '../services/api';
import {BasketCard} from '../components/BasketCard';
import ReactPaginate from 'react-paginate';
import '../App.css';

export const BasketList = () => {
    const [baskets, setBaskets] = useState([]);
    const [currentPage, setCurrentPage] = useState(0);
    const [totalPages, setTotalPages] = useState(0);
    const itemsPerPage = 9;

    useEffect(() => {
        const fetchBaskets = async () => {
            try {
                const response = await api.get(`/api/v1/baskets/?page=${currentPage + 1}`);
                setBaskets(response.data.results);
                setTotalPages(Math.ceil(response.data.count / itemsPerPage));
            } catch (error) {
                console.error('Error fetching baskets:', error);
            }
        };

        fetchBaskets();
    }, [currentPage]);

    const handlePageClick = (data) => {
        setCurrentPage(data.selected);
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    return (
        <div className="content">
            <div className="basket-list">
                {baskets.map((basket) => (
                    <BasketCard key={basket.id} basket={basket}/>
                ))}
            </div>
            <ReactPaginate
                previousLabel={'<- Previous'}
                nextLabel={'Next ->'}
                breakLabel={'...'}
                pageCount={totalPages}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={handlePageClick}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
            />
        </div>
    );
};
