$('#Athlete_Pic').on('click', function() {
  console.log(Athlete_Pic)
 	$('.full-width').append('Denard Robinson, Quarterback, Class of 2013 (Image Source: Bleacher Report)');
  $('#Player_List_Item').empty()
  $('#Player_List_Item').css('img', `url(${Athlete_Pic})`)
})
