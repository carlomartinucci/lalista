import React from 'react';

import QuickMarker from 'components/QuickMarker'
import Ranks from 'components/Ranks'

const Home = () => (
  <div style={{maxWidth: "600px", marginLeft: "auto", marginRight: "auto"}}>
    <QuickMarker />
    <Ranks />
  </div>
)

export default Home;
