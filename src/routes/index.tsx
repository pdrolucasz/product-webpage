import { Switch, Route } from 'react-router-dom'

import { Product } from '../pages/Product'

export function Routes() {
    return (
        <Switch>
            <Route path="/product" component={Product} />
        </Switch>
    )
}
