var dado = [] // vetor que vai receber os nũmeros do input
var resp = document.getElementById("resP") //resp vai receber a div resp, a div resp vai mostrar os dados do números

function validar(numero,vetor) { // essa function vai verificar se o número digitado estar valido

   if (vetor.indexOf(numero) == -1) {
      if (numero > 0 && numero <= 100) {
         return true
      }
   } else {
      return false
   }
}

function dados () { // essa function vai analisar os número 
   var num = (parseInt(document.querySelector("input#num").value, 10)) // o num vai receber o número digitado do input
   var inputNum = document.getElementById("num") // inputNum vai receber o objeto input

   if (validar(num, dado)) {
      dado.push(num)

      var sel = document.getElementsByTagName("select")[0]
      var opt = document.createElement("option")
      var pegar = dado.indexOf(num) //vai pegar a posição do número no vetor

      opt.innerText = `o valor ${dado[pegar]} foi adicionado`
      sel.appendChild(opt)
   }
   else {
      alert("algo errado")
   }

   inputNum.value = ""
   inputNum.focus()
   // vai limpar a caixa de texto do input e colocar o focu nela
   resp.innerText = ""
}

function mos () { // essa function vai mostrar todos os dado dos números
   if (dado.length == 0) {
      alert("algo errado")
   } else {
      var info = document.createElement("p")
      var maiorOuMenor = [] // vai receber o maior número e depois vai receber o menor número
      var soma = null

      info.innerHTML = `<p> Ao todo vocé colocou ${dado.length} números </p>`
      resp.appendChild(info)

      maiorOuMenor[0] = 1
      maiorOuMenor[1] = 100

      for (var cont in dado) {
         if (dado[cont] > maiorOuMenor[0]) {
            maiorOuMenor[0] = dado[cont]
         }
         if (maiorOuMenor[1] > dado[cont]) {
            maiorOuMenor[1] = dado[cont]
         }
      }

      var info = document.createElement("p")

      info.innerHTML = `<p> o maior número foi ${maiorOuMenor[0]} </p>`
      resp.appendChild(info)
      //vai mostrar o maior número na div resp

      var info = document.createElement("p")
      info.innerHTML = `<p> o menor número foi ${maiorOuMenor[1]} </p>`
      resp.appendChild(info)
      // vai mostrar qual é o menor número na div resp

      var media = null

      for (cont in dado) {
         media = media + dado[cont]
         soma =  soma + dado[cont]
      }

      var info = document.createElement("p")

      info.innerHTML = `<p> a media foi ${media / dado.length} </p>`
      resp.appendChild(info)
      // vai mostrar a media dos número na div resp

      var info = document.createElement("p")
      info.innerHTML = `<p> no total deu ${soma} </p>`
      resp.appendChild(info)
      // vai mostrar  o total na div resp

      addEventListener("click", dado) // vaai monitorar se o botão de Enviar Dados foi clicado, se foi e o texto dos dados estiver na tela, o texto vai ser limpado
   }
}