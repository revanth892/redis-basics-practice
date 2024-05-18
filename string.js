const client = require('./client')

async function init()
{
    await client.set("user:1" ,"deyyam");
    await client.set("user:2" ,"annulu");
    // await client.expire("user:1",30);
    // const result = await client.get("user:1")
    // console.log(result)
    // console.log("Result ->",result)

}

init();