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
        else;
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

function check(y)
{
    let i=y;
    let c=0;
    a= string_a.slice(0, i);
    for(; i< string_a.indexOf("*"); i++)
        if(string_a[i]=='+' || string_a[i]=='-' || string_a[i]=='*' || string_a[i]=='/')
        {   c++;
            break;
        }
        if(c==1)  
        check(i);
}

function operation()
{
    let a, b;
    
        if(string_a.includes("*")==true)
        {
            a = string_a.slice(0, string_a.indexOf("*"));
            b= string_a.slice(string_a.indexOf("*")+1, string_a.length);
            let result = parseFloat(a) * parseFloat(b);
            document.getElementById("screen").innerHTML = result;
            string_a= "";
            expression = [];
        }
        else if(string_a.includes("/")==true)
        {
            a = string_a.slice(0, string_a.indexOf("/"));
            b= string_a.slice(string_a.indexOf("/")+1, string_a.length);
            let result = parseInt(a) / parseInt(b);
            document.getElementById("screen").innerHTML = result;
            string_a= "";
            expression = [];
        }
        else if(string_a.includes("+")==true)
        {
            a = string_a.slice(0, string_a.indexOf("+"));
            b= string_a.slice(string_a.indexOf("+")+1, string_a.length);
            let result = parseFloat(a) + parseFloat(b);
            document.getElementById("screen").innerHTML = result;
            string_a= "";
            expression = [];
        }
        else if(string_a.includes("-")==true)
        {
            a = string_a.slice(0, string_a.indexOf("-"));
            b= string_a.slice(string_a.indexOf("-")+1, string_a.length);
            let result = parseInt(a) - parseInt(b);
            document.getElementById("screen").innerHTML = result;
            string_a= "";
            expression = [];
        }
        else
        {
            a = string_a.slice(0, string_a.indexOf("-"));
            let result = parseFloat(a)/100;
            document.getElementById("screen").innerHTML = result; 
            string_a= "";
            expression = [];  
        }
    
}