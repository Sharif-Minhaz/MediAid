import { IconButton, Menu, MenuItem } from "@mui/material";
import { IconDotsVertical } from "@tabler/icons-react";
import { useState } from "react";

const options = ["Flag inappropriate", "Mark as spam"];
const options2 = ["Edit", "Delete"];

const ITEM_HEIGHT = 48;

export default function ReviewMenu({ currentUser }) {
	const [anchorEl, setAnchorEl] = useState(null);
	const open = Boolean(anchorEl);
	const handleClick = (event) => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<>
			<IconButton
				aria-label="more"
				id="long-button"
				aria-controls={open ? "long-menu" : undefined}
				aria-expanded={open ? "true" : undefined}
				aria-haspopup="true"
				onClick={handleClick}
			>
				<IconDotsVertical size={20} cursor="pointer" />
			</IconButton>
			<Menu
				id="long-menu"
				MenuListProps={{
					"aria-labelledby": "long-button",
				}}
				anchorEl={anchorEl}
				open={open}
				onClose={handleClose}
				PaperProps={{
					style: {
						maxHeight: ITEM_HEIGHT * 4.5,
						width: "20ch",
					},
				}}
			>
				{(currentUser ? options2 : options).map((option) => (
					<MenuItem key={option} onClick={handleClose}>
						{option}
					</MenuItem>
				))}
			</Menu>
		</>
	);
}
