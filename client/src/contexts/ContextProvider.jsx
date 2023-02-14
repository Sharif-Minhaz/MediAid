import { createContext, useContext, useState } from "react";

const StateContext = createContext();

export const ContextProvider = ({ children }) => {
	const [leftDrawerOpen, setLeftDrawerOpen] = useState(false);

	const handleLeftDrawerOpen = () => {
		setLeftDrawerOpen(true);
	};

	const handleLeftDrawerClose = () => {
		setLeftDrawerOpen(false);
	};

	return (
		<StateContext.Provider
			value={{
				leftDrawerOpen,
				handleLeftDrawerOpen,
				handleLeftDrawerClose,
			}}
		>
			{children}
		</StateContext.Provider>
	);
};

export const useStateContext = () => useContext(StateContext);
