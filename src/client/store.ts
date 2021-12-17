const dummyUser = {
    username: "bob@example.com",
    password: "123",
    name: "bob smith",
    address: "321 street nyc"

}
const storage = window.sessionStorage;

const getItem = (item) => JSON.parse(storage.getItem(item));
const setItem = (key, val) => storage.setItem(key, JSON.stringify(val));

const getUser = () => JSON.parse(storage.getItem("user"));
const setUser = (user?) => storage.setItem("user", user ? JSON.stringify(user) : JSON.stringify(dummyUser));
const logout = () => {
    if (!confirm("Are you sure you want to log out?") || !getUser()) return;
    storage.clear();
    window.location.href = "/";
}

const initCart = () => setItem("cart", []);
const getCart = () => getItem("cart");
const setCart = (newCart) => setItem("cart", newCart);
const addToCart = (book) => {
    const curCart = getCart();
    setCart([...curCart, book]);
}
const removeFromCart = (ISBN: number) => {
    const curCart = getCart();
    setCart(curCart.filter((book) => book.ISBN === ISBN));
}

const store = {
    getUser,
    setUser,
    logout,
    initCart,
    addToCart,
    removeFromCart,
    clearCart: initCart
}
