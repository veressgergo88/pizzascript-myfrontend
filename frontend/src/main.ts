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

const customerName = document.getElementById("name")! as HTMLInputElement
const customerZipCode = document.getElementById("zipcode")! as HTMLInputElement
const customerCity = document.getElementById("city")! as HTMLInputElement
const customerStreet = document.getElementById("street")! as HTMLInputElement
const customerHouseNumber = document.getElementById("house")! as HTMLInputElement
const customerEmail = document.getElementById("email")! as HTMLInputElement
const customerPhoneNumber = document.getElementById("phone")! as HTMLInputElement
const pizzaOneName = document.getElementById("pizzaone")! as HTMLHeadingElement
const pizzaTwoName = document.getElementById("pizzatwo")! as HTMLHeadingElement
const pizzaThreeName = document.getElementById("pizzathree")! as HTMLHeadingElement
const pizzaFourName = document.getElementById("pizzafour")! as HTMLHeadingElement
const pizzaFiveName = document.getElementById("pizzafive")! as HTMLHeadingElement
const pizzaSixName = document.getElementById("pizzasix")! as HTMLHeadingElement
const pizzaSevenName = document.getElementById("pizzaseven")! as HTMLHeadingElement
const pizzaOneCount = document.getElementById("amountone")! as HTMLInputElement
const pizzaTwoCount = document.getElementById("amounttwo")! as HTMLInputElement
const pizzaThreeCount = document.getElementById("amountthree")! as HTMLInputElement
const pizzaFourCount = document.getElementById("amountfour")! as HTMLInputElement
const pizzaFiveCount = document.getElementById("amountfive")! as HTMLInputElement
const pizzaSixCount = document.getElementById("amountsix")! as HTMLInputElement
const pizzaSevenCount = document.getElementById("amountseven")! as HTMLInputElement
const pizzaOnePrice = document.getElementById("pizzaoneprice")! as HTMLElement
const pizzaTwoPrice = document.getElementById("pizzatwoprice")! as HTMLElement
const pizzaThreePrice = document.getElementById("pizzathreeprice")! as HTMLElement
const pizzaFourPrice = document.getElementById("pizzafourprice")! as HTMLElement
const pizzaFivePrice = document.getElementById("pizzafiveprice")! as HTMLElement
const pizzaSixPrice = document.getElementById("pizzasixprice")! as HTMLElement
const pizzaSevenPrice = document.getElementById("pizzasevenprice")! as HTMLElement

type Customer = {
    name: string,
    zipcode: string,
    city: string,
    street: string,
    house: string,
    email: string,
    phone: string
}

type Pizza = {
    name: string;
    piece: string;
    price: string;
};

document.getElementById("addtoorder")!.addEventListener("click", () => {
  const customerData: Customer = {
    name: customerName.value,
    zipcode: customerZipCode.value,
    city: customerCity.value,
    street: customerStreet.value,
    house: customerHouseNumber.value,
    email: customerEmail.value,
    phone: customerPhoneNumber.value
};

      document.getElementById("outname")!.textContent = customerData.name
      document.getElementById("outaddress")!.textContent = customerData.zipcode + " " + customerData.city + " " + customerData.street + " " + customerData.house
      document.getElementById("outemail")!.textContent = customerData.email
      document.getElementById("outphone")!.textContent = customerData.phone

      const pizzaOrder: Pizza[] = [
          { name: pizzaOneName.textContent!, piece: pizzaOneCount.value, price: pizzaOnePrice.textContent!},
          { name: pizzaTwoName.textContent!, piece: pizzaTwoCount.value, price: pizzaTwoPrice.textContent!},
          { name: pizzaThreeName.textContent!, piece: pizzaThreeCount.value, price: pizzaThreePrice.textContent!},
          { name: pizzaFourName.textContent!, piece: pizzaFourCount.value, price: pizzaFourPrice.textContent!},
          { name: pizzaFiveName.textContent!, piece: pizzaFiveCount.value, price: pizzaFivePrice.textContent!},
          { name: pizzaSixName.textContent!, piece: pizzaSixCount.value, price: pizzaSixPrice.textContent!},
          { name: pizzaSevenName.textContent!, piece: pizzaSevenCount.value, price: pizzaSevenPrice.textContent!},
      ];

      let amountArray: number[] = []

      pizzaOrder.forEach((pizzaData) => {
          const count = parseInt(pizzaData.piece);
          if (count > 0) {
              const multiply = count * parseInt(pizzaData.price)
              
              const nameElement = document.createElement("h2");
              nameElement.textContent = pizzaData.name;
              document.getElementById("pizzaordername")!.appendChild(nameElement);
      
              const pieceElement = document.createElement("h2");
              pieceElement.textContent = pizzaData.piece + " pc"
              document.getElementById("pizzaorderpiece")!.appendChild(pieceElement);
      
              const priceElement = document.createElement("h2");
              priceElement.textContent = multiply.toString() + " Ft";
              document.getElementById("pizzaorderprice")!.appendChild(priceElement);
              
              amountArray.push(multiply)
          }
      });

      function sumAmountArray(numbers: number[]): number {
          let sum = 0;
          for (const num of numbers) {
            sum += num;
          }
          return sum;
      }

      const priceSum = sumAmountArray(amountArray)

      if(priceSum !== 0){
      const totalPriceElement = document.createElement("h2")
      totalPriceElement.textContent = priceSum.toString() + " Ft"
      document.getElementById("totalprice")!.appendChild(totalPriceElement)
      }
      
      const orderCheck = document.getElementById("ordercheck")!
      orderCheck.removeAttribute("style")

      const orderButton = document.getElementById("order")!
      orderButton.removeAttribute("style")
})

/*
document.getElementById("order")!.addEventListener("click", () => {})
*/