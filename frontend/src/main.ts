import "./style.css";
import http from "axios";
import { z } from "zod";

/* A kapott adatok sémája
const ResponseSchema = z.object({
  });
*/

/* A kapott adat típusa
type Response = z.infer<typeof ResponseSchema>;
*/

/* Backend kapcsolat függvénye amely kinyerí a JSON adatokat
const serverLoad = async (): Promise<Response | null> => {
    const response = await http.get("https://localhost:3000/pizza");
    const data = response.data;
    const result = Response.safeParse(data);
  
    if (!result.success) {
      return null;
    } else {
      return result.data;
    }
  };
*/

const customerName = document.getElementById("inpname")! as HTMLInputElement
const customerZipCode = document.getElementById("inpzip")! as HTMLInputElement
const customerCity = document.getElementById("inpcity")! as HTMLInputElement
const customerStreet = document.getElementById("inpstreet")! as HTMLInputElement
const customerHouseNumber = document.getElementById("inphouse")! as HTMLInputElement
const customerEmail = document.getElementById("inpemail")! as HTMLInputElement
const customerPhoneNumber = document.getElementById("inpphone")! as HTMLInputElement
const pizzaOneCount = document.getElementById("amountone")! as HTMLInputElement
const pizzaTwoCount = document.getElementById("amounttwo")! as HTMLInputElement
const pizzaThreeCount = document.getElementById("amountthree")! as HTMLInputElement
const pizzaFourCount = document.getElementById("amountfour")! as HTMLInputElement
const pizzaFiveCount = document.getElementById("amountfive")! as HTMLInputElement
const pizzaSixCount = document.getElementById("amountsix")! as HTMLInputElement
const pizzaSevenCount = document.getElementById("amountseven")! as HTMLInputElement
const pizzaOnePrice = document.getElementById("pizzaoneprice")!
const pizzaTwoPrice = document.getElementById("pizzatwoprice")!
const pizzaThreePrice = document.getElementById("pizzathreeprice")!
const pizzaFourPrice = document.getElementById("pizzafourprice")!
const pizzaFivePrice = document.getElementById("pizzafiveprice")!
const pizzaSixPrice = document.getElementById("pizzasixprice")!
const pizzaSevenPrice = document.getElementById("pizzasevenprice")!

type Order = {
    customer: string, 
    zipcode: number, 
    city: string, 
    street:string, 
    house: number, 
    email: string, 
    phone:string,
    pizza: [{
        pizzaname : string, 
        piece : number, 
        price : number, 
    }]
} 




document.getElementById("addtoorder")!.addEventListener("click", ():Order[] => {
    let theOrder:Order[] = []
    let customerData = [customerName.value, customerZipCode.value, customerCity.value, customerStreet.value, customerHouseNumber.value, customerEmail.value, customerPhoneNumber.value]
    let pizzaData = []

    document.getElementById("outname")!.textContent = customerData[0]
    document.getElementById("outaddress")!.textContent = customerData[1] + " " + customerData[2] + " " + customerData[3] + " " + customerData[4]
    document.getElementById("outemail")!.textContent = customerData[5]
    document.getElementById("outphone")!.textContent = customerData[6]

    if(parseInt(pizzaOneCount.value) > 0){
        const pizzaOne = document.createElement("h2");
        pizzaOne.id = "orderedpizzaone";
        document.getElementById("pizzaorder")!.appendChild(pizzaOne);
        document.getElementById("orderedpizzaone")!.innerText = document.getElementById("pizzaone")!.textContent + ": " + pizzaOneCount.value 
    }
    if(parseInt(pizzaTwoCount.value) > 0){
        const pizzaTwo = document.createElement("h2");
        pizzaTwo.id = "orderedpizzatwo";
        document.getElementById("pizzaorder")!.appendChild(pizzaTwo);
        document.getElementById("orderedpizzatwo")!.innerText = document.getElementById("pizzatwo")!.textContent + ": " + pizzaTwoCount.value
    }
    if(parseInt(pizzaThreeCount.value) > 0){
        const pizzaThree = document.createElement("h2");
        pizzaThree.id = "orderedpizzathree";
        document.getElementById("pizzaorder")!.appendChild(pizzaThree);
        document.getElementById("orderedpizzathree")!.innerText = document.getElementById("pizzathree")!.textContent + ": " + pizzaThreeCount.value
    }
    if(parseInt(pizzaFourCount.value) > 0){
        const pizzaFour = document.createElement("h2");
        pizzaFour.id = "orderedpizzafour";
        document.getElementById("pizzaorder")!.appendChild(pizzaFour);
        document.getElementById("orderedpizzafour")!.innerText = document.getElementById("pizzafour")!.textContent + ": " + pizzaFourCount.value
    }
    if(parseInt(pizzaFiveCount.value) > 0){
        const pizzaFive = document.createElement("h2");
        pizzaFive.id = "orderedpizzafive";
        document.getElementById("pizzaorder")!.appendChild(pizzaFive);
        document.getElementById("orderedpizzafive")!.innerText = document.getElementById("pizzafive")!.textContent + ": " + pizzaFiveCount.value
    }
    if(parseInt(pizzaSixCount.value) > 0){
        const pizzaSix = document.createElement("h2");
        pizzaSix.id = "orderedpizzasix";
        document.getElementById("pizzaorder")!.appendChild(pizzaSix);
        document.getElementById("orderedpizzasix")!.innerText = document.getElementById("pizzasix")!.textContent + ": " + pizzaSixCount.value
    }
    if(parseInt(pizzaSevenCount.value) > 0){
        const pizzaSeven = document.createElement("h2");
        pizzaSeven.id = "orderedpizzaseven";
        document.getElementById("pizzaorder")!.appendChild(pizzaSeven);
        document.getElementById("orderedpizzaseven")!.innerText = document.getElementById("pizzaseven")!.textContent + ": " + pizzaSevenCount.value
    }

    const orderCheck = document.getElementById("ordercheck")!
    orderCheck.removeAttribute("style")

    

    return theOrder
})

/*
document.getElementById("order")!.addEventListener("click", () => {})
*/