// import ajax from '../services/ajax'; //经过封装的加强型 ajax 函数
//这是名空间，对普通action做划分
// const prefix = 'apple/';
let actions = {
	//注意这里需要 () => ... , 不然 pickAppleAction 不是一个actionCreator, 而是一个thunk
    pickApple: (weight)=>{
        return {
            type:'PICK_APPLE',
            weight
        }
    },
    eatApple:()=>{
        return {
            type:'EAT_APPLE',
            id:'3'
        }
    }
	// pickApple: () => (dispatch,getState) =>{
	// 	//如果正在摘苹果，则结束这个thunk, 不执行摘苹果
	// 	if (getState().isPicking) {
	// 		return;
	// 	}
	// 	//通知开始摘苹果
 //        // dispatch(actions.beginPickApple());
 //        return {
 //            type: 'apple/EAT_PICK_APPLE',
 //            payload: error,
 //            error: true
 //        }
 //        //  //发送摘苹果请求
 //        // ajax({
 //        //     url: '/appleBasket/pickApple',
 //        //     method: 'GET'
 //        // }).done(data => {
 //        //     dispatch(actions.donePickApple(data.weight))
 //        // })
 //        // .fail(error => {
 //        //     dispatch(actions.failPickApple(error));
 //        // })
	// },
	// beginPickApple: () => ({
 //        type: 'apple/BEGIN_PICK_APPLE'
 //    }),
    
 //    donePickApple: appleWeight => ({
 //        type: 'apple/DONE_PICK_APPLE',
 //        payload: appleWeight
 //    }),
    
 //    failPickApple: error => ({
 //        type: 'apple/FAIL_PICK_APPLE',
 //        payload: error,
 //        error: true
 //    }),
};

export default actions;

