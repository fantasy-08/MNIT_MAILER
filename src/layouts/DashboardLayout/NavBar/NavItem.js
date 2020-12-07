import React from 'react';
import { NavLink as RouterLink, Link } from 'react-router-dom';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Button,
  ListItem,
  makeStyles,
  List,
  ListItemIcon,
  ListItemText,
  Collapse
} from '@material-ui/core';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
const useStyles = makeStyles((theme) => ({
  item: {
    display: 'flex',
    paddingTop: 0,
    paddingBottom: 0
  },
  button: {
    color: theme.palette.text.secondary,
    fontWeight: theme.typography.fontWeightMedium,
    justifyContent: 'flex-start',
    letterSpacing: 0,
    padding: '10px 8px',
    textTransform: 'none',
    width: '100%'
  },
  icon: {
    marginRight: theme.spacing(1)
  },
  title: {
    marginRight: 'auto'
  },
  active: {
    color: theme.palette.primary.main,
    '& $title': {
      fontWeight: theme.typography.fontWeightMedium
    },
    '& $icon': {
      color: theme.palette.primary.main
    }
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NavItem = ({
  className,
  href,
  icon: Icon,
  title,
  extend,
  data,
  ...rest
}) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);

  const handleClick = () => {
    setOpen(!open);
  };

  if (!extend)
    return (
      <ListItem
        className={clsx(classes.item, className)}
        disableGutters
        {...rest}
      >
        <Button
          activeClassName={classes.active}
          className={classes.button}
          component={RouterLink}
          to={href}
        >
        <ListItemIcon>
          {Icon && (
            <Icon
              className={classes.icon}
              size="20"
            />
            )}
        </ListItemIcon>
          <span className={classes.title}>
            {title}
          </span>
        </Button>
      </ListItem>
    );
  else
    return (
      <>
        <ListItem 
          className={clsx(classes.item, className)}
          disableGutters
          {...rest}
          button onClick={handleClick}>
          <ListItemIcon>
            {Icon && (
              <Icon
                className={classes.icon}
                size="20"
              />
            )}
          </ListItemIcon>
          <ListItemText primary={title} />
          {open ? <ExpandLess /> : <ExpandMore />}
        </ListItem>
        <Collapse in={open} timeout="auto" unmountOnExit>
          <List component="div" disablePadding>
            {
              data.children.map((Item) => {
                const Icon = Item.icon,href = Item.href,title = Item.title;
                return (
                  <ListItem
                    className={clsx(classes.item, className)}
                    disableGutters
                    {...rest}                    
                    button component={Link} to={href} className={classes.nested}>
                    <ListItemIcon>
                      {Icon && (
                        <Icon
                          className={classes.icon}
                          size="20" />
                      )}
                    </ListItemIcon>
                    <span className={classes.title}>
                      {title}
                    </span>
                  </ListItem>
                )
              })
            }
          </List>
        </Collapse>
      </>
    );
};

NavItem.propTypes = {
  className: PropTypes.string,
  href: PropTypes.string,
  icon: PropTypes.elementType,
  title: PropTypes.string
};

export default NavItem;

