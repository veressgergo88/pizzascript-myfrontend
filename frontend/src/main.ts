import "./style.css";
import http from "axios";
import { z } from "zod";


const buyerName = document.getElementById("inpname")! as HTMLInputElement
const buyerZipCode = document.getElementById("inpzip")! as HTMLInputElement
const buyerCity = document.getElementById("inpcity")! as HTMLInputElement
const buyerStreet = document.getElementById("inpstreet")! as HTMLInputElement
const buyerHouseNumber = document.getElementById("inphouse")! as HTMLInputElement
const buyerEmail = document.getElementById("inpemail")! as HTMLInputElement
const buyerPhoneNumber = document.getElementById("inpphone")! as HTMLInputElement

const pizzaOneCount = document.getElementById("amountone")! as HTMLInputElement
const pizzaTwoCode = document.getElementById("amounttwo")! as HTMLInputElement
const pizzaThreeCount = document.getElementById("amountthree")! as HTMLInputElement
const pizzaFourCount = document.getElementById("amountfour")! as HTMLInputElement
const pizzaFiveCount = document.getElementById("amountfive")! as HTMLInputElement
const pizzaSixCount = document.getElementById("amountsix")! as HTMLInputElement
const pizzaSevenCount = document.getElementById("amountseven")! as HTMLInputElement


document.getElementById("regist")!.addEventListener("click", () => {
    const orderCheck = document.getElementById("ordercheck")!
    orderCheck.removeAttribute("style")

    document.getElementById("outname")!.textContent = buyerName.value
    document.getElementById("outaddress")!.textContent = buyerZipCode.value + " " + buyerCity.value + " " + buyerStreet.value + " " + buyerHouseNumber.value
    document.getElementById("outemail")!.textContent = buyerEmail.value
    document.getElementById("outphone")!.textContent = buyerPhoneNumber.value
})