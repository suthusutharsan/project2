import "./navigation.css"

const Navigation = () => {
    return (
        <div>
            <div className="container">
                <div className="right">
                    <p>RALPH EDWARDS.</p>
                    
                </div>
                
                <div className="left">
                    <div className="pages">
                        <div className="pageitem">Home</div>
                        <div className="pageitem">About</div>
                        <div className="pageitem">CV</div>
                        <div className="pageitem">Education</div>
                        <div className="pageitem">Testimonial</div>
                        <div className="pageitem">Artical</div>
                    </div>
                    <div className="line"></div>
                    <div className="btn">Contact</div>
                </div>
            </div>
        </div>
    );
};

export default Navigation;