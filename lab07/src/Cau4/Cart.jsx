import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addItem, removeItem, updateQuantity } from '../slice/cartSlice';

const Cart = () => {
  // Dùng đúng key cartItems từ slice
  const cartItems = useSelector(state => state.cart.cartItems);
  const dispatch = useDispatch();

  // Kiểm tra an toàn trước khi dùng reduce
  const total = cartItems?.reduce((acc, item) => acc + item.price * item.quantity, 0) || 0;

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg">
      <h1 className="text-3xl font-bold text-gray-800 text-center mb-6">Giỏ Hàng</h1>
      <button
        className="w-full py-2 mb-6 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 transition-colors"
        onClick={() =>
          dispatch(addItem({ id: Date.now(), name: 'Sản phẩm mới', price: 100 }))
        }
      >
        Thêm sản phẩm
      </button>

      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <div key={item.id} className="flex justify-between items-center border-b py-4 px-2 mb-4 rounded-md shadow-sm hover:bg-gray-50">
            <span className="font-semibold text-gray-700">{item.name}</span>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">SL: {item.quantity} - Giá: {item.price}đ</span>
              <div className="flex gap-3">
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity + 1 }))}
                  className="px-4 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition"
                >
                  +
                </button>
                <button
                  onClick={() => dispatch(updateQuantity({ id: item.id, quantity: item.quantity - 1 }))}
                  className="px-4 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600 transition"
                >
                  -
                </button>
                <button
                  onClick={() => dispatch(removeItem(item.id))}
                  className="px-4 py-1 bg-red-500 text-white rounded-lg hover:bg-red-600 transition"
                >
                  Xoá
                </button>
              </div>
            </div>
          </div>
        ))
      ) : (
        <p className="text-center text-gray-600">Giỏ hàng của bạn hiện tại chưa có sản phẩm.</p>
      )}

      <p className="mt-6 text-xl font-semibold text-gray-800">Tổng tiền: <span className="text-green-500">{total}đ</span></p>
    </div>
  );
};

export default Cart;
