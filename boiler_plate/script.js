testApi();
async function testApi() {
    const response = await fetch(`https://intech.vietnamworks.com/data.json`);
    // console.log(response);
    const res = await response.json();
    console.log(res);
}