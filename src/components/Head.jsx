import { useDarkMode } from '../context/DarkMode';
import Icons from './Icons';

function Head() {
	const { isDarkMode, toggleDarkMode } = useDarkMode();
	console.log(isDarkMode);
	return (
		<header className="text-gray-50  uppercase tracking-wide font-semibold text-xl flex items-center justify-between">
			<h1>todo</h1>
			<button onClick={() => toggleDarkMode()} className="">
				{isDarkMode ? <Icons name="sun" /> : <Icons name="moon" />}
			</button>
		</header>
	);
}

export default Head;
