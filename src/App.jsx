import { Provider } from 'react-redux';
import AppLayout from './components/AppLayout';
import { DarkModeProvider } from './context/DarkMode';
import store from './components/TodoSclce';

function App() {
	return (
		<DarkModeProvider>
			<Provider store={store}>
				<AppLayout />
			</Provider>
		</DarkModeProvider>
	);
}

export default App;

// Todo

// <!-- Add dynamic number -->
// items left

// <!-- All
// Active
// Completed

// Clear Completed

// Drag and drop to reorder list -->
