$('#rule, #card, #questionChallenge, #pitch, #feasibility').fadeOut();
$('#box').fadeIn();
$('#title').click(function () {
    $('#rule, #card, #questionChallenge,#pitch, #feasibility').fadeOut();
    $('#box').fadeIn();
});
$('#pitchNav').click(function () {
    $('#box, #rule, #card, #questionChallenge, #feasibility').fadeOut();
    $('#pitch').fadeIn();
});
$('#ruleNav').click(function () {
    $('#box, #pitch, #card, #questionChallenge, #feasibility').fadeOut();
    $('#rule').fadeIn();
});
$('#cardNav').click(function () {
    $('#box, #pitch, #rule, #questionChallenge, #feasibility').fadeOut();
    $('#card').fadeIn();
});
$('#questionChallengeNav').click(function () {
    $('#box, #pitch, #rule, #card, #feasibility').fadeOut();
    $('#questionChallenge').fadeIn();
});
$('#feasibilityNav').click(function () {
    $('#box, #pitch, #rule, #card,#questionChallenge').fadeOut();
    $('#feasibility').fadeIn();
});

