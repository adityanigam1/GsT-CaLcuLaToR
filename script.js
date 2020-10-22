function calculate() {
    var a = document.getElementById('origAmt').value;
    var b = document.getElementById('gstAmt').value;
    var get = (a * b) / 100;
    var geta = +(a) + +(get);
    document.getElementById("demo").innerHTML = a;
    document.getElementById("demo1").innerHTML = get;
    document.getElementById("demo2").innerHTML = geta;  
}

function calculate1() {
    var a1 = document.getElementById('origAmt1').value;
    var b1 = document.getElementById('gstAmt1').value;
    var get1 = a1 * (100 / (100 + (+b1)));
    var geta1 = a1 - get1;
    document.getElementById("total1").innerHTML = a1;
    document.getElementById("total2").innerHTML = get1;
    document.getElementById("total3").innerHTML = geta1;
}

function MyCal(ls_from) {
    var ld_pri = document.getElementById("input_pri").value;
    var ld_per = document.getElementById("input_per").value;
    var ld_amt = document.getElementById("input_gst").value;

    if (ls_from == 'A') {
        ld_pri = (+(ld_amt) * 100) / +(ld_per);
        document.getElementById("input_pri").value = ld_pri;   
    }
    else if (ls_from == 'B') {
        ld_per = (+(ld_amt) * 100) / +(ld_pri);
        document.getElementById("input_per").value = ld_per;
    }
    else if (ls_from == 'C') {
        ld_amt = (+(ld_pri) * +(ld_per) / 100);
        document.getElementById("input_gst").value = ld_amt;
    }
}

