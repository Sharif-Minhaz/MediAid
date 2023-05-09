import { Button, Grid, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { IconMedicineSyrup } from "@tabler/icons-react";
import { useSelector } from "react-redux";
import { drawerStatus } from "../../features/drawer/drawerSlice";

const HomeIntro = () => {
	const drawerOpen = useSelector(drawerStatus);

	const navigate = useNavigate();

	return (
		<Grid container spacing={2}>
			<Grid item md={8} sm={6.8} xm={12}>
				<Stack height="100%" px="45px" pb={3} justifyContent="center" position="relative">
					<img src="/images/pattern-l.png" alt="dots" className="text-dots" />
					<Typography
						variant="h4"
						component="h4"
						className="heading-intro"
						fontWeight={500}
						sx={{
							color: "#442281",
							fontSize: {
								lg: "2.125rem",
								md: drawerOpen ? "1.7rem" : "2.125",
								sm: "1.6rem",
								xs: "1.8rem",
							},
							pt: {
								sm: "auto",
								xs: "1.5rem",
							},
						}}
					>
						A Digital Platform For Medicine And Healthcare, Providing Access To Those In
						Need.
					</Typography>
					<Typography variant="body1" className="heading-description" marginY="20px">
						We help people who can't afford medical care get the help they need by
						providing medicine and healthcare services online.
					</Typography>
					<Button
						sx={{
							width: "200px",
							color: "whitesmoke",
							p: "9px",
							mt: "6px",
							borderTopLeftRadius: "17px",
							borderBottomRightRadius: "17px",
						}}
						variant="contained"
						disableElevation
						onClick={() => navigate("/medicines")}
						size="large"
						endIcon={<IconMedicineSyrup size={20} />}
					>
						Get Medicine
					</Button>
				</Stack>
			</Grid>
			<Grid item md={4} sm={5.2} xs={12} pr="25px" pb="25px">
				<Stack height="100%" justifyContent="center" position="relative">
					<img src="/images/pattern-r.png" alt="dots" className="img-dots" />
					<img src="/images/doctor.png" className="doctor-img" />
				</Stack>
			</Grid>
		</Grid>
	);
};

export default HomeIntro;
