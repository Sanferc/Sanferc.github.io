$(document).ready(function(){

    $(".bob").mouseleave(function(){
        $(".foto3").prependTo(".bob ul");
    });

    $(".bob").mouseenter(function(){

        $(".bob").mousemove(function(e) {

            var x = (e.clientX/10);
            var y = (e.clientY/10);
 
            switch (true) {

                case x < 64:

                        if ( y < 22.4 ) {
                            $(".foto0").prependTo(".bob ul");
                        } else if ( y > 32.4 ) {
                            $(".foto4").prependTo(".bob ul");
                        } else if ( y > 22 ) {
                            if ( y < 32.4 ) {
                                $(".foto5").prependTo(".bob ul");
                            }    
                        }

                        break;

                case ( x > 74.4 ):

                        if ( y < 22.4 ) {

                            $(".foto0").prependTo(".bob ul");

                        } else if ( y > 32.4 ) {

                            $(".foto4").prependTo(".bob ul");

                        } else if ( y > 22 ) {

                            if ( y < 32.4 ) {

                                $(".foto5").prependTo(".bob ul");
                            }    
                        }
                        
                        break;


                case ( x > 64 ):

                        if ( x < 74.4 ) {

                            if ( y < 22) {

                                $(".foto1").prependTo(".bob ul");
                            }

                            if ( y > 32.4 ) {

                                $(".foto3").prependTo(".bob ul");
                            } 

                            if ( y > 22 ) {

                                if ( y < 32.4 ) {

                                    $(".foto2").prependTo(".bob ul");
                                }    
                            }
                    }
                        
                        break;





            /**    case ( x > 74.4 ):

                            if ( y > 22 ) {
                                if ( y < 32.4 ) {
                                    $(".foto5").prependTo(".bob ul");
                                }    
                            } 

                        break; */

            /**    case ( x < 64 ):

                            if ( y > 22 ) {
                                if ( y < 32.4 ) {
                                    $(".foto5").prependTo(".bob ul");
                                }    
                            } 

                        break; */

                

                

            /**    case ( x > 64 ):

                        if ( x < 74.4 ) {
                            if ( y > 32.4 ) {
                                $(".foto3").prependTo(".bob ul");
                        } 
                    }
                        
                        break; */

            /**    case ( x > 64 ):

                        if ( x < 74.4 ) {
                            if ( y > 22 ) {
                                if ( y < 32.4 ) {
                                    $(".foto2").prependTo(".bob ul");
                                }    
                            } 
                        }
                        
                        break; */

                

                
            }

        }); 

    });

});

