import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom';
import { useDeleteUserMutation, useGetAllUsersQuery } from '../../slices/userApiSlice';
import { LoaderContext } from '../../contexts/LoaderContext';
import { MdDelete, MdModeEditOutline } from 'react-icons/md';

const UserList = () => {

    const navigate = useNavigate();

    const { data: users, isLoading, error , refetch} = useGetAllUsersQuery();
    const [deleteUser, { isLoading : userDeleteLoading, error : userDeleteError}] = useDeleteUserMutation();

    const { showLoader, hideLoader } = useContext(LoaderContext);

    const handleRowClick = (userId) => {
        if (userId) {
            navigate(`/admin/user/${userId}`);
        }
    }

    if (isLoading) {
        return <div>Loading...</div>
    }

    const handleEditClick = () => {

    }

    const handleDeleteClick = async (userId) => {
        if (window.confirm("Are you sure you want to delete the user?")) {
            try {
                console.log("Deleting user:" + userId);
                await deleteUser(userId).unwrap();  // if using RTK Query
                await refetch(); // Refresh the product list
            } catch (err) {
                console.error("Error deleting product:", err);
                alert("Failed to delete the user. "+ err?.data?.message || err?.message);
            }
        }
    }

    return (
        <div className="smcontainer md:container overflow-x-auto my-[1rem] md:my-[2rem] p-2 md:p-4 py-20 md:py-20">
            <div className="w-full flex flex-row justify-between items-center border-b-[0.1px] border-b-gray-400 p-1">
                <span className='text-xl'>Users</span>
            </div>
            <table className="my-4 min-w-full text-sm text-left text-gray-700 shadow-sm rounded-lg border-[0.1px] border-gray-200'">
                <thead className="bg-gray-100 text-gray-800 uppercase text-xs">
                    <tr>
                        <th className="px-6 py-4">ID</th>
                        <th className="px-6 py-4">USERNAME</th>
                        <th className="px-6 py-4">EMAIL</th>
                        <th className="px-6 py-4">NUMBER</th>
                        <th className="px-6 py-4">ISADMIN</th>
                        <th className="px-6 py-4"></th>
                    </tr>
                </thead>

                <tbody>
                    {users && users.map((user, idx) => (
                        <tr
                            key={idx}
                            onClick={() => handleRowClick(user._id)}
                            className={`${idx % 2 === 0 ? "bg-white" : "bg-gray-50"
                                } hover:bg-gray-100 transition cursor-pointer`}>
                            <td className="px-6 py-4 text-blue-400">{user._id}</td>
                            <td className="px-6 py-4">{user.username}</td>
                            <td className="px-6 py-4">{user.email}</td>
                            <td className="px-6 py-4">{user.number}</td>
                            <td className="px-6 py-4">
                                {
                                    user.isAdmin ?
                                        <span className='bg-green-100 text-green-800 p-1 rounded'>Yes</span> :
                                        <span className='bg-red-100 text-red-800 p-1 rounded'>No</span>

                                }
                            </td>
                            <td className="px-6 py-4 flex flex-row items-center justify-evenly gap-4">
                                <MdModeEditOutline className='text-lg hover:bg-gray-300 rounded' onClick={(e) => {
                                    e.stopPropagation();
                                    handleEditClick(user._id)
                                }} />
                                <MdDelete className='text-lg hover:bg-gray-300 rounded' onClick={(e) => {
                                    e.stopPropagation();
                                    handleDeleteClick(user._id)
                                }} />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default UserList