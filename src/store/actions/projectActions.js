export const createProject = (project) => {
    return (dispatch, getState, {getFirebase, getFirestore}) => {
//make assinc call to database
        const firestore = getFirestore(); //komuniciramo sa firestore
        const profile = getState().firebase.profile;
        const authorId = getState().firebase.auth.uid;  
        firestore.collection('projects').add({ //dodajemo novi dokument u collection (firebase)
            ...project,
            authorFirstName: 'Luka',
            authorLastName: 'Gutovic',
            authorId: 12345,
            createdAt: new Date()
        }).then(() => {
            dispatch({ type: 'CREATE_PROJECT', project });
        }).catch((err) => {
            dispatch({ type: 'CREATE_PROJECT_ERROR', err });
        })

    }
};


//pronaci ZASTO getFirebase, profile, authorID nisu pronadjeni, to je vrv resenje zasto ne prepoznaje u inspectu
//ponovo pogledati turotirial #14