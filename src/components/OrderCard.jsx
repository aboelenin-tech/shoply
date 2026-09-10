
function OrderCard({ order }) {
    return (
        <div className=" border-0 shadow-sm rounded-4 p-4 mb-3">

            <div className="d-flex justify-content-between align-items-center mb-3">
                <div>
                    <h5 className="fw-bold mb-1">
                        Order #{order.id}
                    </h5>

                    <small className="text-muted">
                        {order.date}
                    </small>
                </div>

                <span className="badge bg-warning text-dark rounded-pill px-3 py-2">
                    {order.status}
                </span>
            </div>

            <div className="d-flex gap-2 mb-3">
                {order.items.slice(0, 3).map((item) => (
                    <img
                        key={item.id}
                        src={item.thumbnail}
                        alt={item.title}
                        width="70"
                        height="70"
                        className="rounded-3 object-fit-cover"
                    />
                ))}

                {order.items.length > 3 && (
                    <div className="d-flex align-items-center px-2">
                        <span className="text-muted">
                            +{order.items.length - 3} more
                        </span>
                    </div>
                )}
            </div>

            <div className="d-flex justify-content-between align-items-center">

                <div>
                    <small className="text-muted d-block">
                        Total
                    </small>

                    <strong>
                        ${order.total.toFixed(2)}
                    </strong>
                </div>

                <button className="btn btn-dark rounded-pill px-4">
                    View Details
                </button>

            </div>

        </div>
    );
}

export default OrderCard;
