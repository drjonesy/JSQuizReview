// create menu with links from an array
// assign a title to the menu

    var createMenu = function(menuTitle, arrayList){
        var menuHTML = "";
        menuHTML += '<ul class="sidebar-nav">';
        menuHTML += '<li class="btn-primary"><a href="../../index.html" style="color:white;"><span class="glyphicon glyphicon-home" aria-hidden="true"></span> Change Course</a></li>';
        menuHTML += '<li class="sidebar-brand">';
        menuHTML += '<a href="#">Quiz Review: <span class="courseName">'+ menuTitle +'</span></a><li>';

        for(var i = 0; i < arrayList.length; i++){
            menuHTML += '<li><a href="'+arrayList[i][1]+'">';
            menuHTML += arrayList[i][0] + '</a></li>';
        }
        menuHTML += '</ul>';
        $("#sidebar-wrapper").append(menuHTML);
        
        $(document).ready(function() {
            document.title = 'Quiz Review: ' + menuTitle;
        });
    }

// Define Title and Description
var titleDescription = function(title, description){
    $("#title").html(title);
    $("#desc").html(description);
}

// Generate Questions from multidimensional array
    var generateQuestions = function(array, length){
        for(var i = 0; i < length; i++){
        $("#questions").append('<div class="col-lg-12" id="qa'+ i +'">'
                                + '<div class="form-group">'
                                +'<label for="Q'+(i)+'">'+array[i][0]+'</label>'
                                +'<input class="form-control" type="text" id="Q'+(i)+'" autocapitalize="off" autocorrect="off"/>'
                                +'</div></div>');
    
        }
        //generate submit button
        $("#questions").append('<input type="button" id="checkAnswersButton" value="submit" class="btn btn-success" />');
        //generate reset button
        $("#questions").append('<input type="button" id="resetQuiz" value="Try Again" class="hide"/>');
    }

// check answers
var totalCorrect = 0;
var checkAnswersButton = function(array){
        
        var totalQuestions = array.length - 1;
        var percent;
        //set click function effect --- logical error
        $("#checkAnswersButton").click(function(){
            //Check each input value
            //Compare each input value to matching index value multiArray
            

            for(var i = 0; i < array.length; i++){
                var $indexValue = $("#Q"+(i)).val();

                //compare input value to multiArray value 0
                if($indexValue.toLowerCase() !== array[i][1].toLowerCase()){
                    //display x in red for failed attempt
                    $("#Q"+(i)).after(' <div class="text-danger"><span class="glyphicon glyphicon-remove" aria-hidden="true"></span> ' + array[i][1] + '</div>');
                }else{
                    //display O for pass in green
                    $("#Q"+(i)).after(' <div class="text-success"><span class="glyphicon glyphicon-ok" aria-hidden="true"></span> ' + array[i][1] +'</div>');
                    totalCorrect++;
                }
            }
            //disable checkAnswer
            $(this).attr("class","hide");
            $("#resetQuiz").attr("class","btn btn-warning");
            //Scroll to top of page
            $('body').animate({ scrollTop: 0 }, 'slow');
            //round percentage correct
            percent = totalCorrect/totalQuestions;
            //display number correct:ex: 3/4 and %
            $('#grade').html('<p><strong>Grade:</strong> ' + totalCorrect + "/" + totalQuestions + " ( " + Math.round(percent*100) + "% )" +'</p>');
        });

    }

// RESET BUTTON

var resetButton = function(array){
        $("#resetQuiz").click(function(){
            for(var i = 1; i < array.length+1; i++){
                //clear all text fields
                $("#Q"+i).val("");
                //remove all fa characters <i>
                $(".text-danger,.text-success").remove();

            }
            //hide reset button
            $(this).attr("class","hide");
            //show submit button
            $("#checkAnswersButton").attr("class","btn btn-success");
            //Scroll to top of page
            $('body').animate({ scrollTop: 0 }, 'slow');
            //remove grade
            totalCorrect = 0;
            $('#grade p').remove();

        });
    }    

var generateQuiz = function(array){
    generateQuestions(array, array.length);
    checkAnswersButton(array);
    resetButton(array);
    limitQuestionDisplay(array);
    $("#title").append('<div style="display:inline-block; font-size:2rem;"> Questions Available: '+ (array.length-1) + '</div>');
}
//generates a box with the butttons and options to limit the display of the questions displayed
var limitQuestionDisplay = function(array){
    // Limit Questions Display
    $("#title").before('<div id="setViewNum"></div>');
    var optionsHTML = "";
        optionsHTML += '<label>Either input a limited number of questions and click [Limit Display] or Click [Show All] </label><br />';
        optionsHTML += '<input id="viewNumInput" type="text" class="form-control" value="' + (array.length -1) + '" />';
        optionsHTML += '<input id="limitDisplayBtn" type="button" class="btn btn-primary" value="Limit Display"/>';
        optionsHTML += '<span style="padding:0 1rem;">or</span>';
        optionsHTML += '<input input="button" id="showAllBtn" type="reset" class="btn btn-default" value="Show All" />';
    $('#setViewNum').append(optionsHTML);
    // Limit Questions Functionality
    var $viewNumInput = $("#viewNumInput");

    $("#showAllBtn").click(function(){
        for(var i = 0; i < array.length; i++){
            $('#qa'+i).show();
        }
        $viewNumInput.val(array.length - 1);
    });

    
    $("#limitDisplayBtn").click(function(){
        var displayValue = $viewNumInput.val();

        for(var i = 0; i < array.length; i++){
            $('#qa'+i).show();
        }

        
        if(displayValue >= array.length){ 
            displayValue = array.length - 1;
            $viewNumInput.val(displayValue);
        }
        if(displayValue < 1){
            $viewNumInput.val(1);
            displayValue = 1;
        }

        for(var i = array.length; i >= displayValue; i--){
            $('#qa'+i).hide();
        }

    });
    
}    


// function adds a new course to the homepage. by appending the course to <div id="courses"></div>
// all styles colors are currently blue. The color will be editable in the future.
// To add a new course edit the AvailableCourses.js file
var addCourse = function(title, description, link){
    var newCourseHTML = "";
    newCourseHTML += '<div class="col-md-4">';
    newCourseHTML += '<a href="course/'+ link +'">';
    newCourseHTML += '<div class="panel panel-primary">';
    newCourseHTML += '<div class="panel-heading">' + title + '</div>';
    newCourseHTML += '<div class="panel-body">'+ description +'</div>';
    newCourseHTML += '</div>';
    newCourseHTML += '</a>';
    newCourseHTML += '</div>';

    $("#courses").append(newCourseHTML);
}

    
    //Toggle Menu
    $("#menuToggler").html('<a href="#menu-toggle" class="" id="menu-toggle"><span class="glyphicon glyphicon-menu-hamburger" style="font-size:3rem;" aria-hidden="true"></span> Select Chapter Quiz</a>');
     $("#menu-toggle").click(function(e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });


    

