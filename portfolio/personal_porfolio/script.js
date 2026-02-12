const rows = document.querySelectorAll(".skill-row input");


  rows.forEach(range => {
    const value = range.value;
    range.value = 0;

    setTimeout(() => {
      range.value = value;
    }, 300);
  });




