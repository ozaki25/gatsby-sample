import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"

import useUsersQuery from "../hooks/useUsersQuery"

function IndexPage() {
  const users = useUsersQuery()
  return (
    <Layout>
      {users.map(({ id, name, age }) => (
        <h3 key={id}>
          {name}({age}歳)
        </h3>
      ))}
      <Link to="/page-2/">Go to page 2</Link>
    </Layout>
  )
}

export default IndexPage
