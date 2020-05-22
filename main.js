function getPaganti() {
    $.ajax({
        url: "getPaganti.php",
        method: "get",
        success: function (data) {
            console.log(data);
            var target = $("#target");
           for (const name of data) {
               console.log(name);
               target.append("<li>" + name + "</li>");
           } 
        },
        error: function(err){
            console.error(err);
            
        }
    });
}

function init() {
    getPaganti();
}
$(document).ready(init);