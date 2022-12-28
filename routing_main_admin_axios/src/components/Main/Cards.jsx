import * as React from 'react';
import Loading from "./Loading";
import { Link } from 'react-router-dom'

import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';


function Cards({ data, loading, error, getData }) {
  function createData(
    id,
    name,
    unitPrice,
    unitsInStock
  ) {
    return { id, name, unitPrice, unitsInStock };
  }

  const products = data.map((d) => createData(
    d.id,
    d.name,
    d.unitPrice,
    d.unitsInStock
  ));

  return (
    <>
      <h4><span style={{ color: "Red", fontWeight: 900 }}>TEACHER</span> if you wanna learn more information about any product, you can click any of "LEARN MORE" buttons</h4>
      <Box sx={{ flexGrow: 1, padding: "50px" }}>
        {loading && <Loading />}
        {error && "Error"}

        <Grid container spacing={4}>

          {products
            .sort((a, b) => a.id - b.id)
            .map((product) => (
              <Grid item xs={6} md={3}>
                <Card sx={{ minWidth: 275 }}>
                  <CardContent>
                    <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                      Card Number: {product.id}
                    </Typography>
                    <Typography variant="h5" component="div">
                      Product Name:
                    </Typography>
                    <Typography sx={{ mb: 1.5 }} color="text.secondary">
                      {product.name}
                    </Typography>
                    <Typography style={{ fontWeight: 900 }} variant="body2">
                      Price of Product:
                      <br />
                      `${product.unitPrice}`
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button size="small"><Link style={{ textDecoration: 'none' }} to={`/product/${product.id}`}>Learn More</Link></Button>
                  </CardActions>
                </Card>
              </Grid>
            ))}
        </Grid>
      </Box>
    </>
  )
}

export default Cards