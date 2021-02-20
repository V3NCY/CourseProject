import  React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { pink, red, yellow } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';


const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: pink[500],
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className="card-deck justify-content-center">
      <div className="container mb-3">
      <h1> Новини </h1>
      </div>
    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            Н
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Инициатива на Изпълнителната агенция по горите"
        
      />
      <CardMedia
        className={classes.media}
        image="https://koprivshtitsa-bg.com/images/articles/365/thmb/3__26112020113601-800.jpg"
        title="Инициатива на Изпълнителната агенция по горите"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Повече:</Typography>
          <Typography paragraph>
            
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            Н
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Празник на картофа 2020"
        
      />
      <CardMedia
        className={classes.media}
        image="https://koprivshtitsa-bg.com/images/articles/362/thmb/plakat2-800.jpg"
        title="Празник на картофа 2020"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Повече:</Typography>
          <Typography paragraph>
            
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            Н
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Бизнес-ориентирано обучение"
        
      />
      <CardMedia
        className={classes.media}
        image="https://koprivshtitsa-bg.com/images/articles/360/thmb/Plakat-Koprivshtitsa.pdf_page_1-800.jpg"
        title="Бизнес-ориентирано обучение"
      />
      <CardContent>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography>
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          <FavoriteIcon />
        </IconButton>
        <IconButton aria-label="share">
          <ShareIcon />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <ExpandMoreIcon />
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Повече:</Typography>
          <Typography paragraph>
            Технически университет - Габрово, с подкрепата и седействието на община Копривщица, предлага за учебната 2020-2021г.за образователно - квалификационна степен "бакалавър" две специланости.
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>
   </div>
  );
};

