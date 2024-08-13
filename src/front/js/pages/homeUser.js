import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";

export const HomeUser = () => {

    const navigate = useNavigate();
    
    useEffect(() => {
        if (!sessionStorage.getItem("token")) {
            navigate("/login");
        }
    }, []);

    return (
        <div className="text-center mt-5 mx-auto">
            <h1>Congrats! You have an account!</h1>

            <p className="my-5">
    <iframe 
        src="https://giphy.com/embed/Id6dC0GQOOzPMXgcPv" 
        width="480" 
        height="401" 
        style={{ border: "none" }} 
        frameBorder="0" 
        className="giphy-embed" 
        allowFullScreen
    ></iframe>
    <p>
        <a href="https://giphy.com/gifs/theoffice-the-office-tv-michael-scott-paper-company-Id6dC0GQOOzPMXgcPv">via GIPHY</a>
    </p>
    </p>

            
        </div>
);
};