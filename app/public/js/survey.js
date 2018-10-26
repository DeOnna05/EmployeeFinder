$(document).ready(function () {
    $('.modal').modal();

})


$('#submit').on('click', function () {
    let surveyForm = {
        name: $("#first_name").val().trim(),
        photo: $("#link_image").val().trim(),
        scores: [
            $('#q1').val(),
            $('#q2').val(),
            $('#q3').val(),
            $('#q4').val(),
            $('#q5').val(),
            $('#q6').val(),
            $('#q7').val(),
            $('#q8').val(),
            $('#q9').val(),
            $('#q10').val(),
        ]
    }
    $.ajax({
        url: '/api/employees',
        method: 'POST',
        data: surveyForm
    }).then(function (response) {
        //putting the link to the picture and name in variables
        let picture = response.photo;
        let name = response.name;
        $('.modal').modal('open');
        $('#picture').attr('src', picture);
        $('.matchName').text(name);
    })
    
});
