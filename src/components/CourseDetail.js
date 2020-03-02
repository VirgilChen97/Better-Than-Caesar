import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Chip, Typography, Button, CardContent, CardActions, Card, Grid, Divider, Select, MenuItem } from '@material-ui/core';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import CancelRoundedIcon from '@material-ui/icons/CancelRounded';
import AccessTimeIcon from '@material-ui/icons/AccessTime';
import AssignmentIndOutlinedIcon from '@material-ui/icons/AssignmentIndOutlined';
import LocationOnIcon from '@material-ui/icons/LocationOn';

const useStyles = makeStyles({
	root: {
		width: "100%",
		margin: '10px'
	},
	title: {
		fontSize: 14,
	},
	pos: {
		marginBottom: 12,
	},
	enroll: {
		color: "green"
	}
});

const CourseDetail = props => {
	const classes = useStyles();
	const [year, setYear] = React.useState('2019')
	const [quarter, setQuarter] = React.useState('fall')

	const handleYearChange = event => {
		setYear(event.target.value);
	};

	const handleQuarterChange = event => {
		setQuarter(event.target.value);
	};

	if (props.course) {
		return (
			<Card className={classes.root}>
				<CardActions>
					<Button onClick={() => props.setOpen(null)}>Back</Button>
				</CardActions>
				<Divider />
				<CardContent>
					<Typography variant="h4">
						{props.course.courseNumber}
					</Typography>
					<Typography variant="h6" gutterBottom>
						{props.course.title}
					</Typography>
					<Grid container alignItems="center" spacing={1}>
						<Grid item container spacing={1}>
							<Grid item>
								{
									props.course.prerequisite ? <Chip variant="outlined" label="Prerequisite" color="primary" size="small" icon={<CheckCircleRoundedIcon />} />
										: <Chip variant="outlined" label="Prerequisite" color="secondary" size="small" icon={<CancelRoundedIcon />} />
								}
							</Grid>
							<Grid item>
								{
									props.course.inDegree ? <Chip variant="outlined" label="Degree Requirement" color="primary" size="small" icon={<CheckCircleRoundedIcon />} />
										: <Chip variant="outlined" label="Degree Requirement" size="small" icon={<CancelRoundedIcon />} />
								}
							</Grid>
						</Grid>
					</Grid>
				</CardContent>
				<Divider />
				<CardContent>
					<Grid container alignItems="center" spacing={1} style={{ color: "grey" }}>
						<Grid item xs>
							<AccessTimeIcon fontSize="small" />
						</Grid>
						<Grid item xs={11}>
							{props.course.weekday.toUpperCase()} {props.course.startTime} - {props.course.endTime}
						</Grid>
						<Grid item xs>
							<AssignmentIndOutlinedIcon fontSize="small" />
						</Grid>
						<Grid item xs={11}>
							{props.course.instructor}
						</Grid>
						<Grid item xs>
							<LocationOnIcon fontSize="small" />
						</Grid>
						<Grid item xs={11}>
							{props.course.location}
						</Grid>
					</Grid>
				</CardContent>
				<CardContent>
					<Typography variant="body1" gutterBottom>
						{props.course.description}
					</Typography>
				</CardContent>
				<Divider />
				<CardContent>
					<Grid container spacing={2} justify="center">
						<Grid item>
							<Select value={year} onChange={handleYearChange}>
								{Object.keys(props.course.info).map(thisYear => <MenuItem key={thisYear} value={thisYear}>{thisYear}</MenuItem>)}
							</Select>
						</Grid>
						<Grid item>
							<Select value={quarter} onChange={handleQuarterChange}>
								{Object.keys(props.course.info[year]).map(thisQuarter => <MenuItem key={thisQuarter} value={thisQuarter}>{thisQuarter}</MenuItem>)}
							</Select>
						</Grid>
					</Grid>
				</CardContent>
				<CardActions>
					<Grid container justify="flex-end" style={{ width: "100%" }}>
						<Grid item style={{ width: 'auto' }}>
							<Button size="small">Learn More</Button>
						</Grid>
					</Grid>
				</CardActions>

			</Card>
		)
	}
}

export default CourseDetail