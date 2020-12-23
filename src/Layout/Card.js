import React from 'react';
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
import { red } from '@material-ui/core/colors';
// import FavoriteIcon from '@material-ui/icons/Favorite';
// import ShareIcon from '@material-ui/icons/Share';
// import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
// import MoreVertIcon from '@material-ui/icons/MoreVert';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 500,
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
    backgroundColor: red[500],
  },
}));

export default function CustomCard(props) {
  const {appearance,birthday,category,image,name,nicname,occupation,portrayed,status}=props;
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const getfirstChar = (char) => {
    char =char.charAt(0)
    return char
  }
  return (
    <Card className={classes.root} onClick={props.onClick}>
      <CardHeader
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
             {getfirstChar(name)} 
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            {/* <MoreVertIcon /> */}
          </IconButton>
        }
        title={name}
        subheader={<p>{nicname}</p>}
      />
      <CardMedia
        className={classes.media}
        image={image}
        title="Paella dish"
      />
      <CardContent>
         <Typography variant="body2" color="textSecondary" component="p">
         My Name :{name}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Nickname:{nicname}
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="p">
        Birthday: {birthday}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        Category:{category}
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="p">
        Status:{status}
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="p">
        Occupation:{occupation.map((item,index)=><>{item}</>)}
        </Typography> 
        <Typography variant="body2" color="textSecondary" component="p">
        Appearance:{appearance}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
         Portrayed:{portrayed}
        </Typography>
        <Typography variant="body2" color="textSecondary" component="p">
        </Typography> 
      </CardContent>
      <CardActions disableSpacing>
        <IconButton aria-label="add to favorites">
          {/* <FavoriteIcon /> */}
        </IconButton>
        <IconButton aria-label="share">
          {/* <ShareIcon /> */}
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          {/* <ExpandMoreIcon /> */} 
        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        <CardContent>
          <Typography paragraph>Method:</Typography>
          <Typography paragraph>
            {category}
         
          </Typography>  
        </CardContent>
      </Collapse>
    </Card>
  );
}
