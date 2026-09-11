Shoply

A modern and responsive e-commerce web application built with React.js.

Shoply allows users to browse products, search and filter products, view product details, manage their cart and wishlist, and authenticate using a mock API.


Live Demo

https://shoply-mocha-eight.vercel.app



Features

Home
- Responsive navigation bar
- Hero section
- Featured products
- Shop by category
- Best-selling products
- Promotional sections
- Responsive design

Products
- Display products dynamically from API
- Search products
- Filter by category
- Price filtering
- Rating information
- Product sorting
- Pagination
- Responsive product grid

Product Details
- Product images
- Product title and description
- Price and discount
- Rating
- Stock information
- Quantity selection
- Add to cart
- Add to wishlist
- Related products

Wishlist
- Add products to wishlist
- Remove products from wishlist
- View saved products

Cart
- Add products to cart
- Increase and decrease quantity
- Remove products
- Calculate total price
- View cart summary

Authentication
- User login
- Authentication state
- Store user information
- Store authentication token
- Logout functionality

Checkout
- Order summary
- Customer information
- Checkout process
- Order confirmation


Technologies Used

- React.js
- JavaScript (ES6+)
- React Router
- Zustand
- Axios
- Bootstrap
- Bootstrap Icons
- DummyJSON API
- Vite
- Git
- GitHub


API

Shoply uses DummyJSON as a mock REST API.

Products

https://dummyjson.com/products

Categories

https://dummyjson.com/products/categories

Search Products

https://dummyjson.com/products/search?q={query}

Product Details

https://dummyjson.com/products/{id}

Category Products

https://dummyjson.com/products/category/{category}

Users

https://dummyjson.com/users

Login

https://dummyjson.com/auth/login


Project Structure

shoply/
│
├── public/
│
├── src/
│   ├── assets/
│   │
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Footer.jsx
│   │   ├── ProductCard.jsx
│   │   └── ...
│   │
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Products.jsx
│   │   ├── ProductDetails.jsx
│   │   ├── Login.jsx
│   │   ├── Register.jsx
│   │   ├── Cart.jsx
│   │   ├── Wishlist.jsx
│   │   ├── Checkout.jsx
│   │   └── Orders.jsx
│   │
│   ├── store/
│   │   ├── productStore.js
│   │   ├── cartStore.js
│   │   ├── wishlistStore.js
│   │   └── authStore.js
│   │
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── vite.config.js
└── README.md


Installation

1. Clone the repository

git clone https://github.com/aboelenin-tech/shoply.git

2. Navigate to the project

cd shoply

3. Install dependencies

npm install

4. Start the development server

npm run dev


Team

This project was developed by:

- Mohamed
- Shams

Mohamed

- Product browsing
- Products API integration
- Product listing
- Product search
- Category filtering
- Product details
- API integration using Axios

Shams

- Authentication
- Cart
- Wishlist
- Checkout
- Orders
- Other application features


Project Goals

- Build a complete React e-commerce application
- Practice component-based development
- Work with REST APIs
- Learn state management with Zustand
- Implement React Router navigation
- Implement authentication
- Create reusable components
- Build a responsive UI with Bootstrap
- Practice Git and GitHub collaboration


Responsive Design

Shoply is designed to work across different screen sizes:

- Desktop
- Laptop
- Tablet
- Mobile


Future Improvements

- Real payment gateway integration
- Real backend authentication
- Persistent orders database
- Product reviews
- Advanced filtering
- Dark mode
- Admin dashboard
- Real-time notifications


License

This project was created for educational and portfolio purposes.

If you like this project, feel free to give the repository a star!
