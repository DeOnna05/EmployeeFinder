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
    console.log(surveyForm)
    let pictureInput = surveyForm.photo;
    let nameInput = surveyForm.name;
    let scoreInput = surveyForm.scores;
    //loop through scores to find any that are null
    for (let i = 0; i < scoreInput.length; i++) {
        //if any inputs are empty modal will tell user to fill out all fields
        if (pictureInput === "" || nameInput === "" || scoreInput[i] === null) {
            console.log('Please fill out all fields');
            
            return $('#modal2').modal('open') ;
        }
    } {
        //if all fields are completed, call will grab form info and run post function
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
            $("#first_name").val('');
            $("#link_image").val('');
            $('#q1').val('');
            $('#q2').val('');
            $('#q3').val('');
            $('#q4').val('');
            $('#q5').val('');
            $('#q6').val('');
            $('#q7').val('');
            $('#q8').val('');
            $('#q9').val('');
            $('#q10').val('');

        })
    }
})
