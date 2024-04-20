import Layout from "./layouts";
import Page from "./pages";
const CustomRoutes = [
  {
    path: "/saved-designs",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.SavedDesigns,
  },

  {
    path: "/create-themne-1",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct2,
  },
  {
    path: "/create-themne-2",
    exact: true,
    layout: Layout.ProductLayout,
    component: Page.ThemeAddProduct,
  },
  {
    path: '/product-customizer',
    layout: Layout.ProductLayout,
    component: Page.AddImage,
    exact: true,
  },
  {
    path: '/product-preview',
    layout: Layout.PreviewLayout,
    component: Page.AddImage,
    exact: true,
  },

  {
    path: "/printing-methods",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PrintingMethods,
  },
  {
    path: "/theme-builder",
    exact: true,
    layout: Layout.ThemeLayout,
    component: Page.ThemeBuilder,
  },
  {
    path: "/theme-selector",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.ThemeSelector,
  },
  {
    path: "/pricing-rules",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.PricingRules,
  },
  {
    path: "/my-products",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.MyProducts,
  },
  {
    path: "/orders",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourOrders,
  },
  {
    path: "/dashboard",
    exact: true,
    layout: Layout.DashboardLayout,
    component: Page.Dashboard,
  },
  {
    path: "/settings",
    exact: true,
    layout: Layout.SettingsLayout,
    component: Page.Settings,
  },
  {
    path: "/your-profile",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.YourProfile,
  },
  {
    path: "/:page",
    exact: true,
    layout: Layout.DefaultLayout,
    component: Page.Dashboard,
  },
  {
    path: "/",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.Authenticate,
  },
  {
    path: "*",
    exact: true,
    layout: Layout.LoginLayout,
    component: Page.Authenticate,
  },

];
export default CustomRoutes;
