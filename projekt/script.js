let beruska = {
    photo: 'images/beruska.png',
    title: 'Beruška',
    description: 'Fotka berušky',
  };
  
  // let kocka = {
  //   photo: 'images/kocka.png',
  //   title: 'Lejla in Czech Canada',
  //   description: 'Photo of Lejla taken during Easter 2019 by Illy on a family trip to Czech Canada, she is holding on to a large rock that looks like a face.',
  // };
  
  let lachtan = {
    photo: 'images/lachtan.png',
    title: 'Lachtan',
    description: 'Fotka lachtana',
  };
  
  let liska = {
    photo: 'images/liska.png',
    title: 'Liška',
    description: 'Fotka lišky',
  };
  
  let papousek = {
    photo: 'images/papousek.png',
    title: 'Papoušek',
    description: 'Fotka papouška',
  };
  
  let tucnak = {
    photo: 'images/tucnak.png',
    title: 'Tučňák',
    description: "Fotka tučnáka"
  }
  let gallery = [beruska, lachtan, liska, papousek, tucnak];
  
  let currentPhoto = 0;
  
  let loadPhoto = (photoNumber) => {
    $('#photo').attr('src', gallery[photoNumber].photo);
    $('#title').html(gallery[photoNumber].title);
    $('#description').html(gallery[photoNumber].description);
    $(`.arrow-up`).css('border-bottom', '5px solid transparent')
    $(`[index=${photoNumber}]`).css('border-bottom', '5px solid lightgrey')
  }
  
  loadPhoto(currentPhoto);
  
  $('#rightArrow').click(() => {
    if (currentPhoto < (gallery.length - 1)) {
    currentPhoto++;
    loadPhoto(currentPhoto);
  } else {
    currentPhoto = 0;
    loadPhoto(currentPhoto);
  }
  })
  
  $('#leftArrow').click(() => {
    if (currentPhoto > 0) {
    currentPhoto--;
    loadPhoto(currentPhoto);
    } else {
      currentPhoto = gallery.length - 1;
      loadPhoto(currentPhoto);
    }
  })
  
  gallery.forEach((item, index) => {
    $('#image').append(`<div class='container'><div class='arrow-up' index=${index}></div><img src="${gallery[index].photo}" class="image" data-index="${index}"><p class='title'>${gallery[index].title}</p></img></div>`);
    $('.image').click((event) => {
      let indexClicked = $(event.target).attr('data-index');
      let numberOfIndexClicked = parseInt(indexClicked);
      currentPhoto = numberOfIndexClicked;
      loadPhoto(numberOfIndexClicked);
      $(`data-index="${index}"`).css('border: 3px solid black;')
  })
  });