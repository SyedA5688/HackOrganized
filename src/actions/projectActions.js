export const createUser = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
        const firestore = getFirestore();
        firestore.collection('users').add({
            ...project,
            userFirstName: 'Melika',
            userLastName: 'Nassizadeh',
            userID: 123456,
            createAt: new Date()
        }).then(()=>{
            dispatch({type: 'SIGN_UP', project});
        }).catch((err)=> {
            dispatch({type:'SIGN_UP_ERROR', err });
        })
    }
}