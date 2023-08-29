

        

            function mostrarIdade() {

                box2.classList.add("box-hidden");
                box3.classList.remove("box-hidden");


                // pegar o nome digitado no input  
                let nome =
                    document.getElementById("nome").value;

                // pegar o ano de nacimento digitado no input  
                let anodenascimento =
                    document.getElementById("anodenascimento").value;


                    // validado da entrada ano de nascimento 
                    if (isNaN(anodenascimento) || anodenascimento === "") {
    document.getElementById("mensagemErro").textContent = "Por favor, insira um ano de nascimento válido.";

    document.querySelector(".img-bot").src = "assets/invalido-bot.png";
    
    return;
}


                // new Date é um banco de datas 
                let dataAno = new Date();

                // ao solicitar get full year , estamos pegando do "new Date (), apenas o ano Atual" 
                let anoAtual = dataAno.getFullYear();

                // Aqui somamos os valores das variáveis 
                let idade =
                    anoAtual - anodenascimento;
   
                    

                let msg =
                    "Olha que Bacana " + nome + " ! Já sei a sua idade , você tem " + idade + " anos";

                

                // Exibir a mensagem  

                document.getElementById("mensagem").textContent = msg;
                document.getElementById("nome").innerText = "";


            }

            var box1 = document.querySelector(".box1");
            var box2 = document.querySelector(".box2");
            var box3 = document.querySelector(".box3");




            function proximobox() {

                box1.classList.toggle("box-hidden");
                box2.classList.toggle("box-hidden");

            }





            window.onload = function () {
                const JOTA =
                    document.getElementById("frasesdoJOTA");
                const frasesdoJOTA = ["Saudaçoes! me chamo JOTA", "Vou advinhar a sua idade ", "Me diz ai qual o seu Nome"];
                let index = 0;

                function mudarAsFrasesDoJota() {
                    JOTA.textContent = frasesdoJOTA[index];
                    index = (index + 1) % frasesdoJOTA.length

                }

                setInterval(mudarAsFrasesDoJota, 2000);
            };





