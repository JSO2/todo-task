import { getDoc, doc } from "firebase/firestore"
import { db } from "../firebase"
import Link from "next/link"

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
            <h1>Todo title: {todo.title}</h1>
            <h3 >Details: {todo.details} </h3>
            <Link href="/">
            <button className="btn">Home</button>
            </Link>
        </div>
    )
}