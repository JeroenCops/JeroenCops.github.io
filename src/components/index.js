import React from "react";
import { parseData } from "../parser/parseData";
import Repositories from "./repositories";

export default ({ data }) => <Repositories data={parseData(data)} />;

export const query = graphql`
  query onGithub {
    githubData {
      data {
        user {
            repositories {
              edges {
                node {
                  name
                  description
                  url
                }
              }
            }
          }
        }
    }
  }
`;