const initialState={
    deviceName:''
}

const ACTION_HANDLER = {
    ['DEVICE_NAME'] : (state,action)=>{
        return{
            ...state,
            deviceName:''
        };

    },
    ['DEVICE_Update'] : (state,action)=>{
        return{
            ...state,
            deviceName:'deviceUpdate'
        };

    }
} 
export default function (state = initialState, action) {
    debugger;
    const handler = ACTION_HANDLER['DEVICE_NAME'];
    return handler ? handler(state, action) : state;
}