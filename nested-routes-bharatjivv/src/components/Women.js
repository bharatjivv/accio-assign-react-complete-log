// Women.js
import React from "react";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";
import Grooming from "./categories/Grooming";
import Shirt from "./categories/Shirt";
import Trouser from "./categories/Trouser";
import Jewellery from "./categories/Jewellery";

function Women() {
  let { path, url } = useRouteMatch();

  return (
    
    <div>
       <h2>Women's Section</h2>

       <ul>
         <li>
           <Link to={`${url}/grooming`}>
             Grooming
           </Link>
         </li>
         <li>
           <Link  to={`${url}/Shirt`}>
             Shirt
           </Link>
         </li>
         <li>
           <Link to={`${url}/trouser`}>
    Trouser
           </Link>
         </li>
         <li>
           <Link  to={`${url}/jewellery`}>
             Jewellery
          </Link>
         </li>
       </ul>

        <Switch>
        <Route path={`${path}/grooming`} component={Grooming} />
        <Route path={`${path}/shirt`} component={Shirt} />
        <Route path={`${path}/trouser`} component={Trouser} />
        <Route path={`${path}/jewellery`} component={Jewellery} />
      </Switch>

    </div>
  );
}


export default Women;
