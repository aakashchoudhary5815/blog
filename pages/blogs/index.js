import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import PropTypes from 'prop-types';
import { useEffect, useState } from 'react'
import Stack from '@mui/material/Stack';

// export const getStaticProps = async () => {
//   const uri = 'Dev'
//   const res = await fetch(`http://localhost:1337/api/blogs?filters[category][$eq]=${uri}&populate=*`);
//   const data = await res.json();

//   console.log("data: ", data)

//   return {
//     props: { blogs: data }
//   }
// }

const useFetch = (url) => {
  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true)

          try{
              const res = await fetch(url)
              const json = await res.json()
              setData(json)
              setLoading(false)
          }
          catch (error) {
              setError(error)
              setLoading(false)
          }
      }
      fetchData()
  }, [url])

  return { loading, error, data }
}


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

Item.propTypes = {
  sx: PropTypes.oneOfType([
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.func, PropTypes.object, PropTypes.bool]),
    ),
    PropTypes.func,
    PropTypes.object,
  ]),
};
// <div>
//   <h1>All Ninjas</h1>
//   {ninjas.data.map(ninja => (
//     <Link href={'/ninjas/' + ninja.id} key={ninja.id}>
//       <a className={styles.single}>
//         <h3>{ ninja.attributes.name }</h3>
//       </a>
//     </Link>
//   ))}
// </div>

const Ninjas = () => {
  const [url, setUrl] = useState("");
  // const { loading, error, data } = useFetch(`http://localhost:1337/api/blogs?filters[category][$eq]=${category}&populate=*`);

  const [data, setData] = useState(null)
  const [error, setError] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
      const fetchData = async () => {
          setLoading(true)

          try{
              const res = await fetch(url)
              const json = await res.json()
              setData(json)
              setLoading(false)
          }
          catch (error) {
              setError(error)
              console.log(error);
              setLoading(false)
          }
      }
      fetchData()
  }, [url])

  function updateCategory(categorySelected){
    setUrl(`http://localhost:1337/api/blogs?filters[category][$eq]=${categorySelected}&populate=*`);
  }

  if(loading) return <p>Loading....</p>
  if (error) return <p>Error :(</p>
  
  return (

  <div style={{ width: '100%' }}>
    <Stack spacing={2} direction="row">
      <Button variant="text" onClick={updateCategory} value="Python">Python</Button>
      <Button variant="contained" onClick={updateCategory} value="Dev">Dev</Button>
      <Button variant="outlined" onClick={updateCategory} value="Development">Development</Button>
    </Stack>
    <Box sx={{
          display: 'flex',
          flexWrap: 'wrap',
          p: 1,
          m: 1,
          bgcolor: 'background.paper',
          maxWidth: '100%',
          justifyContent: 'space-evenly',
          borderRadius: 1,
        }}>
      {data.data.map(blog => (
        <Item key={blog.id}>
          <Card sx={{ maxWidth: 250 }}>
            <CardMedia
              component="img"
              alt="green iguana"
              height="140"
              image={"http://localhost:1337" + blog.attributes.image.data.attributes.url}
            />
            <CardActions>
              <Button size="small">{blog.attributes.category}</Button>
            </CardActions>
            <CardContent>
              <Typography gutterBottom variant="h5" component="div">
                {blog.attributes.heading}
              </Typography>
              <Typography variant="body2" color="text.secondary">
                {blog.attributes.desc}
              </Typography>
            </CardContent>
          </Card>
        </Item>
      ))}
    </Box>
  </div>
  );
}

export default Ninjas;