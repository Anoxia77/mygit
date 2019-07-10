<template>
    <div>
        <div>
            <input type="text" class="so_suo"/>
        </div>
        <br>
        <div class="wen_ben_kuan">
            <p> {{msg}}</p>
        </div>
        <input type="text" class="so_suo" />
        <input type="button" value="发送" class="button">
    </div>
</template>

<script>
export default {
    name: 'HotelList',
    data:{
        return:{
            msg: '消息'
        }
    }
}
</script>

<style>
.so_suo{
    height: 26px;
    border: 1px solid;
    border-radius: 25px;
    margin-top: 8px;
    /* background: #fff;     */
}
.wen_ben_kuan{
    border: 1px solid #fff;
    width: 100%;
    height: 300px;
    /* border-radius: 25px; */
    background: #fff;
}
.button{
    height: 32px;
    border: 1px solid #ccc;
    width: 50px;
    border-radius: 11px;
}
</style>
