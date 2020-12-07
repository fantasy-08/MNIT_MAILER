import React, { useEffect } from 'react';
import { Link as RouterLink, useLocation } from 'react-router-dom';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Divider,
  Drawer,
  Hidden,
  List,
  makeStyles
} from '@material-ui/core';
import NavItem from './NavItem';
import ShoppingBasketIcon from '@material-ui/icons/ShoppingBasket';
import AssignmentIndIcon from '@material-ui/icons/AssignmentInd';
import AccountTreeIcon from '@material-ui/icons/AccountTree';
import CategoryIcon from '@material-ui/icons/Category';
import BusinessIcon from '@material-ui/icons/Business';
import CachedIcon from '@material-ui/icons/Cached';
import CardTravelIcon from '@material-ui/icons/CardTravel';
import DashboardIcon from '@material-ui/icons/Dashboard';
import AddShoppingCartSharpIcon from '@material-ui/icons/AddShoppingCartSharp';
import ShopIcon from '@material-ui/icons/Shop';
import LocalShippingIcon from '@material-ui/icons/LocalShipping';
import FindReplaceIcon from '@material-ui/icons/FindReplace';

const items = [
  {
    href: '/app/dashboard',
    icon: DashboardIcon,
    title: 'Dashboard'
  },
  {
    href: '/app/suppliers&customers',
    icon: CachedIcon,
    title: 'Supplier/Customer',
    children: [
      {
        href: '/app/suppliers&customers/suppliers',
        icon: ShoppingBasketIcon,
        title: 'Suppliers',
      },
      {
        href: '/app/suppliers&customers/customers',
        icon: AssignmentIndIcon,
        title: 'Customers',
      }
    ]
  },
  {
    href: '/app/products',
    icon: ShopIcon,
    title: 'Products',
    children: [
      {
        href: '/app/products/category',
        icon: CategoryIcon,
        title: 'Category',
      },
      {
        href: '/app/products/raw_material',
        icon: AccountTreeIcon,
        title: 'Raw Material',
      },
      {
        href: '/app/products/product',
        icon: BusinessIcon,
        title: 'Product',
      }
    ]
  },
  {
    href: '/app/inventories',
    icon: CardTravelIcon,
    title: 'Inventories',
    children: [
      {
        href: '/app/inventories/inventory',
        icon: AddShoppingCartSharpIcon,
        title: 'Inventory',
      }
    ]
  },
  {
    href: '/app/oms',
    icon: LocalShippingIcon,
    title: 'OMS',
    children: [
      {
        href: '/app/oms/dashboard',
        icon: DashboardIcon,
        title: 'DashBoard',
      },
      {
        href: '/app/oms/searchaddedit',
        icon: FindReplaceIcon,
        title: 'Search/Add',
      }
    ]
  }
];

const useStyles = makeStyles(() => ({
  mobileDrawer: {
    width: 256
  },
  desktopDrawer: {
    width: 256,
    top: 64,
    height: 'calc(100% - 64px)'
  },
  avatar: {
    cursor: 'pointer',
    width: 64,
    height: 64
  }
}));

const NavBar = ({ onMobileClose, openMobile }) => {
  const classes = useStyles();
  const location = useLocation();

  useEffect(() => {
    if (openMobile && onMobileClose) {
      onMobileClose();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const content = (
    <Box
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Divider />
      <Box p={2}>
        <List>
          {items.map((item) => {
            if (!item.children) {
              return (
                <>
                  <br />
                  <NavItem
                    extend={false}
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                  />
                </>
              )
            }
            else {
              return (
                <>
                  <br />
                  <NavItem
                    extend={true}
                    href={item.href}
                    key={item.title}
                    title={item.title}
                    icon={item.icon}
                    data={item}
                  />
                </>
              )
            }
          }
          )}
        </List>
      </Box>
      <Box flexGrow={1} />

    </Box>
  );

  return (
    <>
      <Hidden lgUp>
        <Drawer
          anchor="left"
          classes={{ paper: classes.mobileDrawer }}
          onClose={onMobileClose}
          open={openMobile}
          variant="temporary"
        >
          {content}
        </Drawer>
      </Hidden>
      <Hidden mdDown>
        <Drawer
          anchor="left"
          classes={{ paper: classes.desktopDrawer }}
          open
          variant="persistent"
        >
          {content}
        </Drawer>
      </Hidden>
    </>
  );
};

NavBar.propTypes = {
  onMobileClose: PropTypes.func,
  openMobile: PropTypes.bool
};

NavBar.defaultProps = {
  onMobileClose: () => { },
  openMobile: false
};

export default NavBar;
