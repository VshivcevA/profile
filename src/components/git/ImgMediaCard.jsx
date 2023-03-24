import {
  Card,
  CardActions,
  CardContent,
  Button,
  Typography,
} from "@mui/material/";
import styled from "styled-components";

const Iframe = styled.iframe`
  width: 100%;
  height: 400px;
  box-sizing: border-box;
`;
const TopicsList = styled.ul`
  padding: 0;
  margin: 0;
  display: flex;
  list-style: none;
`;
const TopicsItem = styled.li`
  margin-right: 10px;
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
          <Button size="small">Deploy</Button>
        </a>
      );
    }
  }
  function GitUrl() {
    if (giturl) {
      return (
        <a href={giturl}>
          <Button size="small">GitHub</Button>
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
        <TopicsList>
          {topics.map((topic, index) => {
            return <TopicsItem key={index}>{topic}</TopicsItem>;
          })}
        </TopicsList>
      );
    }
  }

  return (
    <Card sx={{ margin: 1 }}>
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {description}
          <Topics />
        </Typography>
      </CardContent>
      <Preview />
      <CardActions>
        <GitUrl />
        <DeployUrl />
      </CardActions>
    </Card>
  );
}
