const client = require('./client')

async function init()
{

    const category ="asia";
    // const country="india"
    let series =1
    const data = {"capital":"hyd"};
    const results = JSON.stringify(data)
    // await client.setnx(`bikes:${category}:${series}` ,results);
    // await client.set("user:2" ,"annulu");
    // await client.expire("user:1",30);
    // const result = await client.get("user:1")
    // console.log(result)
    // console.log("Result ->",result)
    let d1= await client.get(`bikes:${category}:${series}`);
    d1=JSON.parse(d1)
    console.log(d1)
    console.log(d1.capital)

}

init();