import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(true);

	const handleLeftDrawerOpen = () => {
		setLeftDrawerOpen(true);
	};

	const handleLeftDrawerClose = () => {
		setLeftDrawerOpen(false);
	};

	const handleLeftDrawerToggle = () => {
		setLeftDrawerOpen((prev) => !prev);
	};

	return (
		<StateContext.Provider
			value={{
				leftDrawerOpen,
				handleLeftDrawerOpen,
				handleLeftDrawerClose,
				handleLeftDrawerToggle,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
