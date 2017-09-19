import React from 'react';
import { Component } from 'react';

import AlbumList from '../containers/album-list';
import AlbumDetail from '../containers/album-detail';

export default class App extends Component {

  render() {
    return (
      <div>
        <AlbumList />
        <AlbumDetail />
      </div>
    );
  }
}
