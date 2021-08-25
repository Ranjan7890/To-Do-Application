
$(function() {
    //Attaching DOM element to varibles
    var $listItems = $("#listItems");
    var $inputItem = $("#inputItem");
    var $initialMessage = $("#initialMessage");
    
    //Counting amount of items in the list
    //To display or hide notification
    var displayMessage = function() {
      if(!$listItems.children().length){
        //$notification.css("display", "block");
        $initialMessage.fadeIn("fast");
      } else {
        $initialMessage.css("display", "none")
      }
    }
  
    //Attaching event handler to the add button
    $("#addItem").on("click", function() {
      
      //Returning false if the input is empty
      if(!$inputItem.val()) { return false; }
      
      //Appending li with the input value
      $listItems.append("<li>" + $inputItem.val() + "<button class='delete'>&#10006</button></li>");
      
      //Cleaning input after add event
      $inputItem.val("");
      
      //Display/Hide Message
      displayMessage();
      
      //Attaching even handler to the delete button
      $(".delete").on("click", function() {
        
        //Assigning "this" to varible, as it doesn't
        //work correctly with setTimeout() function
        var $parent = $(this).parent();
        
        //Displaying CSS animation
        $parent.css("animation", "fadeOut .3s linear");
        
        //Timeout on remove function
        setTimeout(function(){
          $parent.remove();
          displayMessage();
        }, 295);
      
      })
    })
  });