function myFunction()
{
    var d = new Date();
    var weekDay = new Array(7);
    weekDay [0] = ("Sunday" + "<p>A new week has begun!<p>");
    weekDay [1] = ("Monday" + "<p>Life is not over...<p>");
    weekDay [2] = ("Tuesday" + "<p>Don't let anything drag you down ;)<p>");
    weekDay [3] = ("Wednesday" + "<p>It's Wacky Wednesday :P");
    weekDay [4] = ("Thursday" + "<p>The week is almost over, Yaay!!<p>");
    weekDay [5] = ("Friday" + "<p>It's the weekend!<p>");
    weekDay [6] = ("Saturday" + "<p>Stay at home and rest, MORTAL!<p>");
    var n = weekDay[d.getDay()];
    document.getElementById('Demo').innerHTML = n;
}