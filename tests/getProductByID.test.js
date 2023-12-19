describe("getProductByID query", () => {
    it("can get a user by ID", async () => {
        const productID = 'some-product';

        const results = {
            id: "some-product",
            name: "some product",
            createdBy: "some-user",
            price: "0.08"
        };

        const query = {
            query: `
            query getProductByID($id: ID!){
              getProductByID(id: $id){
                id
                createdBy
                name
                price
              }
            }`,
            variables: {
                id: productID
            }
        };

        const { body, status } = await request.post('/graphql').send(query);

        expect(body.data.getProductByID).toEqual(results);
        expect(status).toEqual(200);
    });
})