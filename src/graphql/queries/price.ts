export const PriceQuery = {
  query: `query {
    price {
      err
      msg
      response {
        code
        createdAt
        id
        order
        updatedAt
        value
      }
    }
  }`,
};