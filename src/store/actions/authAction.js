export const signIn = (credentials) => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
      
      firebase.auth().signInWithEmailAndPassword(
        credentials.email,
        credentials.password
      ).then(() => {
        dispatch({ type: 'LOGIN_SUCCESS' });
      }).catch((err) => {
        dispatch({ type: 'LOGIN_ERROR', err });
      });
  
    }
  }
  //credentials iz prvog reda: njih ce porediti sa creds sa 
//stranice SignIn (./auth/signIn), ne moraju da budu istog imena
  
export const signOut = () => {
    return (dispatch, getState, {getFirebase}) => {
      const firebase = getFirebase();
  
      firebase.auth().signOut().then(() => {
        dispatch({ type: 'SIGNOUT_SUCCESS' })
      });
    }
  }

  export const signUp = (newUser) => { //ovde prima  mapiranog novog usera sa SignIn-a
      return (dispatch, getState, {getFirebase, getFirestore}) => {
          const firebase = getFirebase();
          const firestore = getFirestore();

        firebase.auth().createUserWithEmailAndPassword( //ovo ce da komunicira sa firebase-om i da kreira novog usera umesto nas
            newUser.email,
            newUser.password
        ).then(resp => { //then je callback method i on ce se izvrsiti odmah nakon ovog prethodnog, odnosno cim se kreira novi user
            return firestore.collection('user').doc(resp.user.uid).set({//collection ne postoji trenutni, ali nije bitno jer ce firebase da kreira umesto nas
                firstName: newUser.firstName,
                lastName: newUser.lastName,
                initials: newUser.firstName[0] + newUser.lastName[0]
            }); 
        }).then(() => {
            dispatch({type: 'SINGUP_SUCCESS'})
        }).catch(err => {
            dispatch({type: 'SIGNIP_ERROR', err}) //ovaj err pozivamo preko action u authReducer
        })

      }
  }

//ako stavimo .add() onda firebase automatski dodeljuje ID, ako zelimo specificno, onda kazemo .doc() i u zagradai referenciramo na neto
//gore smo referencirali na usera koji ce se automatski referencirati u redovima 34 35 36 do 37
// set() setuje propertije i prosledjuje objekat
//initials - inicijali concat (spajamo prvo slovo imena i prvo slovo prezimena)
// onda se ime i prezime stor-uju u novi document (doc) i ta funckija return promise

//kad smo sve zavrsili u authReduceru sa case-evima prelaizmo na SignUp component-u


//onda dodajemo jos jedan then, jer hocemo da kad se to zavrsi da se odradi jos nesto drugo

  //firebase koristimo za sign a new user, 
  //firestore koristimo za komunikaciju sa database

// iz firebase auth service uzimamo email, uid, photo URL, display name
// preko UID-a mozemo da identifikujemo komunikaciju izmedju firebase auth service i firestore users collection
// iz firebase-a imamo UID koji prihvata firestore, uid izgleda ovako recimo - XgF48DS21 i potpuno je jednak UID-u iz firebase, tj to je ista stvar

