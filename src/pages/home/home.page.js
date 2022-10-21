import { Navbar } from "../../components/navbar/navbar";

export function HomePage() {
    document.title = "Home | Demi";
    return (
        <>
            <Navbar />
            <h1>This is the Home Page.</h1>
        </>
    );
}
