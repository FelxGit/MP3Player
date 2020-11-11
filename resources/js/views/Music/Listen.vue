<template>
    <div class="mp3player">
                
        <audio id="player" controls>
            <source src="" type="audio/mpeg">
            Your browser does not support the audio element.
        </audio>
        <br/>
        <button id="playPause">Play/Pause</button>
        <button id="next">Next</button>
        <button id="previous">Previous</button>
    </div>
</template>
<script>
export default {
    data() {
        return {
            _player: document.getElementById("player"),
            _playlist: document.getElementById("playlist"),
            _stop: document.getElementById("stop"),
            isLoggedIn: localStorage.getItem('mp3player.user') !== null,
            user: null
        }
    },
    mounted() {
        if(this.isLoggedIn)
        this.user = localStorage.getItem('mp3player.user')
    },
    methods: {
    }
}
</script>
<style scoped>
.mp3player {
    width: 100%;
    height: 25%;
    padding: 3%;
    text-align: center;
    position: absolute;
    bottom: 10%;
    box-shadow: 0 10px 6px -6px #777; 
}
</style>