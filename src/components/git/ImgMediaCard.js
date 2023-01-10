import * as React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
// import imagegh from "../../moks/img/GitHub-Mark-120px-plus.png"

export default function ImgMediaCard({name, description,url}) {
  return (
    <Card sx={{ maxWidth: 345 ,margin: 1}}>
      {/*<CardMedia*/}
      {/*  component="img"*/}
      {/*  alt="GitHub"*/}
      {/*  height="100"*/}
      {/*  width="100"*/}
      {/*  image={imagegh}*/}
      {/*/>*/}
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
        </Typography>
      </CardContent>
      <CardActions>
        {/*<Button size="small">Share</Button>*/}
        <a href={url}>
          <Button size="small">GitHub link</Button>
        </a>
      </CardActions>
    </Card>
  );
}
