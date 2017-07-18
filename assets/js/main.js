$(document).ready(function(){                                                                                    

	$("#unopen-chat").on('click', function(){
		var abrirChat = $("#chat").val();
		console.log(abrirChat);
		$("#open-chat").append(`   <div  class="col-md-12 col-lg-12">
					            				<div class="col-md-12 col-lg-12">
					            					`+ abrirChat +`
					            				</div>
					            			</div>
					                    `)
		$("#chat").val("");
	})
})