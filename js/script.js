//-------------------------------------------Код класса------------------------------------------------------------------------------------
class CountdownTimer{
    constructor(obj){
        this.selector = obj['selector']
        this.targetDate = obj['targetDate']
    }
    start(){
        const date = new Date();
        console.log(this.selector)
        console.log(this.targetDate)
        let now = date.getTime();
        console.log(now)
        let later = this.targetDate.getTime()
        console.log(later)

        let time = later - now
        const days = Math.floor(time / (1000 * 60 * 60 * 24));
        const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
        const secs = Math.floor((time % (1000 * 60)) / 1000);
        if(days <= 0 || hours < 0 || mins < 0 || secs < 0){
            alert('The time for the timer is not correct')
        }
        else{
            let mainTimer = document.querySelector(this.selector)
            let daysOut = mainTimer.children[0].children[0] 
            let hoursOut = mainTimer.children[1].children[0] 
            let minsOut = mainTimer.children[2].children[0] 
            let secsOut =  mainTimer.children[3].children[0]
            setInterval(() => {
                const date = new Date();
                let now = date.getTime();
                let later = this.targetDate.getTime()
                let time = later - now
                let days = Math.floor(time / (1000 * 60 * 60 * 24));
                let hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                let mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
                let secs = Math.floor((time % (1000 * 60)) / 1000);
                daysOut.textContent = days
                hoursOut.textContent = hours
                minsOut.textContent = mins
                secsOut.textContent = secs
                console.log(`Timer :` + days + ' ' + hours + ' ' + mins + ' ' + secs)
            },1000)
        }

    }
}

//-------------------------------------------------------------------------------------------------------------------------------

timer = new CountdownTimer({
    selector: '#timer-1',
    targetDate: new Date('June 28 , 2025'),
  });
timer.start()