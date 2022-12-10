const card = {
    number: "435256362356",
    data: "11/27",
    name: "Nursultan",
    type: "visa",
    CVC: 456
}

console.log(card);

const bank = {
    kod: 103014,
    name: "Optima bank",
    Grafic: "08:00 - 22:00",
    night: true,
    adres: {
        City: "Бишкек",
        street: "ул. Льва Толстого, 79",
        home: "228"
    }
}
console.log(bank);

let sistem = "MoneyGram";

switch (sistem) {
  case "MoneyGram":
    console.log("Деньги отправлены системой MoneyGram");
    break;
  case "Unistream":
    console.log("Деньги отправлены системой Unistream ");
    break;
  case "Contack":
    console.log("Деньги отправлены системой Contack");
    break;
  case "Ria":
    console.log("Деньги отправлены системой Ria");
    break;
  default:
    console.log("Неправильная система перевода");
}

let n = Number(prompt("Ведите число от 1 до 9"))
switch (n) {
    case 1:
        console.log("I")
        break;
    case 2:
        console.log("II")
        break;
    case 3:
        console.log("III")
        break;
    case 4:
        console.log("IV")
        break;
    case 5:
        console.log("V")
        break;
    case 6:
        console.log("VI")
        break;
    case 7:
        console.log("VII")
        break;
    case 8:
        console.log("VIII")
        break;
    case 9:
        console.log("IX")
        break;

    default:
        console.log("Вы должны были вести чило от 1 до 9");
        break;
}
 
const customerType = 2
console.log(customerType === 1? "Физическое лицо": customerType === 2? "Юридическое лицо" : "Ты даун?!");
    // if (customerType === 1   ) {
    //     console.log("Физическое лицо")
    // }  else if (customerType === 2){
    //     console.log("Юридическое лицо"); 
    // }
    // else {
    //     console.log("Ты даун?!");
    // }




    


    
