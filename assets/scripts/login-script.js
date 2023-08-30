
  const password = inputPasswordElement.value;
    /* TODO 2 : Buat Logika perbandingan dengan kondisi:
       Jika variabel email identik dengan expectedEmail dan password identik dengan expectedPassword, panggil fungsi goToHome().
       Jika tidak, maka panggil fungsi showPopUp().
     */
    /* Comment : Memastikan bahwa nilai email dan password sesuai dengan nilai yang tersimpan. */
    if(email==expectedEmail && password==expectedPassword){
      /* Comment : Jika sesuai maka program akan berpindah ke halaman home. */
      goToHome();
    }else{
      /* Comment : Namum jika tidak sesuai maka akan menampilkan informasi bahwa input salah. */
      showPopUp();
    }
});
