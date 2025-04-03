function armazenarValor(){

    //armazena o valor que o usuario digitou
    var userInput = document.getElementByid("userInput").value;

    //exibe o valor armazenado
    console.log("O valor da variavel é: " + userInput);

    //atualiza o conteúdo
    document.getElementById("valorInserido").InnerText = "O valor inserido é: " + userInput;

}