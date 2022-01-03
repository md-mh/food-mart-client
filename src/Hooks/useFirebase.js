import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useEffect, useState } from "react";
import initialzeAuthentization from "../Firebase/firebase.init";
import Swal from 'sweetalert2'

initialzeAuthentization();
const auth = getAuth();

const useFirebase = () => {

    const [user, setUser] = useState({});
    const [admin, setAdmin] = useState(false)
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(true);


    const registrationUsingEmail = (name, email, password, history) => {
        createUserWithEmailAndPassword(auth, email, password)
            .then(result => {
                setError('');
                registerSms()
                const user = result.user;
                setUser(user);
                updateProfile(auth.currentUser, { displayName: name })
                saveUser(email, name, 'POST');
                history.replace('/');
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }

    const sentResetPassByEmail = (email) => {
        sendPasswordResetEmail(auth, email)
            .then(() => {

            setError("")
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage)

        });
}
    const signInUsingEmail = (email, password, location, history) => {
        signInWithEmailAndPassword(auth, email, password)
            .then(result => {
                logInSms()
                const redirect_url = location.state?.from || '/dashboard';
                history.push(redirect_url);
            })
            .catch(error => {
                logInSmsE()
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }

    const signInUsingGoogle = (location, history) => {
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(result => {
                const user = result.user;
                setUser(user);
                logInSms()
                saveUser(user.email, user.displayName, 'PUT');
                const redirect_uri = location.state?.from || '/dashboard';
                history.push(redirect_uri);
            })
            .catch(error => {
                setError(error.message);
            })
            .finally(() => { setLoading(false) });
    }

    const logOut = () => {
        signOut(auth)
            .then(() => {
                logInSms()
             })
            .finally(() => { setLoading(false) });
    }

    const saveUser = (email, displayName, method) => {
        const user = { email, displayName };
        const url = 'https://morning-refuge-65051.herokuapp.com/user';
        fetch(url, {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then()
    }

    useEffect(() => {
        fetch(`https://morning-refuge-65051.herokuapp.com/user/${user.email}`)
            .then(res => res.json())
            .then(data => setAdmin(data.admin))
    }, [user.email])

    const unsubscribe = useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser(user);
            } else {
                setUser({});
            }
            setLoading(false);
        })
        return () => unsubscribe;
    }, [])
    const logInSmsE = () => {
        Swal.fire(
            'Opps',
            'Something wrong',
            'error'
          ) 
    }
    const registerSms = () => {
        Swal.fire(
            'Well Done',
            'You have successfully Register',
            'success'
          )  
    }
    const logInSms = () => {
        Swal.fire(
            'Well Done',
            'You have successfully Login',
            'success'
          ) 
    }
    const deleteSms = () => {
        Swal.fire(
            'Well Done',
            'You have successfully Delete Product',
            'success'
          ) 
    }

    return {
        user,
        admin,
        error,
        loading,
        registrationUsingEmail,
        signInUsingEmail,
        signInUsingGoogle,
        logOut,logInSms,registerSms,logInSmsE,deleteSms
    }

};

export default useFirebase;