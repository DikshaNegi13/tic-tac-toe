
var arr=[[-1,-1,-1],[-1,-1,-1],[-1,-1,-1]];

function check_true(a,b)
{
    if(arr[a][b]==-1){return true;}
    return false;
}
function check_all_true()
{
    var c=0;
    for(let i=0;i<3;i++)
    {
        for(let j=0;j<3;j++)
        {
            if(arr[i][j]!=-1)
            {c++;}

        }
    }
    console.log(c);
    if(c==9){return true;}
    return false;

}
function check_win()
{
    if(arr[0][0]==1&&arr[0][1]==arr[0][0]&&arr[0][1]==arr[0][2]){
    $('#tic121').css('visibility','hidden');
    $('#tic122').css('visibility','hidden');
    $('#tic123').css('visibility','hidden');
    $('#tic131').css('visibility','hidden');
    $('#tic132').css('visibility','hidden');
    $('#tic133').css('visibility','hidden');
    $('#tic121 span').css('visibility','hidden');
    $('#tic122 span').css('visibility','hidden');
    $('#tic123 span').css('visibility','hidden');
    $('#tic131 span').css('visibility','hidden');
    $('#tic132 span').css('visibility','hidden');
    $('#tic133 span').css('visibility','hidden');
    return true;
    }
        
    
    if(arr[1][0]==1&&arr[1][1]==arr[1][0]&&arr[1][1]==arr[1][2]){
        $('#tic111').css('visibility','hidden');
        $('#tic112').css('visibility','hidden');
        $('#tic113').css('visibility','hidden');
        $('#tic131').css('visibility','hidden');
        $('#tic132').css('visibility','hidden');
        $('#tic133').css('visibility','hidden');
        $('#tic111 span').css('visibility','hidden');
        $('#tic112 span').css('visibility','hidden');
        $('#tic113 span').css('visibility','hidden');
        $('#tic131 span').css('visibility','hidden');
        $('#tic132 span').css('visibility','hidden');
        $('#tic133 span').css('visibility','hidden');
        return true;

    }
    if(arr[2][0]==1&&arr[2][1]==arr[2][0]&&arr[2][1]==arr[2][2]){
        $('#tic121').css('visibility','hidden');
        $('#tic122').css('visibility','hidden');
        $('#tic123').css('visibility','hidden');
        $('#tic111').css('visibility','hidden');
        $('#tic112').css('visibility','hidden');
        $('#tic113').css('visibility','hidden');
        $('#tic121 span').css('visibility','hidden');
        $('#tic122 span').css('visibility','hidden');
        $('#tic123 span').css('visibility','hidden');
        $('#tic111 span').css('visibility','hidden');
        $('#tic112 span').css('visibility','hidden');
        $('#tic113 span').css('visibility','hidden');
        return true;

    }

    if(arr[0][0]==arr[1][1]&&arr[1][1]==arr[2][2]&&arr[0][0]==1){
        $('#tic112').css('visibility','hidden');
        $('#tic113').css('visibility','hidden');
        $('#tic121').css('visibility','hidden');
        $('#tic123').css('visibility','hidden');
        $('#tic131').css('visibility','hidden');
        $('#tic132').css('visibility','hidden');
        $('#tic112 span').css('visibility','hidden');
        $('#tic113 span').css('visibility','hidden');
        $('#tic121 span').css('visibility','hidden');
        $('#tic123 span').css('visibility','hidden');
        $('#tic131 span').css('visibility','hidden');
        $('#tic132 span').css('visibility','hidden');
        return true;
    }
    if(arr[0][2]==1&&arr[1][1]==arr[0][2]&&arr[1][1]==arr[2][0]){
        $('#tic111').css('visibility','hidden');
        $('#tic112').css('visibility','hidden');
        $('#tic121').css('visibility','hidden');
        $('#tic123').css('visibility','hidden');
        $('#tic132').css('visibility','hidden');
        $('#tic133').css('visibility','hidden');
        $('#tic111 span').css('visibility','hidden');
        $('#tic112 span').css('visibility','hidden');
        $('#tic121 span').css('visibility','hidden');
        $('#tic123 span').css('visibility','hidden');
        $('#tic132 span').css('visibility','hidden');
        $('#tic133 span').css('visibility','hidden');
        return true;
    }
    return false;
}


