// Challenge 2: Speed Detector (Toy Problem)
function speedDetector(speed){
    let limitSpeed=70;
    let demerits=5;
    let demeritPoints=1;
    let overSpeed=speed-limitSpeed;
    let points=(overSpeed/demerits);
    let excess= 60;
    let highSpeed= limitSpeed + excess

    if (speed<= limitSpeed){
        console.log('Ok')
    }
    else if(speed >= highSpeed){
        console.log('Licence suspended')
    }
    else if(speed > limitSpeed){
        console.log('Points', + points)
    }

    

    
}
speedDetector()