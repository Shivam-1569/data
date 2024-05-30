import {Container, Box,HStack , VStack, Button, Input} from '@chakra-ui/react'
import Message from './Component/Message';
import {useState,useEffect, useRef} from 'react'
import {onAuthStateChanged, getAuth,GoogleAuthProvider,signInWithPopup, signOut} from "firebase/auth"
import{app} from "./firebase"
import {getFirestore,addDoc, collection, serverTimestamp,onSnapshot,query, orderBy} from 'firebase/firestore'



const auth = getAuth(app)
const db = getFirestore(app)

const loginHandler = () => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
}

const logoutHandler = () => (signOut(auth))





function App() {
  const [user, setUser] = useState(false)
  const [message, setMessage] = useState("")
  const [messages, setMessages] = useState([])

const divForScroll = useRef(null)
  const q = query(collection(db, "Messages"), orderBy("createdAt", "asc"))
  const submitHandler = async(e) => {
    e.preventDefault()
  
    try{
      setMessage("")
      await addDoc(collection(db, "Messages"),{
        text: message,
        uid: user.uid,
        uri: user.photoURL,
        createdAt: serverTimestamp()
      })
      
      
      divForScroll.current.scrollIntoView({behavior: "smooth"})
  
    }
    catch(error){
      alert(error)
    }
  } 
  


  useEffect(()=>{
      const unsubscribe = onAuthStateChanged(auth, (data)=>(setUser(data)))

      const unsubscribeForMessage = onSnapshot(q, (snap)=>{
        setMessages(snap.docs.map((item) => {
          const id = item.id
          return {id, ...item.data()}
        }));
      })
      return ()=>{
        unsubscribe()
        unsubscribeForMessage()
      }
  },[])
  return (
    <Box bg={"khaki"}>
      {
        user? <Container bg={'white'} h="100vh">
        <VStack h="full" paddingY={4}>
          <Button w="full" colorScheme="red" onClick={logoutHandler}>
            LogOut
          </Button>

          <VStack bg="purple.100" h="full" w="full" padding="2" overflowY="auto">
            { 
              messages.map((item) => (<Message key={item.id}  text={item.text} uri={item.uri} user={item.uid === user.uid ? "me" : "other"} />))
            }
            

            <div ref={divForScroll}></div>
          </VStack>
     
          <form onSubmit={submitHandler} style={{width: "100%"}}>
            <HStack w={"100%"} >
                  
            <Input value={message} onChange={(e)=>(setMessage(e.target.value))} placeholder='Message..'/>
            <Button colorScheme='purple' type='submit' >
              Send
            </Button>
            </HStack>
          </form>
        </VStack>
      </Container>:
      <VStack justifyContent={"center"} h="100vh">
        <Button colorScheme='purple' alignItems={"center"} onClick={loginHandler}>
          Sign-In with Google
        </Button>
      </VStack>

      }
    </Box>
  );
}

export default App;
