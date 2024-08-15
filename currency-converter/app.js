


const populate = async(base, value) =>{

    url ="https://api.currencyapi.com/v3/latest?apikey=cur_live_icxUMagBG6JOn8PM3y9QLfdRcCmbPICFnjX1gmHY&base_currency="+ base
    let mystr=""
    let response = await fetch(url)
    let rJson = await response.json()
    
    document.querySelector(".t1").style.display="block";

    for(let key of Object.keys(rJson["data"])){
        mystr +=`<tr>
                    <td>${key}</td>
                    <td>${rJson["data"][key]["code"]}</td>
                    <td>${(rJson["data"][key]["value"]*value).toFixed(2)}</</td>
                </tr>`
        
    }
    const tablebdy=document.querySelector("tbody");
tablebdy.innerHTML=mystr;

      
}

const select = document.getElementById('cur');
const options = select.options;
const sortedOptions = Array.prototype.slice.call(options).sort((a, b) => a.textContent.localeCompare(b.textContent));

select.innerHTML = '';
sortedOptions.forEach(option => select.appendChild(option));



const btn= document.querySelector(".btn");
btn.addEventListener("click", (e)=>{
    e.preventDefault();
    console.log("button is clicked")
    const value = parseInt(document.querySelector("input[name='quant']").value);
    const base = document.querySelector("select[name='currency']").value;
    populate(base, value);
})



