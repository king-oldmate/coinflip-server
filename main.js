document.querySelector('#clickMe').addEventListener('click', makeReq)

async function makeReq(){

    const res = await fetch(`/api`)
    const data = await res.json()

    console.log(data.toss)
    document.querySelector('h2').textContent = data.toss
}