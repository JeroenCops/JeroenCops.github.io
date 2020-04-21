import React from "react";
import { Button } from '@material-ui/core'

export default ({ name, url, description }) => (
    <div>
        <Button
          size="small"
        //   onClick={() => (location.href = url)}
          color="primary"
        >
          {name}
        </Button>
      <div>{description}</div>
    </div>
);