let expression = [];
let string_a="";
let decimal_a = 0;
let op=0;

function clr()
{
    string_a= "";
    expression = [];
    document.getElementById("screen").innerHTML = "0";
}

function enter(x)
{
            if(x == '.' && decimal_a!=0)
            {
                if(decimal_a == 1)
                {
                    decimal_a++;
                    expression.push(x);    
                    string_a = string_a + x;
                    document.getElementById("screen").innerHTML=string_a;
                }
                else if(decimal_a==2);
            }
            else if(x == '.' && decimal_a == 0)
            {
                decimal_a++;
                expression.push(x);    
                string_a = string_a + x;
                document.getElementById("screen").innerHTML=string_a;
            }
            else
            {
                expression.push(x);    
                string_a = string_a + x;
                document.getElementById("screen").innerHTML=string_a;
            }         
}

function e()
{    
        string_a = string_a.slice(0, string_a.length-1);
        if(string_a == "")
            document.getElementById("screen").innerHTML = "0";
        else
            document.getElementById("screen").innerHTML = string_a; 
}

function percent()
{
    let a = Number(eval(string_a))/100;
    document.getElementById("screen").innerHTML = a;
    string_a = `${a}`;
}

function operation()
{
    document.getElementById("screen").innerHTML = eval(string_a);   
    string_a="";
}
