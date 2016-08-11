import 'babel-polyfill'
import React from 'react'
import { render } from 'react-dom'
import { Router, Route, IndexRoute } from 'react-router'
import App from './components/Main'
import Gallery from './components/Gallery'
import GalleryList from './components/GalleryList'
import NoMatch from './components/NoMatch'
import { Provider } from 'react-redux'
import { store, history } from './store'

const router = (
<Provider store={store}>
  <Router history={history}>
    <Route path='/' component={App}>
      <IndexRoute component={GalleryList}/>
      <Route path='gallery/:galleryId' component={Gallery}>
        <Route path='image/:imageId' />
      </Route>
      <Route path='not-found' component={NoMatch} />
      <Route path='*' component={NoMatch} />
    </Route>
  </Router>
</Provider>
)

render(router, document.querySelector('main'))
