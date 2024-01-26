export default describe("> health route", () => {
  it(">> api is alive and healthy", async () => {
    let { status, text } = await request(server).get('/');
    expect(status).toEqual(200)
    return expect(text).toEqual('Healthy!');
  });
});
