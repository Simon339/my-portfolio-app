import { useEffect, useState } from "react";
import "./header.css";


const Header = () => {
    window.addEventListener("scroll", function () {
        const header = document.querySelector(".header");
        if (this.scrollY >= 80) header.classList.add("scroll-header");
        else header.classList.remove("scroll-header");
    });

    const [Toggle, showMenu] = useState(false);
    const [activeNav, setActiveNav] = useState("#home");
    

    return (
        <header className="header">
            <nav className="nav container">
                <a href="index.html" className="nav_logo">
                    
                    MS Malapane
                </a>
                <div className={Toggle ? "nav_menu show-menu" : "nav_menu"}>
                    <ul className="nav_list grid">
                        <li className="nav_item">
                            <a href="#home" onClick={() => setActiveNav("#home")} className={activeNav === "#home" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-house-user nav_icon"></i> Home
                            </a>
                        </li>

                        <li className="nav_item">
                            <a href="#about" onClick={() => setActiveNav("#about")} className={activeNav === "#about" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-user-circle nav_icon"></i> About
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#skills" onClick={() => setActiveNav("#skills" )} className={activeNav === "#skills" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-file-check-alt nav_icon"></i> Skills
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#services" onClick={() => setActiveNav("#services")} className={activeNav === "#services" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-briefcase nav_icon"></i> Sevices
                            </a>
                        </li>

                        <li className="nav_item">
                             <a href="#education" onClick={() => setActiveNav("#education")} className={activeNav === "#education" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-scenery nav_icon"></i> Education
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#portfolio" onClick={() => setActiveNav("#portfolio")} className={activeNav === "#portfolio" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-scenery nav_icon"></i> Projects
                            </a>
                        </li>

                        <li className="nav_item">
                        <a href="#contact" onClick={() => setActiveNav("#contact")} className={activeNav === "#contact" ? "nav_link active-link" : "nav_link"
                        }
                        >
                            <i className="uil uil-chat-bubble-user nav_icon"></i> Contact
                            </a>
                        </li>
                    </ul>
                    <i className="uil uil-times nav_close"onClick={() => showMenu (!Toggle)}></i>
                </div>

                <div className="nav_toggle" onClick={() => showMenu (!Toggle)}>
                <i className="uis uis-apps"></i>
                </div>          
            </nav>
        </header>
    );
};

export default Header;