// function getPaganti() {
//     $.ajax({
//         url: "getPaganti.php",
//         method: "get",
//         success: function (data) {
//             console.log(data);
//             var target = $("#target");
//            for (const name of data) {
//                console.log(name);
//                target.append("<li>" + name + "</li>");
//            } 
//         },
//         error: function(err){
//             console.error(err);
            
//         }
//     });
// }

// function init() {
//     getPaganti();
// }
// $(document).ready(init);

function getPagantiPrenotazioni() {
    $.ajax({
        url: "getPaganti.php",
        method: "GET",
        success: function (data) {
            console.log(data);
            var target = $("#target");
            for (const paganti of data) {
                target.append("<li>" + paganti + "</li>");
            }
        },
        error: function (err) {
            console.error(err);
            
        }
    });
}

function init() {
   getPagantiPrenotazioni(); 
}
$(document).ready(init);