<template>
    <a-page-header
      class="okv"
      :title="doc.name"
    >
        
    </a-page-header>
</template>
<script>
module.exports = {
        props: ['value'],
        data(){
            return {
                ...this.value,
            }
        },
        mounted: async function(){
            let me = this;
            
        },
        methods: {
            
        }
    }
</script>
<style>
    .okv{
        width: 100%;height: 100%;background: #fff;
    }
</style>