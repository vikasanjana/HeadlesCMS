import React from 'react'
import { Box, Skeleton } from "@mui/material";
import { Col, Row } from "react-bootstrap";
const PramotionalSimmer = () => {
  return (
    <Row className="my-3">
    <Col md={4}>
      <Box height={470}>
        <Skeleton className="my-2" />
        <Skeleton width={60 + "%"} className="my-2" />
        <Skeleton
          variant="rectangular"
          height={30}
          width={70}
          className="my-2"
        />
        <Skeleton variant="rectangular" height={440} className="my-2" />
      </Box>
    </Col>
    <Col md={4}>
      <div className="d-flex flex-column">
        <Box>
          <Skeleton className="my-2" />
          <Skeleton width={60 + "%"} className="my-2" />
          <Skeleton
            variant="rectangular"
            height={30}
            width={70}
            className="my-2"
          />
          <Skeleton variant="rectangular" height={159} className="my-2" />
        </Box>
        <Box>
          <Skeleton className="my-2" />
          <Skeleton width={60 + "%"} className="my-2" />
          <Skeleton
            variant="rectangular"
            height={30}
            width={70}
            className="my-2"
          />
          <Skeleton variant="rectangular" height={150} className="my-2" />
        </Box>
      </div>
    </Col>
    <Col md={4}>
      <Box height={470}>
        <Skeleton className="my-2" />
        <Skeleton width={60 + "%"} className="my-2" />
        <Skeleton
          variant="rectangular"
          height={30}
          width={70}
          className="my-2"
        />
        <Skeleton variant="rectangular" height={440} className="my-2" />
      </Box>
    </Col>
  </Row>
  )
}

export default PramotionalSimmer
