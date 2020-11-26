let app = new Vue({
    el: '#app',
    data: {},
    mounted() {
        this.$refs.file.addEventListener('change', this.fileChanged);
    },
    methods: {
        fileChanged(e) {
            let files = e.target.files, reader = new FileReader();
            reader.onload = this._imp;
            reader.readAsText(files[0]);
        },
        _imp() {
            try {
                let _myImportedData = JSON.parse(this.result);
                console.log(_myImportedData)
            } catch (e) {
                alert('解析错误')
            }
        }
    }
})
