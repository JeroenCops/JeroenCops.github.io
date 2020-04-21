import React from "react";
import Repository from "./repository";
import { Container } from '@material-ui/core'

export default ({ data }) => (
    <div>
      {data.map(repository => (
        <Repository {...repository} />
      ))}
    </div>
);