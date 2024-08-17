
const MyfoodCard = ({food}) => {
    return (
        <div>
            <div className="overflow-x-auto">
                <table className="table">

                    <tbody>

                        <tr>

                            <td>
                                <div className="flex items-center gap-3">
                                    <div className="avatar">
                                        <div className="mask mask-squircle h-12 w-12">
                                            <img
                                                src={food.food_image}
                                                alt="Avatar Tailwind CSS Component" />
                                        </div>
                                    </div>
                                    <div>
                                        <div className="font-bold">{food.food_name}</div>
                                        <div className="text-sm opacity-50">{food.food_category}</div>
                                    </div>
                                </div>
                            </td>
                            <td>
                                {food.addBy}
                                <br />
                                <span className="badge badge-ghost badge-sm">{food.email}</span>
                            </td>
                            <td>${food.price}</td>
                            <th>
                                <button className="btn btn-outline text-white bg-[#EA6A12] border-none btn-xl">Update</button>
                            </th>
                        </tr>



                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default MyfoodCard;