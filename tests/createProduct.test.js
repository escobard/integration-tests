describe("createProduct mutation", () => {
    it("can create a user", async () => {

        const newProduct = {
            id: "some-product",
            name: "some product",
            createdBy: "some-user",
            price: "0.08"
        };

        const mutation = {
            query: `
            mutation createProduct($product: ProductInput){
              createProduct(product: $product){
                id
                createdBy
                name
                price
              }
            }
            `,
            variables: {
                product: newProduct
            }
        };

        const { body, status } = await request.post('/graphql').send(mutation);

        expect(body.data.createProduct).toEqual(newProduct);
        expect(status).toEqual(200);
    });
});