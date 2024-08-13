import React, { useEffect, useState } from 'react';
import { Table } from 'antd';
import axios from 'axios';

const ProductDetails = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get('https://dummyjson.com/products')
      .then(response => {
        setProducts(response.data.products);
      })
      .catch(error => {
        console.error("There was an error fetching the data!", error);
      });
  }, []);

  const columns = [
    {
      title: 'Title',
      dataIndex: 'title',
      sorter: (a, b) => a.title.localeCompare(b.title),
    },
    {
      title: 'Description',
      dataIndex: 'description',
    },
    {
      title: 'Price',
      dataIndex: 'price',
      sorter: (a, b) => a.price - b.price,
    },
    {
      title: 'Discount Percentage',
      dataIndex: 'discountPercentage',
      sorter: (a, b) => a.discountPercentage - b.discountPercentage,
    },
    {
      title: 'Brand',
      dataIndex: 'brand',
    },
    {
      title: 'Category',
      dataIndex: 'category',
    },
    {
      title: 'Image',
      dataIndex: 'thumbnail',
      render: (text) => <img src={text} alt="product" width="50" />,
    }
  ];

  return (
    <Table 
      dataSource={products} 
      columns={columns} 
      pagination={{ pageSize: 5 }} 
      rowKey="id" 
    />
  );
};

export default ProductDetails;