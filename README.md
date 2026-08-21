SHOPLY — E-COMMERCE REACT PROJECT
Team: Mohamed & Shams
Technology: React + Vite + Bootstrap + Axios + Zustand + Formik/Yup + DummyJSON API

==================================================
SPRINT 1 — PROJECT SETUP & UI FOUNDATION
==================================================

Goal:
Set up the project, routing, Bootstrap, and the main UI structure.

Mohamed:
- Set up React + Vite project.
- Configure Bootstrap and Bootstrap Icons.
- Create Navbar.
- Create Footer.
- Create Home page.
- Create reusable ProductCard component.
- Create basic responsive layout.

Shams:
- Configure React Router.
- Create routing structure for all pages.
- Create Login page.
- Create Register page.
- Create Cart page structure.
- Create Wishlist page structure.
- Create Checkout page structure.
- Create Orders page structure.
- Create initial Zustand stores.

Pages:
/
/products
/products/:id
/login
/register
/cart
/wishlist
/checkout
/orders

Deliverable:
- Project runs successfully.
- Bootstrap UI is working.
- Navigation between pages works.
- Basic pages/components are created.


==================================================
SPRINT 2 — PRODUCTS & DUMMYJSON API
==================================================

Goal:
Connect the application to DummyJSON and implement the product browsing experience.

Mohamed:
- Connect Products API using Axios.
- Display products dynamically.
- Create Product Details page.
- Display product images, title, price, rating, stock, etc.
- Implement product search.
- Implement product categories.
- Create related products section.

Shams:
- Create productStore using Zustand.
- Implement category filtering.
- Implement price filtering.
- Implement rating filtering.
- Implement sorting.
- Implement pagination.
- Handle loading states.
- Handle API error states.

API:
GET /products
GET /products/:id
GET /products/search?q=
GET /products/categories
GET /products/category/:category
GET /products?limit=&skip=

Deliverable:
- Products come from DummyJSON.
- Users can search products.
- Users can filter and sort products.
- Users can open product details.
- Pagination works.


==================================================
SPRINT 3 — CART & WISHLIST
==================================================

Goal:
Implement the complete shopping functionality.

Mohamed:
- Add "Add to Cart" functionality to ProductCard.
- Add "Add to Cart" to Product Details.
- Create QuantitySelector component.
- Create CartItem component.
- Create responsive Cart UI.
- Create Wishlist product cards.
- Add wishlist buttons to products.

Shams:
- Complete cartStore using Zustand.
- Implement addToCart().
- Implement removeFromCart().
- Implement increaseQuantity().
- Implement decreaseQuantity().
- Calculate subtotal.
- Calculate shipping.
- Calculate total.
- Create wishlistStore.
- Implement add/remove wishlist.
- Save cart and wishlist to localStorage.

Deliverable:
Product
   ↓
Add to Cart
   ↓
Cart
   ↓
Increase / Decrease Quantity
   ↓
Remove
   ↓
Calculate Total

And:

Product
   ↓
Add to Wishlist
   ↓
Wishlist
   ↓
Remove / Add to Cart


==================================================
SPRINT 4 — AUTHENTICATION & CHECKOUT
==================================================

Goal:
Build the complete user authentication and checkout flow.

Mohamed:
- Improve Login UI.
- Improve Register UI.
- Create Formik forms.
- Add Yup validation.
- Create validation error messages.
- Create responsive authentication pages.
- Create checkout UI.
- Create Order Summary component.

Shams:
- Connect authentication to DummyJSON API.
- Create authStore using Zustand.
- Implement login.
- Store authentication state.
- Implement logout.
- Create ProtectedRoute.
- Protect Checkout and Orders pages.
- Implement checkout form.
- Implement shipping information.
- Implement delivery method.
- Implement payment method UI.
- Implement Place Order functionality.

API:
POST /auth/login
GET /auth/me

Checkout Flow:
Login
  ↓
Products
  ↓
Add to Cart
  ↓
Cart
  ↓
Checkout
  ↓
Customer Information
  ↓
Shipping
  ↓
Payment Method
  ↓
Place Order


==================================================
SPRINT 5 — ORDERS, TESTING & FINALIZATION
==================================================

Goal:
Complete the project, fix bugs, improve responsiveness, and prepare the final presentation.

Mohamed:
- Complete Orders page UI.
- Create OrderCard component.
- Create Order Details UI.
- Improve responsive design.
- Improve Home page.
- Add empty states.
- Add loading/skeleton states.
- Improve animations and UI consistency.
- Final Bootstrap styling.

Shams:
- Complete orderStore.
- Store created orders.
- Display order history.
- Implement order status.
- Test authentication.
- Test cart calculations.
- Test checkout.
- Test protected routes.
- Fix functional bugs.
- Check localStorage persistence.

Both Mohamed & Shams:
- Test Desktop layout.
- Test Tablet layout.
- Test Mobile layout.
- Test all routes.
- Test API requests.
- Fix console errors.
- Fix responsive problems.
- Review code.
- Clean unused code.
- Resolve Git merge conflicts.
- Update README.
- Prepare final presentation/demo.
- Push final version to GitHub.

Final Deliverable:

HOME
  ↓
PRODUCTS
  ↓
PRODUCT DETAILS
  ↓
CART
  ↓
CHECKOUT
  ↓
ORDER
  ↓
ORDERS HISTORY


==================================================
FINAL TECHNOLOGIES
==================================================

Frontend:
- React
- Vite
- Bootstrap 5
- Bootstrap Icons

Routing:
- React Router

API:
- Axios
- DummyJSON API

State Management:
- Zustand

Forms:
- Formik
- Yup

Storage:
- LocalStorage

Version Control:
- Git
- GitHub


==================================================
TEAM RESPONSIBILITIES SUMMARY
==================================================

MOHAMED
---------
Sprint 1 → UI Foundation
Sprint 2 → Products & Product Details
Sprint 3 → Cart UI & Product Actions
Sprint 4 → Forms & Checkout UI
Sprint 5 → Orders UI & Responsive Design


SHAMS
------
Sprint 1 → Routing & Page Structure
Sprint 2 → Product State, Filters & Pagination
Sprint 3 → Cart/Wishlist Logic
Sprint 4 → Authentication & Checkout Logic
Sprint 5 → Orders Logic, Testing & Debugging


BOTH
----
- Git/GitHub
- Code Review
- Integration
- Testing
- Bug Fixing
- Responsive Design
- Final Presentation
