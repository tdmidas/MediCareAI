import "./Footer.css"
const CustomFooter = () => {
    return (
        <div className="footer" style={{ textAlign: 'center', position: "relative" }}>
            MediCareAI ©{new Date().getFullYear()} Created by MinhDai
        </div>
    );
}

export default CustomFooter;