let firstbtn = document.getElementById('firstbtn');
let maintext = document.getElementById('addingbox');
let saving1 = document.getElementById('svdbox1');
let saving2 = document.getElementById('svdbox2');
let saving3 = document.getElementById('svdbox3');
let saving4 = document.getElementById('svdbox4');
let del1 = document.getElementById('del1');
let del2 = document.getElementById('del2');
let del3 = document.getElementById('del3');
let del4 = document.getElementById('del4');
let delallbtn = document.getElementById('delallbtn');

// INSERTION OF TASKS
firstbtn.addEventListener('click', addingfun);
function addingfun() {
    let todotext = maintext.value;
    if (saving1.value === '') {
        saving1.value = todotext;

    }
    else if (saving2.value === '') {
        saving2.value = todotext;
    }
    else if (saving3.value === '') {
        saving3.value = todotext;
    }
    else if (saving4.value === '') {
        saving4.value = todotext;
    }

}

// DELETION OF TASKS
del1.addEventListener('click', deletion1);
function deletion1() {
    saving1.value = '';
}
del2.addEventListener('click', deletion2);
function deletion2() {
    saving2.value = '';
}
del3.addEventListener('click', deletion3);
function deletion3() {
    saving3.value = '';
}
del4.addEventListener('click', deletion4);
function deletion4() {
    saving4.value = '';
}

delallbtn.addEventListener('click', delall);

function delall(){
    // clearing all the text fields of tasks
    saving1.value = '';
    saving2.value = '';
    saving3.value = '';
    saving4.value = '';

}
