<template>
    <div class="caption">
        <div class="synopsis">
            <p>{{title.name}}</p>
            <p>{{english.name}}</p>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Caption",
        props:['title','english']
    }
</script>

<style scoped>
    .caption {
        width: 100%;
    }
    .synopsis {
        width:100%;
        margin: 0 auto;
        text-align: center;
        padding: 60px 0;
    }

    .synopsis > p:nth-child(1) {
        color: #464646;
        font-size: 24px;
    }

    .synopsis > p:nth-child(2) {
        /*width: 80px;*/
        /*height: 2px;*/
        color: #a2a2a2;
        margin-top: 10px;
    }
</style>