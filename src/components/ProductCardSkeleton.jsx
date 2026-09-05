function ProductCardSkeleton() {
    return (
        <div className="card h-100 border-0 shadow-sm rounded-4 overflow-hidden placeholder-glow">

            {/* Image */}
            <div className="bg-light p-4">
                <div
                    className="placeholder w-100"
                    style={{ height: "220px" }}
                ></div>
            </div>

            <div className="card-body d-flex flex-column p-4">

                {/* Category */}
                <p className="mb-2">
                    <span className="placeholder col-4"></span>
                </p>

                {/* Title */}
                <h5 className="mb-2">
                    <span className="placeholder col-9"></span>
                </h5>

                {/* Rating */}
                <p className="mb-2">
                    <span className="placeholder col-6"></span>
                </p>

                {/* Price */}
                <p className="mb-2">
                    <span className="placeholder col-5"></span>
                </p>

                {/* Stock */}
                <p className="mb-3">
                    <span className="placeholder col-6"></span>
                </p>

                {/* Button */}
                <button
                    className="btn btn-primary disabled placeholder w-100 mt-auto"
                    aria-hidden="true"
                ></button>

            </div>
        </div>
    );
}

export default ProductCardSkeleton;