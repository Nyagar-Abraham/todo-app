import Main from './Main';

function AppLayout() {
	return (
		<div className="transition-all duration-200 h-screen grid grid-rows-2 font-sans dark:bg-slate-700">
			<div className="bg-mobile-light dark:bg-mobile-dark xs:bg-desktop-light xs:dark:bg-desktop-dark w-full  bg-cover h-full bg-no-repeat"></div>
			<Main />
		</div>
	);
}

export default AppLayout;
