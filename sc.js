const but = document.querySelectorAll(".but");
const val = document.getElementsByClassName("vinput")[0];
const rest = document.getElementsByClassName("off")[0];
const del = document.getElementsByClassName("del")[0];
const equal = document.getElementsByClassName("equal")[0];
document.onkeydown = () => {
    const reg = /[a-zA-Z]/.test(val.value);
const rap=/[ا-ي]/.test(val.value);

    if (reg == true|rap==true) {
        val.value = "";
    }
}

// value buttons

but.forEach(item => {

    item.addEventListener("click", () => {


        // console.log(item.value)
        val.value += item.value;
    })
});
// rest button
rest.addEventListener("click", () => {
    val.value = "";
});

// delete one value
del.addEventListener("click", () => {
    console.log(val.value.length - 1);
    const result = val.value.length - 1
    val.value = val.value.slice(0, result);
});

// result
equal.addEventListener("click", () => {
    const reg = /[a-zA-Z]/.test(val.value);
const rap=/[ا-ي]/.test(val.value);

    if (reg == true|rap==true) {
        val.value = "";
    }else{
    val.value = eval(val.value);
    }
});


