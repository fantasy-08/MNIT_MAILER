import React from 'react';
import { Navigate } from 'react-router-dom';
import DashboardLayout from 'src/layouts/DashboardLayout';
import MainLayout from 'src/layouts/MainLayout';
import DashboardView from 'src/views/reports/DashboardView';
import LoginView from 'src/views/auth/LoginView';
import NotFoundView from 'src/views/errors/NotFoundView';
import RegisterView from 'src/views/auth/RegisterView';
import Product from 'src/views/products/product/Product';
import Category from 'src/views/products/category/Category';
import RawMaterial from 'src/views/products/raw_material/RawMaterial';
import Suppliers from 'src/views/suppliers&customers/suppliers/Index'
import Customers from 'src/views/suppliers&customers/customers/Index'
import Inventory from 'src/views/Inventory/Index';
import OMSDashboard from 'src/views/OMS/DashBoard/Index';
import OMSSearchAndEdit from 'src/views/OMS/SearchAddEdit/Index';

const routes = [
  {
    path: 'app',
    element: <DashboardLayout />,
    children: [
      { path: 'oms/dashboard', element: <OMSDashboard /> },
      { path: 'oms/searchaddedit', element: <OMSSearchAndEdit /> },
      { path: 'inventories/inventory', element: <Inventory /> },
      { path: 'suppliers&customers/suppliers', element: <Suppliers /> },
      { path: 'suppliers&customers/customers', element: <Customers /> },
      { path: 'products/product', element: <Product /> },
      { path: 'products/category', element: <Category /> },
      { path: 'products/raw_material', element: <RawMaterial /> },      
      { path: 'dashboard', element: <DashboardView /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  },
  {
    path: '/',
    element: <MainLayout />,
    children: [
      { path: 'login', element: <LoginView /> },
      { path: 'register', element: <RegisterView /> },
      { path: '404', element: <NotFoundView /> },
      { path: '/', element: <Navigate to="/app/dashboard" /> },
      { path: '*', element: <Navigate to="/404" /> }
    ]
  }
];

export default routes;
