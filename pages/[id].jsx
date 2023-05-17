import { getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"

export async function getServerSideProps(context){
    const id = context.query.id
    const docSnap = await getDoc(doc(db, "todos", id))
    const data = docSnap.data()

    return {
        props: {
            todo: {
                title: data.title,
                details: data.details
            }
        }
    }


}

export default function Todo({todo}){
    return(
        <div className="container">
            <h1 className="todo">Todo title: {todo.title}</h1>
            <h3 className="details">Details: {todo.details} </h3>
        </div>
    )
}