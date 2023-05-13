import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
  Chip,
  Stack,
} from "@mui/material/";
import styled from "styled-components";

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
`;

export default function ImgMediaCard({
  name,
  description,
  giturl,
  depurl,
  topics,
}) {
  function DeployUrl() {
    if (depurl) {
      return (
        <a href={depurl}>
          <Button variant="outlined" size="small">
            Deploy
          </Button>
        </a>
      );
    }
  }
  function GitUrl() {
    if (giturl) {
      return (
        <a href={giturl}>
          <Button variant="outlined" size="small">
            GitHub
          </Button>
        </a>
      );
    }
  }
  function Preview() {
    if (depurl) {
      return <Iframe src={depurl} loading="lazy" />;
    }
  }

  function Topics() {
    if (topics) {
      return (
        <Stack direction="row" spacing={1}>
          {topics.map((topic, index) => {
            return <Chip key={index} label={topic} variant="outlined" />;
          })}
        </Stack>
      );
    }
  }

  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {name}
        </Typography>
        <Typography variant="body6" color="text.secondary" component="p" mb={2}>
          {description}
        </Typography>
        <Topics />
      </CardContent>
      <Preview />
      <CardActions>
        <GitUrl />
        <DeployUrl />
      </CardActions>
    </Card>
  );
}
