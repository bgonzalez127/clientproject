/* global $ */

$("#submit").click(function() {
    $("#main").hide();
    $("#area-rep").show();
    $("body").css("background-image","url('https://images.ecosia.org/qfTOSz8xPE8senf-_Yy_lsXKCNs=/0x390/smart/http%3A%2F%2Fgoodmenproject.com%2Fwp-content%2Fuploads%2F2014%2F09%2Fblurry-flag-menegueFlickr.jpg')");


    var address = $("#address1").val();
    var zipCode = $("#zipCode1").val();
    var city = $("#city1").val();
    var state = $("#state1").val();

    var $fullAddress = address + ',' + city + ',' + state + ',' + zipCode
    console.log($fullAddress);

    $.ajax({
        url: "https://www.googleapis.com/civicinfo/v2/representatives?address=" + $fullAddress + "&includeOffices=true&levels=country&roles=headOfState&key=AIzaSyAsooabQ9e4_xkbb62Miu4WonjJRNyX8Pw",
        method: "GET",
        success: function(response) {
            var areaRep = $('#area-rep');
            $("#position").text(response.offices[0].name);
            response.officials.forEach(function(official, idx) {
                //   $("#name").text(official.name);
                //   $("#party").text(official.party);
                //   $("#image").attr('src', official.photoUrl);
                //   $("#role").text(office.roles);
                areaRep.append("<div class='parent1'><div><img id='image' src="+ official.photoUrl +"></div><div class='txt'><p>" + official. name +"</p><p>Head of State</p><p>"+ official.party +"</p></div></div>");
            });
        }
    });
});
