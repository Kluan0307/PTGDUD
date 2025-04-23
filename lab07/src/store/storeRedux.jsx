//tao store trung tam quan ly toan bo state cua ud
// Bạn sẽ gửi action đến store bằng dispatch(action).

import { createStore } from "redux";
import counterReducer from "../ReduxTanggiam/reducers/CounterReducer";

// Khi action được gửi, store sẽ dùng reducer (counterReducer) để tạo ra state mới.

// Sau đó, các component sử dụng useSelector() sẽ tự cập nhật lại giao diện nếu có thay đổi.

 const store =createStore(counterReducer);

 export default store;

