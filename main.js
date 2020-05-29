
function printPagamento(data) {
    var source = $('#pagamento-template').html();
    var template = Handlebars.compile(source);
    var target = $("#target");
    for (const pagamento of data) {
        // target.append("<li>" + pagamento + "</li>");
        var html = template(pagamento);
        target.append(html);
        // console.log(pagamento);
    }
}
function getPagamento() {

    $.ajax({
        url: "getPagamento.php",
        method: "GET",
        success: function (data) {
            printPagamento(data);
        },
        error: function (err) {
            console.error(err);
            
        }
    });
}
$('#target').on("click", ".delete", deletePagamento)
function deletePagamento() {
    var cestino = $(this);
    var pagamentoHtml = cestino.parent();
    var id = pagamentoHtml.data('id');
    console.log(id);
    $.ajax({
        url: "deletePagamento.php",
        method: "POST",
        data:{
            id: id   
        },
        success: function () {
            console.log("ok");
            pagamentoHtml.remove();
            
        },
        error: function (err) {
            console.error(err);
            
        }
    });
}
function init() {
   getPagamento(); 
}
$(document).ready(init);