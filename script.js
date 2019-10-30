//write first method
function sleep_in(weekday,vacation) {
    var week = !weekday || vacation;
    return week;
}

//write second method
function monkey_trouble(a_smile, b_smile) {
    var trouble = (a_smile && b_smile) || (!a_smile && !b_smile);
    return trouble;
}

// third method
function string_times(string, num) {
    var start = "";
    for (var i=0;i<num;i++){
        start += string;
    }
    return start;
}

//fourth
function front_times(word, n){
    var start = "";
    for (var i=0;i<n;i++){
        start += word.substring(0, 3);
    }
    return start;
}

//fifth
function string_bits(string){
    var start = "";
    for (var i=0;i<string.length;i=i+2){
        if (i%2==0){
            start += string.substring(i, i+1);
        }
    }
    return start;
}

//sixth
function caughtSpeeding(speed, birthday){
    if (birthday==true){
        speed = speed -5;
    }
    if (speed<=60) {
        var x = 0;
    }
    if (speed>=61 && speed<=80){
        var x = 1;
    }
    if (speed>80){
        var x = 2;
    }
    return x;
}

//seventh
function fizz_buzz(num){
    if (num%3==0){
        var x = "Fizz";
    }
    if (num%5==0 && num%3!==0){
        var x = "Buzz";
    }
    if (num%3==0 && num%5==0){
        var x = "FizzBuzz";
    }
    if (num%3!==0 && num%5!==0){
        var x =num+"!";
    }
    return x;
}

//eigth
function teaParty(tea, candy){
    if (tea<5 || candy<5){
        var x = 0;
        return x;
    }
    if ((tea>=candy*2 && tea>=5) || (candy>=tea*2 && candy>=5)){
        var x = 2;
        return x;
    }
    if (tea>=5 && candy>=5){
        var x = 1;
        return x;
    }
}

//ninth
function blackjack(x, y){
    if ((x>y && x<=21) || (x<=21 && y>21)){
        return x;
    }
    if ((y>x && y<=21) || (y<=21 && x>21)){
        return y;
    }
    if (x>21 && y>21){
        return 0;
    }
}

//tenth
function loneSum(x, y, z){
    if (x!==y && y!==z && z!==x){
        return x+y+z;
    }
    if (x==y && y==z){
        return 0;
    }
    if (x==y){
        return z;
    }
    if (y==z){
        return x;
    }
    if (x==z){
        return y;
    }
}


//function runs on click and outputs test cases you create to page
function tester() {
    document.getElementById("output").innerHTML += sleep_in(true, false);
    document.getElementById("output").innerHTML += monkey_trouble(true, false);
    document.getElementById("output").innerHTML += string_times('bro', 4);
    document.getElementById("output").innerHTML += front_times('brothers', 4);
    document.getElementById("output").innerHTML += string_bits('brothers');
    document.getElementById("output").innerHTML += caughtSpeeding(65, true);
    document.getElementById("output").innerHTML += fizz_buzz(10);
    document.getElementById("output").innerHTML += teaParty(5, 5);
    document.getElementById("output").innerHTML += blackjack(17, 18);
    document.getElementById("output").innerHTML += loneSum(1, 2, 3);
}

