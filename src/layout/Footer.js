const Footer = ({list}) => {
    let todaysYear = new Date().getFullYear();
    return (
        <footer className={`${list.length > 3 ? 'footer-full' : 'footer-empty'}`}>
            <h4>Copyright &copy; {todaysYear} by Austin Robinson</h4>
        </footer>
    )
}

export default Footer