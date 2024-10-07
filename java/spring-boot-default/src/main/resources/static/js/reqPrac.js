function pracRes() {
  const form = document.getElementById('form_prac');
  axios
    .post(`/pracinfo`,
    {
        name: form.name.value,
        gender: form.gender.value,
        year : form.year.value,
        month : form.month.value,
        day : form.day.value,
        interest : form.interest.value
    })
    .then((res) => {
      console.log(`${res.data} 회원가입 성공`);
    });
}