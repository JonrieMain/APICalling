$(document).ready(()=>{
  
  const generate = $('.generate');
  const category = $('#selectCate');
  let generatedImage = $('.generated');
  const downloadImage = $('#download');

    // onchange
    category.on('change',()=>{
        if(category.val() == "Cat"){
            generate.text('Generate Cat');
        }else{
            generate.text("Generate Dog");
        }
    });

    // onclick
  generate.on('click',()=>{

        // display loader
        $('.lds-spinner').css("zIndex","1000000");

        setTimeout(()=>{

            if(category.val() == "Cat"){ 
                $.ajax({
                    url: 'https://api.thecatapi.com/v1/images/search?limit=1&api_key=live_MkT5mtt2WDOFaFkFZjvI1oCnuJYqMRp59VnsHN1y9EyrRUjmgF067C0SUkX4Qpbq',
                    type: 'GET',
                    success: (catRespo)=>{
    
                           // generate
                           $('.res').html(`
                           <div class="container">
                            <div class="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                        </div>
                           <img class="generated" src="${catRespo[0].url}">
                           `);
                        //    download
                           downloadImage.attr('href',`${catRespo[0].url}`);

                           

                             // if success hide loader
                        $('.lds-spinner').css("zIndex","-9999999999");
                           
                       
                        
                    },
                    error: (catErr)=>{
                        alert('Error: '+catErr+". Please Check your connection and reload this page");
                    }
                });
    
    
    
              }else if(category.val() == "Dog"){
                $.ajax({
                    url: 'https://api.thedogapi.com/v1/images/search?limit=1&api_key=live_MkT5mtt2WDOFaFkFZjvI1oCnuJYqMRp59VnsHN1y9EyrRUjmgF067C0SUkX4Qpbq',
                    type: 'GET',
                    success: (dogRespo)=>{
    
                           // generate
                           $('.res').html(`
                           <div class="container">
                            <div class="lds-spinner">
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            <div></div>
                            </div>
                        </div>
                           <img class="generated" src="${dogRespo[0].url}">
                           `);
                            // download
                           downloadImage.attr('href',`${dogRespo[0].url}`);
                            
                        
                            // if success hide loader
                       $('.lds-spinner').css("zIndex","-9999999999");
                          
                        
                    },
                    error: (dogErr)=>{
                        alert('Error: '+dogErr+". Please Check your connection and reload this page");
                    }
                });
              }else{
                alert("We encounter error. Please reload the page.");
              }



        },900)
        

    });

  


    // random  advice 1
    $.ajax({
        url: 'https://api.adviceslip.com/advice',
        type: 'GET',
        success: (adviceRespo)=>{
           $('.tips').text(JSON.parse(adviceRespo).slip.advice);
        },
        error: (adviceErr)=>{
            console.log("Error: "+adviceErr);
        }
    });



    

});