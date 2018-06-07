<!DOCTYPE html>
<html>
<body>
<script>
function myFunction() {
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sunday, 6 April 2020";
    weekday[1] = "Monday, 6 April 2020";
    weekday[2] = "Tuesday, 6 April 2020";
    weekday[3] = "Wednesday, 6 April 2020";
    weekday[4] = "Thursday, 6 April 2020";
    weekday[5] = "Friday, 6 April 2020";
    weekday[6] = "Saturday, 6 April 2020";

    var n = weekday[d.getDay()];
    document.getElementById("demo").innerHTML = n;
}

</script>

</body>
</html>
