$(document).ready(function() {
    $('#btn').click(function() {
        event.preventDefault();
        var textArea = $('#tArea').val();
        var name = $('#name').val();
        var eMail = $('#eMail').val();
        var gender = $("input[name='gender']:checked"). val();
        console.log(`${textArea}, SPOL: ${gender}, IME: ${name}, EMAIL: ${eMail}` );
    });
});