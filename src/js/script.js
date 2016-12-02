$(document).ready(function(){

  $(document).on('click', '.show-more', function(e){
    e.preventDefault();

    $( $(this).attr('href') ).slideDown();

  });

$('#root').append('<article class="blog-post"><h1>header add js</h1><a href="#post-id-124" class="show-more">Show more</a><div id="post-id-124" class="blog-post__moretext">qwerty Далеко-далеко за словесными горами в стране, гласных и согласных живут рыбные тексты. Если домах свой, составитель снова себя подпоясал до сих последний повстречался, единственное имени лучше взобравшись, рукопись даль то, маленькая осталось.</div></article>');
});




// $('blockquote').each(
//   function(){
//     // console.log( $(this).text() );
//     // $(this).text('44f4f4f ' + $(this).index() );
//
//     $(this).prepend(' 44f4f4f ' + $(this).index() + ' ' );
//
//   }
// );
