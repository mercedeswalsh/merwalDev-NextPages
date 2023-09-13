import * as contact from "lib/contact.data"
import Header from "components/Header"

export default function Contact() {
    return (
        <>
        <Header></Header>
            <h1>{contact.title}</h1>
        </>
    )
}