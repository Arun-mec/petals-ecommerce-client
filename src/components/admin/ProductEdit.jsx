import React, { useEffect, useState } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import { useGetProductByIdQuery, useUpdateProductMutation, useUploadProductImageMutation } from '../../slices/productsApiSlice';
import Button from '../ui/Button';
import useForm from '../../hooks/useForm';
import ColorPicker, { ColorSelector } from '../ui/ColorPicker';
import SizePicker, { SizeSelector } from '../ui/SizePicker';
import FeaturesSelector from '../ui/FeaturesSelector';
import Loader from '../layout/loader/Loader';

const ProductEdit = () => {
    const navigate = useNavigate();
    const { id: productId } = useParams();

    const { data: productData, isLoading, error } = useGetProductByIdQuery(productId);
    const [updateProduct, { isLoading: isUpdating }] = useUpdateProductMutation();
    const [uploadProductImage , { isLoading : imageUploading}] = useUploadProductImageMutation();

    const inputStyle = 'w-full border border-gray-300 p-2 rounded outline-none';
    const labelStyle = 'text-sm font-medium text-gray-600';
    const subLabelStyle = 'text-xs text-gray-500';

    const [colors, setColors] = useState([]);
    const [sizes, setSizes] = useState([]);
    const [availableColors, setAvailableColors] = useState([]);
    const [availableSizes, setAvailableSizes] = useState([]);
    const [image, setImage] = useState("");

    const initialValue = {
        name: '',
        image: '',
        description: '',
        brand: '',
        category: '',
        price: 0,
        discount: 0,
        countInStock: 0,
        rating: 0,
        numReviews: 0,
        material: '',
        brandDetails: {
            name: '',
            origin: '',
            description: ''
        },
        colors: [],
        availableColors: [],
        sizes: [],
        availableSizes: [],
        features: []
    };

    const { values, handleChange, setFormValues } = useForm(initialValue);

    useEffect(() => {
        if (productData) {
            setFormValues({
                ...productData,
                colors: productData.colors || [],
                availableColors: productData.availableColors || [],
                sizes: productData.sizes || [],
                availableSizes: productData.availableSizes || []
            });
            setColors(productData.colors || []);
            setAvailableColors(productData.availableColors || []);
            setSizes(productData.sizes || []);
            setAvailableSizes(productData.availableSizes || []);
            setImage(productData.image || "");
        }
    }, [productData]);

    const handleUpdateProduct = async () => {
        try {
            const updatedData = {
                ...values,
                colors,
                availableColors,
                sizes,
                availableSizes,
                image
            };

            await updateProduct(updatedData).unwrap();
            navigate(`/products/${productData._id}`, { replace: true });
        } catch (err) {
            console.error('Update failed:', err);
        }
    };

    const handleUploadImage = async (e) => {
        const formData = new FormData();
        formData.append('image',e.target.files[0]);
        
        try {
            const res = await uploadProductImage(formData).unwrap();
            setImage(res.image);
            
        } catch (error) {
            console.log(error)
        }
    }

    if (isLoading || !productData) return <Loader />;
    if (error) return <p className="text-red-500 text-sm">Error loading product.</p>;

    return (
        <div className="smcontainter md:container mx-auto px-4 my-20">
            <Link to="/admin/products" className="text-blue-500 underline mb-4 inline-block">← Back</Link>

            <div className="flex justify-between items-center border-b border-b-gray-400 pb-2 mb-6">
                <h1 className="text-xl font-semibold">Edit Product</h1>
                <Button
                    content={isUpdating ? 'Updating...' : 'Update Product'}
                    onClick={handleUpdateProduct}
                    isDisabled={isUpdating}
                    style="px-4 py-2 bg-black text-white border border-black rounded hover:bg-white hover:text-black transition"
                />
            </div>

            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Left side */}
                <section className="flex flex-col gap-4">
                    <div>
                        <label className={labelStyle}>Name</label>
                        <input name="name" value={values.name} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Description</label>
                        <input name="description" value={values.description} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Brand</label>
                        <input name="brand" value={values.brand} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Category</label>
                        <input name="category" value={values.category} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Price</label>
                        <input name="price" value={values.price} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Count In Stock</label>
                        <input name="countInStock" value={values.countInStock} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Discount (%)</label>
                        <input name="discount" value={values.discount} onChange={handleChange} className={inputStyle} />
                    </div>

                    <div>
                        <label className={labelStyle}>Material</label>
                        <input name="material" value={values.material} onChange={handleChange} className={inputStyle} />
                    </div>
                    <div>
                        <label className={labelStyle}>Product Image</label>
                        <input name="name" value={image} onChange={handleChange} className={inputStyle} placeholder='Image Url'/>
                        <input type='file' name="image" onChange={(e) => handleUploadImage(e)} className={inputStyle} placeholder='Upload product image'/>
                    </div>
                </section>

                {/* Right side */}
                <section className="flex flex-col gap-4">
                    <div>
                        <label className={labelStyle}>Features</label>
                        <FeaturesSelector />
                    </div>

                    <div>
                        <label className={labelStyle}>Colors</label>
                        <p className={subLabelStyle}>Add custom colors</p>
                        <ColorPicker colors={colors} setColors={setColors} />
                    </div>

                    <div>
                        <label className={labelStyle}>Available Colors</label>
                        <p className={subLabelStyle}>Click to select or deselect</p>
                        <ColorSelector colors={colors} selectedColors={availableColors} setSelectedColors={setAvailableColors} />
                    </div>
                    <div>
                        <label className={labelStyle}>Sizes</label>
                        <SizePicker sizes={sizes} setSizes={setSizes} />
                    </div>

                    <div>
                        <label className={labelStyle}>Available Sizes</label>
                        <SizeSelector sizes={sizes} selectedSizes={availableSizes} setSelectedSizes={setAvailableSizes} />
                    </div>
                    <span className="font-medium border-b pb-1">Brand Details</span>
                    <div>
                        <label className={labelStyle}>Brand Name</label>
                        <input name="brandDetails.name" value={values.brandDetails.name} onChange={handleChange} className={inputStyle} />
                    </div>
                    <div>
                        <label className={labelStyle}>Brand Origin</label>
                        <input name="brandDetails.origin" value={values.brandDetails.origin} onChange={handleChange} className={inputStyle} />
                    </div>
                    <div>
                        <label className={labelStyle}>Brand Description</label>
                        <input name="brandDetails.description" value={values.brandDetails.description} onChange={handleChange} className={inputStyle} />
                    </div>
                </section>
            </form>
        </div>
    );
};

export default ProductEdit;
