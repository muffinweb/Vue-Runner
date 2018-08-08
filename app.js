new Vue({
    el: '#app',
    data: {
        run: false,
        left:0,
        ended: false
    },
    methods: {
        startRunning: function(){
            const self = this;
            setTimeout(function(){
                self.run = !self.run;
                self.move();
            }, 1100);
        },

        move: function(){
            const self = this;
            var runInterval = setInterval(function(){
                self.left += 3;
                if(self.left >= 602){
                    clearInterval(runInterval);
                    self.run = !self.run;
                    self.left = 722;
                    self.ended = true;
                }
            }, 1);
        },
        playSound: function(file){
            if(file){
                var audio = new Audio(file);
                audio.play();
            }
        },

        restart: function(){
            /** Reset position and finish reached */
            this.left = 0;
            this.ended = false;
        }
    },
    computed: {
        isRunning: function(){
            return {
                isrunning: this.run
            }
        }
    }
})