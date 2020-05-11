fetch('http://afsshoppingapp.com/api/category1.php')
      .then(res => res.json())
      .then(data => console.log(data))