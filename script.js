const priceP1 = 5990.00;
const installment = 12;

let elementoJs = document.createElement("h1");
elementoJs.innerText = "Tec-Hard acessórios";
elementoJs.id = "nome-empresa";

let titulo = document.querySelector("#title");
titulo.appendChild(elementoJs);
console.log(elementoJs);

let elementoJs2 = document.createElement("h3");
elementoJs2.innerText = "Notebook Samsung";
elementoJs2.id = "produto_1";

let description = document.querySelector(".description");
description.appendChild(elementoJs2);

let imageProd1 = document.createElement("img");
imageProd1.setAttribute("src","notebook-samsung.jpg");
imageProd1.id = "imagem_produto1"

description.appendChild(imageProd1)

let shortDescription = document.createElement("p")
shortDescription.innerText = "Notebook Samsung Book Intel Core i5 8GB 256GB SSD Aproveite ao máximo o seu dia com o notebook Samsung Book. Esse modelo de computador portátil, tem design discreto e elegante, permitindo que ele seja transportado em mochilas e pastas para que você possa usá-lo em todas as ocasiões, seja para estudo, trabalho ou lazer. Agora sobre o desempenho, você conta com o processador Intel Core i5 1135G7 da 11ª Geração, ou seja, você terá uma capacidade de resposta incrível, agilizando a realização de tarefas simultâneas de forma tranquila e sem dificuldades. Conta ainda com memória RAM de 8GB que pode ser expandida para até 32GB, permitindo que você alterne facilmente entre aplicativos abertos sem se preocupar com travamentos inconvenientes. Com o SSD de 256GB você tem espaço para salvar fotos, vídeos, arquivos, músicas e o que mais precisar. Sua tela LED é Full HD e mede 15,6 pol. "

shortDescription.id = "descProd1"

description.appendChild(shortDescription)

const priceProd1 = document.createElement("div")
priceProd1.innerHTML = `<h3>R$ ${priceP1.toFixed(2)} em até ${installment}x sem juros</h3>`

let price = document.querySelector(".price");
price.appendChild(priceProd1)