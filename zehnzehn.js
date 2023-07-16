let num = 23;
function und(n){
    if(n-20>=20){
        console.log("und"); //block of code that just checks if you can still take away 20.
}
}
let secnum = num % 20;
let i = num;

if(num==0){
    console.log("Null");
}


switch (secnum){
    case 1:
        console.log("Eins");
        i--;
        break;
    case 2:
        console.log("Zwei");
        i-=2;
        break;
    case 3:
        console.log("Drei");
        i-=3;
        break;
    case 4:
        console.log("Vier");
        i-=4;
        break;
    case 5:
        console.log("Funf");
        i-=5;
        break;
    case 6:
        console.log("Sechs");
        i-=6;
        break;
    case 7:
        console.log("Sieben");
        i-=7;
        break;
    case 8:
        console.log("Acht");
        i-=8;
        break;
    case 9:
        i-=9;
        console.log("Neun");
        break;
    case 10:
        i-=10;
        console.log("Zehn");
        break;
    case 11:
        i-=11;
        console.log("Elf");
        break;
    case 12:
        i-=12;
        console.log("Zwolf");
        break;
    case 13:
        i-=13;
        console.log("Dreizehn");
        break;
    case 14:
        i-=14;
        console.log("Vierzehn");
        break;
    case 15:
        i-=15;
        console.log("Funfzehn");
        break;
    case 16:
        i-=16;
        console.log("Sechszehn");
        break;
    case 17:
        i-=17;
        console.log("Siebenzehn");
        break;
    case 18:
        i-=18;
        console.log("Achtzehn");
        break;
    case 19:
        i-=19;
        console.log("Neunzehn");
        break;
}
und(i);
for(i; i>=20; i-=20){
    console.log("zehnzehn");
    und(i);
}