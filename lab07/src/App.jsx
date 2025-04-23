import React, { useState } from 'react';
import Counter from './Cau1/Counter';
import { Provider } from 'react-redux';
import store from './store/store';
import CounterUseReducer from './ReduxTanggiam/components/CounterUseReducer';
import './App.css';
import storeRedux from './store/storeRedux';
import CounterUseRedux from './ReduxTanggiam/components/CounterUseRedux';
import CounterUseReduxToolkit from './ReduxTanggiam/components/CounterUseReduxToolkit';
import Todo from './Cau2/TodoList';
import ThemeToggle from './Cau3/ThemeToggle';
import Cart from './Cau4/Cart';
import Auth from './Cau5/Auth';

const App = () => {
  const [selectedFeature, setSelectedFeature] = useState('Home');

  const renderSelectedFeature = () => {
    switch (selectedFeature) {
      case 'Counter':
        return <Counter />;
      case 'Todo':
        return <Todo />;
      case 'ThemeToggle':
        return <ThemeToggle />;
      case 'Cart':
        return <Cart />;
      case 'Auth':
        return <Auth />;
      case 'Redux':
        return (
          <>
            <Provider store={storeRedux}>
              <div className="space-y-4">
                <CounterUseReducer />
                <CounterUseRedux />
              </div>
            </Provider>
            <Provider store={store}>
              <div className="mt-4">
                <CounterUseReduxToolkit />
              </div>
            </Provider>
          </>
        );
      default:
        return (
          <div className="text-center text-lg font-semibold text-gray-700">
            Chọn một chức năng từ thanh bên để bắt đầu.
          </div>
        );
    }
  };

  const features = [
    { label: '🔢 Counter', value: 'Counter' },
    { label: '📝 Todo List', value: 'Todo' },
    { label: '🎨 Theme', value: 'ThemeToggle' },
    { label: '🛒 Cart', value: 'Cart' },
    { label: '🔐 Auth', value: 'Auth' },
    { label: '⚙️ Redux Demos', value: 'Redux' },
  ];

  return (
    <div className="min-h-screen flex bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white transition-all duration-500">
      {/* Sidebar */}
      <aside className="w-64 bg-white dark:bg-gray-800 shadow-lg p-6 space-y-4">
        <h2 className="text-xl font-bold text-center">Chọn chức năng</h2>
        <nav className="space-y-2">
          {features.map((item) => (
            <button
              key={item.value}
              className={`w-full text-left px-4 py-2 rounded-lg font-medium transition-all duration-300 hover:bg-blue-100 dark:hover:bg-gray-700 ${
                selectedFeature === item.value ? 'bg-blue-500 text-white dark:bg-blue-600' : ''
              }`}
              onClick={() => setSelectedFeature(item.value)}
            >
              {item.label}
            </button>
          ))}
        </nav>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        <Provider store={store}>
          {renderSelectedFeature()}
        </Provider>
      </main>
    </div>
  );
};

export default App;
