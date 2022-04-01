import * as React from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Typography from '@mui/material/Typography';

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
  ...theme.typography.body2,
  padding: theme.spacing(1),
  color: theme.palette.text.secondary,
}));

export default function BasicGrid() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <Item>
            <Image src="/dummy.jpg" alt="site logo" width={500} height={400} />
          </Item>
        </Grid>
        <Grid item xs={6}>
          <Item>
            <Typography variant="overline" display="block" gutterBottom>
              30th March, 2022
            </Typography>
            <Typography variant="h2" component="div" gutterBottom>
              Dummy Head will be placed here
            </Typography>
            <Typography variant="body1" gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
              blanditiis tenetur unde suscipit, quam beatae rerum inventore consectetur,
              neque doloribus, cupiditate numquam dignissimos laborum fugiat deleniti? Eum
              quasi quidem quibusdam.
            </Typography>
          </Item>
        </Grid>
      </Grid>
    </Box>
  );
}
