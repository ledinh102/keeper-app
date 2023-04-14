export default function Footer() {
    const date = new Date();
    return <footer><p>Copyright © {date.getFullYear()}</p></footer>
}