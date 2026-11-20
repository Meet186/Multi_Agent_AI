import { signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "./utils/firebase";
import api from "./utils/axios";
export const App = () => {

  const handleLogin = async (token) => {
        try {
          const {data} = await api.post("/auth/login", {token});
          console.log(data);
        } catch (error) {
          return {error: "Internal Server Error"};
        }
  }


   const handleGoogleLogin = async () => {
   const data = await signInWithPopup(auth, googleProvider)
   const token = await data.user.getIdToken();
   await handleLogin(token);

  }
  return (
   <button onClick={handleGoogleLogin}
    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded items-center justify-center">
   continue with Google
   </button>
  )
}
