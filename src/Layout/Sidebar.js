import React,{useState} from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import { fade} from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import InputBase from '@material-ui/core/InputBase';
import { Card } from '@material-ui/core';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import MailIcon from '@material-ui/icons/Mail';
import {connect} from "react-redux";
import SearchIcon from '@material-ui/icons/Search';
import {setSearchCharacterByName,} from "../redux/actions/searchAction";
import {getCharacterByCategoryAction} from "../redux/actions/characterByCategory";
import {Link} from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginRight: theme.spacing(2),
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(3),
      width: 'auto',
    },
  },
  searchIcon: {
    padding: theme.spacing(0, 2),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
  right:{
    marginLeft:400
  }
}));

 function PersistentDrawerLeft(props) {

  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  const [searchInput,setSearchInput]=useState();
  const [searchCategoryInput,setSearchCategoryInput]= useState();

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleSearchChange = (e) => {
    setSearchInput(e.target.value)
    props.setSearchCharacterByName(searchInput)
  };

  const handleCategoryChange = (e) => {
    setSearchCategoryInput(e.target.value)
    props.getCharacterByCategoryAction(searchCategoryInput)
  };

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar>
       
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            className={clsx(classes.menuButton, open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
         Character Panel
         </Typography>
          <div
            style={{marginLeft:50}}
           className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
         
              placeholder="Filter By Name"
              onChange={handleSearchChange}
              value={searchInput}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
        
          <Typography noWrap>
           
           Filtered Characters By Name: {props.selectedName.length} 
         </Typography>
         
          <div
            style={{marginLeft:50}}
           className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
            
              placeholder="Filter  By Category"
              onChange={handleCategoryChange}
              value={searchCategoryInput}
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'search' }}
            />
          </div>
          
         <Typography noWrap>
        Filter CharactersBy Category:{props.selectedCategory.length} 
        </Typography>
        
         <Typography className={classes.right}>
            Total Characters : {props.characters.length}
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="left"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'ltr' ? 
            <ChevronLeftIcon />
             : 
           <ChevronRightIcon />
            }
          </IconButton>
        </div>
        <Divider />

        <List>
          <Link to="/">
          {['characters'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? 
              <InboxIcon /> 
              : 
              <MailIcon />
              }
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
          </Link>
        </List>
        <Divider />
        <List>
          {['Episodes','quotes','deaths'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>    
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} />
       <Card>
         {props.children}
       </Card>
      </main>
    </div>
  );
}

const mapStateToProps = state => {
  return {
      selectedCategory: state.categoryReducer.fetch_category ,
      selectedName: state.searchdata.search_character,
      characters:state.characterdata.fetch_Characters
  };
};

const mapDispatchToProps = dispatch => ({
  setSearchCharacterByName: name => dispatch(setSearchCharacterByName(name)),
  getCharacterByCategoryAction: category => dispatch(getCharacterByCategoryAction(category))
});



export default  connect(mapStateToProps,mapDispatchToProps)(PersistentDrawerLeft)