function handleButtonClick(e) {
    console.log({event: e});
    e.target.innerHTML = "취소";
}

function handleInputChange(e) {
    //console.log(e.target.value);
    if( e.ctrlKey && (e.keyCode === 13 || e.key === "Enter")) {
        alert(e.target.value);
    }
}
let isFocus = false;

function handleInputfocus(e) {
    /*
    if(!isFocus) {
        isFocus = true;
        alert("입력하세요!");
    }
        */
    if(!!e.target.value) {
        e.target.value = "";
    }
}

function handleInputBlur(e) {
    if(!e.target.value) {
        alert("값을 입력해주세요.");
    }
}