import { Button } from "@mui/material";

const AuthSubmitButton = ({ disable = false, children }) => {
	return (
		<Button
			disabled={disable}
			disableElevation
			type="submit"
			fullWidth
			variant="contained"
			sx={{
				mt: 3,
				mb: 2,
				p: "9px",
				color: "white",
				"&:hover": { backgroundColor: "primary.light" },
			}}
		>
			{children}
		</Button>
	);
};

export default AuthSubmitButton;
