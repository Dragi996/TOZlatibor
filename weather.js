$(document).ready(function () {
    function success() {
        var lat = 43.7166638;
        var long = 19.6999972;
        weather(lat, long);
    }
    success();

    function weather(lat, long) {
        var URL = `https://fcc-weather-api.glitch.me/api/current?lat=${lat}&lon=${long}`;
        $.getJSON(URL, function (data) {
            display(data);
        });
    }

    function display(data) {

        var city = "ZLATIBOR";
        console.log(city);
        var temp =
            Math.round(data.main.temp_max) +
            "&deg; C";
        var desc = data.weather[0].description;
        var date = new Date();

        var months = [
            "Januar",
            "Februar",
            "Mart",
            "April",
            "Maj",
            "Jun",
            "Jul",
            "Avgust",
            "Septembar",
            "Oktobar",
            "Novembar",
            "Decembar"
        ];

        var weekday = new Array(7);
        weekday[0] = "Nedelja";
        weekday[1] = "Ponedeljak";
        weekday[2] = "Utorak";
        weekday[3] = "Sreda";
        weekday[4] = "Cetvrtak";
        weekday[5] = "Petak";
        weekday[6] = "Subota";

        var font_color;
        var bg_color;
        if (Math.round(data.main.temp_max) > 25) {
            font_color = "#d36326";
            bg_color = "#f3f5d2";
        } else {
            font_color = "#44c3de";
            bg_color = "#eff3f9";
        }

        if (data.weather[0].main == "Sunny" || data.weather[0].main == "sunny") {
            $(".weathercon").html(
                "<i class='fas fa-sun' style='color: #d36326;'></i>"
            );
        } else {
            $(".weathercon").html(
                "<i class='fas fa-cloud' style='color: #44c3de;'></i>"
            );
        }

        var minutes =
            date.getMinutes() < 11 ? "0" + date.getMinutes() : date.getMinutes();
        var date =
            weekday[date.getDay()].toUpperCase() +
            " | " +
            months[date.getMonth()].toUpperCase().substring(0, 3) +
            " " +
            date.getDate() +
            " | " +
            date.getHours() +
            ":" +
            minutes;
        $(".location").html(city);
        $(".temp").html(temp);
        $(".date").html(date);
        $(".box").css("background", bg_color);
        $(".location").css("color", font_color);
        $(".temp").css("color", font_color);
    }
});