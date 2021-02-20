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
import { pink } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import { CardLink } from 'reactstrap';


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

export default function CultureReviewCard() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    
    <div className="card-deck justify-content-center">
      <div className="container mb-3">
        <h1>Култура</h1>
      <h2> Събития и прояви</h2>
      </div>
    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            С
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Тържества по случай 142 години от Освобождението на България"
        
      />
      <CardMedia
        className={classes.media}
        image="https://koprivshtitsa-bg.com/images/articles/333/thmb/1582710331832-800.jpg"
        title="142 години от Освобождението на България"
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
            Уважаеми съграждани и туристи, каним Ви на честване на 142 години от Освобождението на България
            с нашата незабравима програма.
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            С
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Програма 141 години свободна България"
        
      />
      <CardMedia
        className={classes.media}
        image="https://rnews.bg/wp-content/uploads/2016/03/shipka-rusko-turska-voina.jpg"
        title="Програма 141 години свободна България"
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
            Уважаеми съграждани и туристи, каним Ви на честване на 141 години от Свободна България
            с нашата незабравима програма.
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            С
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="144 Години от избухването на Априлското въстание"
        
      />
      <CardMedia
        className={classes.media}
        image="https://abritvs.com/wp-content/uploads/2015/03/Svobodna-Bulgaria.jpg"
        title="144 Години от избухването на Априлското въстание"
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
            <CardLink href="https://bg.wikipedia.org/wiki/Априлско_въстание">Априлско въстание</CardLink>
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="art" className={classes.avatar}>
            С
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title='Гайдарско надсвирване „Златна Българска Гайда"'
        
      />
      <CardMedia
        className={classes.media}
        image="https://scontent.fsof3-1.fna.fbcdn.net/v/t1.0-9/61740768_2175387199247657_4629990473258237952_n.jpg?_nc_cat=109&ccb=3&_nc_sid=340051&_nc_ohc=0eFx90RQ1Y0AX9dIaEp&_nc_ht=scontent.fsof3-1.fna&oh=5dc4ff21998f046fa1182410e1856570&oe=60482CE4"
        title='Гайдарско надсвирване „Златна Българска Гайда"'
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
            Заповядайте на 06 Септември 2019г. на Гайдарско надсвирване „Златна Българска Гайда"!
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>

    <Card className={classes.root} className="mb-3 mr-3" style={{ width: '20rem'}}>
      <CardHeader
        avatar={
          <Avatar aria-label="event" className={classes.avatar}>
            П
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title="Тържества по случай 142 години от Освобождението на България"
       
      />
      <CardMedia
        className={classes.media}
        image="https://koprivshtitsa-bg.com/images/articles/312/thmb/%D0%9F%D0%9E%D0%9A%D0%90%D0%9D%D0%90%20%D0%9A%D0%BE%D0%BF%D1%80%D0%B8%D0%B2%D1%89%D0%B8%D1%86%D0%B0-800.jpg"
        title="Постоянна изложба от наградени детски рисунки"
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
            Уважаеми съграждани и туристи, каним Ви на весела детска изложба.
          </Typography>         
        </CardContent>
      </Collapse>
    </Card>
    </div>
    
  );
}
