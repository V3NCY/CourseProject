import Home from './pages/Home';
import Culture from './pages/Culture';
import MainLayout from './components/layouts/Default';
import HomeLayout from './components/layouts/Home';
import Tourism from './pages/Tourism';
import Museums from './pages/Museums';
import News from './pages/News';
import Prices from "./pages/Prices";
import Contacts from "./pages/Contacts";
import Hotels from "./pages/Hotels";
import Transport from "./pages/Transport";
import HotelContainer from "./Hotel/HotelContainer";
import HotelsContainer from "./Hotel/HotelsContainer";

import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

const routes = [
  {
    path: '/',
    exact: true,
    main: () => <HomeLayout>
      <Home></Home>
    </HomeLayout>
  },
  {
    path: '/culture',
    exact: true,
    main: () => <MainLayout>
      <Culture></Culture>
    </MainLayout>
  },
  {
    path: '/tourism',
    main: () => <MainLayout>
      <Tourism></Tourism>
    </MainLayout>
  },
  {
    path: '/museums',
    main: () => <MainLayout>
      <Museums></Museums>
    </MainLayout>
  },
  {
    path: '/hotels',
    main: () => <MainLayout>
      <Hotels></Hotels>
    </MainLayout>
  },
  {
    path: '/news',
    main: () => <MainLayout>
      <News></News>
    </MainLayout>
  },
  {
    path: '/prices',
    main: () => <MainLayout>
      <Prices></Prices>
    </MainLayout>
  },
  {
    path: '/transport',
    main: () => <MainLayout>
      <Transport></Transport>
    </MainLayout>
  },
  {
    path: '/contacts',
    main: () => <MainLayout>
      <Contacts></Contacts>
    </MainLayout>
  },
]

const getRoutes = () => {
  const routeComponents = routes.map((route, index) => {
    return <Route
      key={index}
      exact={route.exact}
      path={route.path}
    >
      {route.main}
    </Route>
  })
  return routeComponents
}


function App() {
  return (
    <Router>
        <Switch>
          {getRoutes()}
        </Switch>
        <main className="container">
          <Switch>
            <Route path="/hotels" exact component={HotelsContainer} />
            <Route path="/hotels/:id" component={HotelContainer} />
          </Switch>
        </main>
    </Router>
  );
}

export default App;