$('#tic111').click(function(){
    $('#tic111 span').text("X");

    $('#tic111 span').css('visibility','visible');
    arr[0][0]=1;
    if(check_win()){
        alert("X won");
    }else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic112').click(function(){
    $('#tic112 span').text("X");

    $('#tic112 span').css('visibility','visible');
    arr[0][1]=1;
    if(check_win()){alert("X Won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic113').click(function(){
    $('#tic113 span').text("X");

    $('#tic113 span').css('visibility','visible');
    arr[0][2]=1;
    if(check_win()){alert("X Won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic121').click(function(){
    $('#tic121 span').text("X");


    $('#tic121 span').css('visibility','visible');
    arr[1][0]=1;
    if(check_win()){alert("X won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

    })
$('#tic122').click(function(){
    $('#tic122 span').text("X");

    $('#tic122 span').css('visibility','visible');
    arr[1][1]=1;
    if(check_win()){alert("X won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic123').click(function(){
    $('#tic123 span').text("X");

    $('#tic123 span').css('visibility','visible');
    arr[1][2]=1;
    if(check_win())
    {alert("X won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic131').click(function(){
    $('#tic131 span').text("X");

    $('#tic131 span').css('visibility','visible');
    arr[2][0]=1;
    if(check_win()){alert("X won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}};

})
$('#tic132').click(function(){
    $('#tic132 span').text("X");

    $('#tic132 span').css('visibility','visible');
    arr[2][1]=1;
    if(check_win()){alert("X Won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})
$('#tic133').click(function(){
    $('#tic133 span').text("X");

    $('#tic133 span').css('visibility','visible');
    arr[2][2]=1;
    if(check_win()){alert("X won");}
    else{
    if(!check_all_true()){
    setTimeout(() => { create_zero(); }, 500);}}

})


function create_random(){
    var ra=Math.floor(Math.random()*3);
    var rb=Math.floor(Math.random()*3);
    return [ra,rb];
}




function create_zero()
{
 let rc= create_random();
let a=rc[0];
let b=rc[1];
 

while(!check_true(a,b))
{
    rc=create_random();
    a=rc[0];
    b=rc[1];
}
arr[a][b]=0;
if(a==0&&b==0)
{
    $('#tic111 span').text("O");
    $('#tic111 span').css('visibility','visible');
}
else if(a==0&&b==1)
{  $('#tic112 span').text("O");
$('#tic112 span').css('visibility','visible');
}
else if(a==0&&b==2)
{
    $('#tic113 span').text("O");
    $('#tic113 span').css('visibility','visible');
}
else if(a==1&&b==0)
{  $('#tic121 span').text("O");
$('#tic121 span').css('visibility','visible');
}
else if(a==1&&b==1){
$('#tic122 span').text("O");
$('#tic122 span').css('visibility','visible');
}
else if(a==1&&b==2)
{
    $('#tic123 span').text("O");
    $('#tic123 span').css('visibility','visible');
}
else if(a==2&&b==0)
{
    $('#tic131 span').text("O");
    $('#tic131 span').css('visibility','visible');
}
else if(a==2&&b==1)
{  $('#tic132 span').text("O");
$('#tic132 span').css('visibility','visible');}

else if(a==2&&b==2)
{  $('#tic133 span').text("O");
$('#tic133 span').css('visibility','visible');}
}




$('#yo').click(function(){
    $('#tic111 span').css('visibility','hidden');
    $('#tic112 span').css('visibility','hidden');
    $('#tic113 span').css('visibility','hidden');
    $('#tic121 span').css('visibility','hidden');
    $('#tic122 span').css('visibility','hidden');
    $('#tic123 span').css('visibility','hidden');
    $('#tic131 span').css('visibility','hidden');
    $('#tic132 span').css('visibility','hidden');
    $('#tic133 span').css('visibility','hidden');


    $('#tic121').css('visibility','visible');
    $('#tic122').css('visibility','visible');
    $('#tic123').css('visibility','visible');
    $('#tic111').css('visibility','visible');
    $('#tic112').css('visibility','visible');
    $('#tic113').css('visibility','visible');
    $('#tic131').css('visibility','visible');
    $('#tic132').css('visibility','visible');
    $('#tic133').css('visibility','visible');
    
    
    



    arr[0][0]=-1;
    arr[0][1]=-1;
    arr[0][2]=-1;
    arr[1][0]=-1;
    arr[1][1]=-1;
    arr[1][2]=-1;
    arr[2][0]=-1;
    arr[2][1]=-1;
    arr[2][2]=-1;
})