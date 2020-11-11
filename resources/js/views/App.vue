<template>
<div>
    <div class="row justify-content-center">
        <div class="col-md-8">
            <div class="card">
        <div class="card-header">Playlist - 0
            <div v-show="upload_status === 'PENDING'" class="spinner-border spinner-border-sm float-right"></div>
            <a v-show="upload_status !== 'PENDING'" href="#" @click="$refs.file.click()" id="upload-mp3">
            <span class="float-right">
                <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-upload" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path fill-rule="evenodd" d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                </svg>
            </span>
            </a>
        </div>
        <div class="card-body">
            <p v-show="upload_status === 'ERROR'" class="text-danger"><b>Error Upload: </b> Try again later.</p>
            <input type="file" @input="addMP3" accept=".mp3" ref="file" style="visibility:hidden">
            <ul class="list-group text-center">
                <li v-for="(mp3,index) in listmp3" :key="index" class="list-group-item">
                    <router-link :to="{ path: '/listening' }">
                        {{ mp3.name }}
                    </router-link>
                </li>
            </ul>
        </div>
        </div>
        </div>
    </div>
    
    <router-view></router-view>
</div>
</template>

<script>    
export default {
    data() {
        return {
            listmp3: [],
            upload_status: ''
        }
    },
    mounted() {
        this.setDefaults()
    },
    methods: {
        addMP3(e) {
            this.upload_status = 'PENDING'

            let form_data = new FormData()
            form_data.append('mp3', e.target.files[0])

            this.$http.post('api/mp3', form_data)
            .then( response => {
                this.setDefaults()
                this.upload_status = 'SUCCESS'
            })
            .catch( err => {
                this.upload_status = 'ERROR'
            })
        },
        setDefaults() {
            this.$http.get('api/mp3')
            .then( response => {
                this.listmp3 = response.data
            })
        }
    }
}
</script>