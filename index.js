document.addEventListener('DOMContentLoaded', function () {
    const speedInput = document.getElementById('speedInput');
    const checkSpeedButton = document.getElementById('checkSpeedButton');
    const result = document.getElementById('result');

    checkSpeedButton.addEventListener('click', function () {
        const speed = parseInt(speedInput.value);
        checkSpeed(speed);
    });

    function checkSpeed(speed) {
        const speedLimit = 70;
        const kmPerPoint = 5;
        
        if (speed <= speedLimit) {
            result.textContent = "OK";
        } else {
            const points = Math.floor((speed - speedLimit) / kmPerPoint);
            
            if (points >= 12) {
                result.textContent = `Points: ${points}. License suspended.`;
            } else {
                result.textContent = `Points: ${points}`;
            }
        }
    }
});
