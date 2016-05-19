$(document).ready(function() {
  
  // This part will get the initial rotate value for each tabletop and set it on pageload
  $(".tabletop").each(function(){
    $(this).find(".tabletexture,.device+.shadow").css({
      "-webkit-transform":"rotate3d(1,0,0,"+$(this).data("rotatestart")+"deg)",
      transform:"rotate3d(1,0,0,"+$(this).data("rotatestart")+"deg)"
    });
  });

  $(document).on("scroll touchmove",function(e){
    var top = document.body.scrollTop;
    var tabletop,scrollstart,scrollend;

    $(".tabletop").each(function(){
      scrollstart = $(this).offset().top-200;
      scrollend = scrollstart+$(this).height()+280;
      if(top>scrollstart && top<scrollend) {
        tabletop = this;

        var rotatestart = +$(tabletop).data("rotatestart");
        var rotateend = +$(tabletop).data("rotateend");
        var rotatedistance = rotateend - rotatestart;

        var distance = 
            (document.body.scrollTop-scrollstart) / 
            (scrollend-scrollstart);

        var desktopdistance = distance*rotatedistance+rotatestart;
        
        console.log(rotatestart,rotateend,rotatedistance,desktopdistance)

        $(tabletop).find(".tabletexture,.device+.shadow").css({
          "-webkit-transform":"rotate3d(1,0,0,"+desktopdistance+"deg)",
          transform:"rotate3d(1,0,0,"+desktopdistance+"deg)"
        })
      }
    });

  });
  
});