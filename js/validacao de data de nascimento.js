function iniciar(){
    function verificacao(){
     
        var data = new Date();
        var ano = data.getFullYear();
   

        var ano_nascimento = document.getElementById("nascimento").value;
        var civel = document.getElementById("estado_civel").value;

      
        var idade_nascimento2 = parseInt(ano_nascimento[0]+ano_nascimento[1]+ano_nascimento[2]+ano_nascimento[3]);

        var idade_atual = ano - idade_nascimento2;
     

        if(idade_atual < 15 && civel == "solteiro"){
        alert("infelizmente vou não poderá realizar a inscrição do curso usa idade é: "+idade_atual+" \n"+" quando estiver com 16 anos poderá se inscrever");
        alert("seus dados não foram enviados");
        }  
        
        
        var estado_civel = document.getElementById("estado_Civel");
        
         
         var aluno = document.getElementById("nome_do_aluno").value;
         var email_aluno = document.getElementById("email").value;
         var idade = document.getElementById("nascimento").value;
         var curso = document.getElementById("curso").value;

         
          
        
          if(aluno == ""){
              alert("O nome do aluno não foi informado");
              aluno.focus();
  
          }
          if(email_aluno == ""){
              alert("O email do aluno não foi informado");
              email_aluno.focus();
  
          }
          if(idade == ""){
            alert("A idade do aluno não foi informado");
            idade.focus();

        }
          if(curso == ""){
              alert("Pelo menos selecione um curso");
              curso.focus();
          }
          if(idade_atual > 15 && civel == "solteiro" || civel == "casado" || civel == "divorciado"){
            alert("seus dados foram enviados com sucesso ");
      
            }
     
    }
    var botao_envio2 = document.getElementById("enviar");
    botao_envio2.addEventListener("click",verificacao);

   
}
window.addEventListener("load",iniciar);
