Webcam.set({
    width:350,
    height:350, 
    image_format:'png',
    png_quality:90
    });
    camera=document.getElementById("camera");
    Webcam.attach('#camera');

    function take_snapshot(){
        Webcam.snap(function(data_uri){
            document.getElementById("output").innerHTML="<img id='capture_image' src='"+data_uri+"'>";
            
        });

        console.log("ml5 version is : ", ml5.version);
        classifier=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/TIRHI-ebW/model.json", modelLoaded);
    }
        function modelLoaded(){
            console.log("model Loaded");
         }
    function check(){
        var img1=document.getElementById("capture_image");
        classifier.classify(img1,gotResult);
        }
        function gotResult(error, result){
            if(error){
                console.error(error);
            }
            else{
                console.log(result);
                document.getElementById("result_object_name").innerHTML=result[0].label;
                document.getElementById("result_object_accuracy").innerHTML=result[0].confidence.toFixed(3);
            }
        
            
        
        }
    