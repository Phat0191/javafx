function functionOK(){
    var hk1= parseInt(document.getElementById("s1").value);  
    var hk2= parseInt(document.getElementById("s2").value);  
    var y= document.getElementById("year");
    var value1= y[y.selectedIndex].value;
    // document.getElementById("year").innerHTML= y;
    var result;
    if(value1==1){
        result=((hk1+(hk2*3))/3);
       
    }
    else if (value1==2){
        result=((hk1+(hk2*3))/4);
    }
    else if (value1 ==3){
        result=((hk1+(hk2*3))/5);
    }
    document.getElementById("sum").value= result;   
}

 function functionCancle() {
    document.getElementById("s1").value="";
    document.getElementById("s2").value="";
    document.getElementById("year").value="1"
    document.getElementById("sum").value="0";
 }
 function functionKQ (){
     var output1;
     var grade= parseFloat(document.getElementById("sum").value);
     if (grade>=8 & grade<=10){
        document.getElementById("display").innerHTML="Hoc Sinh Gioi";
     }
    else if (grade<8 & grade>=6.5){
        document.getElementById("display").innerHTML="Hoc Sinh kha";  
    }  
    else{
        document.getElementById("display").innerHTML="Hoc Sinn Trung binh";
    }
    document.getElementById("sdisplay").innerHTML="Hoc Sinh Gioi";
 }