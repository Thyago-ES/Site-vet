document.addEventListener("DOMContentLoaded", function() {
    const consultaForm = document.getElementById("consulta-form");
    const resultadoDiv = document.getElementById("resultado");

    consultaForm.addEventListener("submit", function(event) {
        event.preventDefault();

        const nomeAluno = document.getElementById("nome").value;
        
        // Aqui você pode implementar a lógica de consulta dos alunos
        // Substitua esta mensagem pelo resultado real
        resultadoDiv.textContent = `Aluno encontrado: ${nomeAluno}`;
    });
});

function reAgendamento() {
        window.location.href = "agendamento.html";
        }

#cor{
  color: red;
  background-color: blue;
}