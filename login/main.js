function check(form) {
  if (form.userid.value == "ksh0922") {
    if (form.userpassword.value == "qpqp1256!") {
      window.open("/SHC/index.html");
    } else {
      alert("비밀번호가 맞지 않습니다.");
    }
  }
  else
  {
      alert("존재하지 않는 아이디입니다.")
  }
}
