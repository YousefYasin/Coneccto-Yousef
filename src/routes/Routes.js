import React from "react";
import { Route, Switch } from "react-router-dom";
import { Order } from "../components/order";
import Iinial from '../components/inial/Iinial'
const Routes = ({ user }) => {
  return (
    <section className="container-fluid1">
      <Switch>
        <Route exact path="/" component={Order} />
      </Switch>
    </section>
  );
};

export default(Routes);