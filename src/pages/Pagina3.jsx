import React from 'react';
import { Grid, Row, Col } from 'rsuite';

import '../App.css'

export default () => {
  return (
    <>
      <h1>Página 3</h1>

      <Grid fluid>
        <Row className="show-grid">
          <Col xs={12} xsPush={12} className="show-grid2">
            xs={12} xsPush={12} `left`
          </Col>
          <Col xs={12} xsPull={12} className="show-grid2">
            xs={12} xsPull={12} `right`
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} className="show-grid2">
            xs={6} `left`
          </Col>
          <Col xs={6} xsPush={12} className="show-grid2">
            xs={6} xsPush={12} `right`
          </Col>
        </Row>

        <Row className="show-grid">
          <Col xs={6} xsPush={18} className="show-grid2">
            xs={6} xsPush={18} `left`
          </Col>
          <Col xs={6} xsPull={6} className="show-grid2">
            xs={6} xsPull={6} `right`
          </Col>
        </Row>
      </Grid>

    </>
  )
}