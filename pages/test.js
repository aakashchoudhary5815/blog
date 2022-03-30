import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import InsightsIcon from '@mui/icons-material/Insights';
import DoneIcon from '@mui/icons-material/Done';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { styled } from '@mui/material/styles';

function Item(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                border: '1px solid',
                borderColor: (theme) =>
                    theme.palette.mode === 'dark' ? 'grey.800' : 'grey.300',
                borderRadius: 2,
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

function CustomItem(props) {
    const { sx, ...other } = props;
    return (
        <Box
            sx={{
                p: 1,
                m: 1,
                // bgcolor: (theme) => (theme.palette.mode === 'dark' ? '#101010' : 'grey.100'),
                color: (theme) => (theme.palette.mode === 'dark' ? 'grey.300' : 'grey.800'),
                fontSize: '0.875rem',
                fontWeight: '700',
                ...sx,
            }}
            {...other}
        />
    );
}

const Demo = styled('div')(({ theme }) => ({
    backgroundColor: theme.palette.background.paper,
}));

Item.propTypes = {
    sx: PropTypes.oneOfType([
        PropTypes.arrayOf(
            PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
        ),
        PropTypes.func,
        PropTypes.object,
    ]),
};

export default function FlexWrap() {
    const [dense, setDense] = React.useState(false);
    return (
        <div style={{ width: '100%' }}>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    p: 1,
                    m: 1,
                    bgcolor: 'background.paper',
                    borderRadius: 500,
                    justifyContent: 'space-evenly',
                    maxWidth: "85%",
                    borderRadius: 10,
                }}
            >
                <CustomItem style={{}}>
                    <Typography variant="h6" gutterBottom component="div">
                        ADVANCED
                    </Typography>
                    <Typography variant="h6" gutterBottom component="div" style={{ marginTop: 10 }}>
                        Professionals
                    </Typography>
                    <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 15 }}>
                        No-code freelancers and development agencies are <br />
                        disrupting the software market with innovative, <br />
                        performance-optimized solutions. Over the course <br />
                        of 8 sessions, our Professionals Bootcamp will <br />
                        help you master the ins and outs of the Bubble <br />
                        platform, teaching you the most advanced Bubble <br />
                        functions and polishing your platform knowledge <br />
                        so that you can develop client products with <br />
                        confidence.
                    </Typography>
                    <Stack spacing={2} direction="row" style={{ marginTop: 20 }}>
                        <Button variant="contained">Enroll Now</Button>
                        <Button variant="outlined">Learn More</Button>
                    </Stack>
                    <Typography variant="subtitle2" gutterBottom component="div" style={{ color: 'blue', marginTop: 20 }}>
                        <InsightsIcon />
                        40+ students have completed this Bootcamp
                    </Typography>
                </CustomItem>
                <Item>
                    <Typography variant="h6" gutterBottom component="div">
                        What you'll learn?
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}} />
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}}/>
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}} />
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>

                    <Typography variant="h6" gutterBottom component="div">
                        What you'll learn?
                    </Typography>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}} />
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}}/>
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>
                    <Stack spacing={2} direction="row">
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            <DoneIcon style={{color:'blue'}} />
                        </Typography>
                        
                        <Typography variant="subtitle2" gutterBottom component="div" style={{ marginTop: 5 }}>
                            Deep dive into the full spectrum of Bubble’s <br /> capabilities
                        </Typography>
                    </Stack>
                </Item>
            </Box>
        </div>
    );
}
