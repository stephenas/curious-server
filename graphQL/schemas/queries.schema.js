module.exports = `
  type Query {
    user (email: String!, password: String!): User!
  }
`;