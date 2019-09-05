import { useStaticQuery, graphql } from "gatsby"

function useUsersQuery() {
  const data = useStaticQuery(graphql`
    query allContentfulUser {
      allContentfulUser {
        nodes {
          id
          name
          age
        }
      }
    }
  `)
  return data.allContentfulUser.nodes
}

export default useUsersQuery
