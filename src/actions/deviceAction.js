export default addDevice(){
    return {
        type:'ADD_DEVICE',
        payload:{
            device:{
                deviceName:'TVS'
            }
        }
    }
}