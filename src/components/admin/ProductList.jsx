import React from 'react'
import { useCreateProductMutation, useDeleteProductMutation, useGetProductsQuery } from '../../slices/productsApiSlice'
import Button from '../ui/Button';
import Loader from '../layout/loader/Loader';
import { MdDelete, MdEditSquare, MdModeEditOutline } from 'react-icons/md';
import { useNavigate } from 'react-router-dom';

const ProductList = () => {

    const navigate = useNavigate();

    const { data: products, isLoading, error, refetch } = useGetProductsQuery();
    const [deleteProduct, { isLoading: deleteProductLoading, error: deleteProductErr }] = useDeleteProductMutation();

    const handleRowClick = (productId) => {
        navigate(`/products/${productId}`)
    }

    const [createProduct, { isLoading: productLoading, error: productError }] = useCreateProductMutation();

    const handleCreateProduct = async () => {
        const confirmCreate = window.confirm("Are you sure you want to create a new product?");
        if (!confirmCreate) return;

        try {
            const res = await createProduct().unwrap(); // unwrap returns actual data or throws
            const product = res;
            refetch();
            navigate(`/admin/products/${product._id}/edit`);
        } catch (error) {
            console.error("Error creating product:", error);
            alert("Failed to create the product. Please try again.");
        }
    };

    const handleDeleteClick = async (productId) => {
        const confirmDelete = window.confirm("Are you sure you want to delete this product?");
        if (!confirmDelete) return;

        try {
            console.log("Deleting product:", productId);
            await deleteProduct(productId).unwrap();  // if using RTK Query
            await refetch(); // Refresh the product list
        } catch (err) {
            console.error("Error deleting product:", err);
            alert("Failed to delete the product. Please try again.");
        }
    };

    const handleEditClick = async (productId) => {
        try {
            navigate(`/admin/products/${productId}/edit`);
            console.log("Editing product:", productId);
        } catch (err) {
            console.error("Error editing the product:", err);
            alert("Failed to edit the item");
        }
    };

    return (
        <div className="smcontainer md:container overflow-x-auto my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-20">
            <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Products</span>
                <Button content="Create Product"
                    style="max-w-fit p-2 border-[.1rem] bg-black border-black text-white hover:text-black hover:bg-white text-md rounded transition"
                    isDisabled={false} onClick={handleCreateProduct} />
            </div>
            <table className="my-4 min-w-full text-sm text-left text-gray-700 shadow-sm rounded-lg  border-[0.1px] border-gray-400'">
                <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">NAME</th>
                        <th className="px-6 py-4">PRICE</th>
                        <th className="px-6 py-4">STOCK</th>
                        <th className="px-6 py-4">CATEGORY</th>
                        <th className="px-6 py-4">BRAND</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>
                {
                    isLoading ? <Loader /> : error ? <span>Products Not Found</span> :
                        <tbody>

                            {products && products.map((product, idx) => (
                                <tr
                                    key={idx}
                                    onClick={() => handleRowClick(product._id)}
                                    className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                        } hover:bg-gray-100 transition cursor-pointer`}>
                                    <td className="px-6 py-4 text-blue-400">{product._id}</td>
                                    <td className="px-6 py-4 ">{product.name}</td>
                                    <td className="px-6 py-4">{product.price}</td>
                                    <td className="px-6 py-4">
                                        {
                                            product.countInStock > 0 ? 
                                                <span className='bg-green-100 text-green-800 p-1 rounded'>In Stock</span> :
                                                 <span className='bg-red-100 text-red-800 p-1 rounded'>Not in stock</span>
                                        }
                                    </td>
                                    <td className="px-6 py-4">{product.category}</td>
                                    <td className="px-6 py-4 text-blue-400 font-bold">{product.brand}</td>
                                    <td className="px-6 py-4 flex flex-row items-center justify-evenly gap-4">
                                        <MdModeEditOutline className='text-lg hover:bg-gray-300 rounded' onClick={(e) => {
                                            e.stopPropagation();
                                            handleEditClick(product._id)}} />
                                        <MdDelete className='text-lg hover:bg-gray-300 rounded' onClick={(e) => {
                                            e.stopPropagation();
                                            handleDeleteClick(product._id)}} />
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                }
            </table>
        </div>
    )
}

export default ProductList
