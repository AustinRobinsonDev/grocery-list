const Footer = ({list}) => {
    let todaysYear = new Date().getFullYear();
    return (
        <footer className={`${list.length > 0 ? 'footer-full' : 'footer-empty'}`}>
            <h4>Copyright &copy; {todaysYear}</h4>
        </footer>
    )
}

export default Footer