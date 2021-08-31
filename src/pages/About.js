import React from 'react';

const About = () => {
    return (
        <div className="p-3 mb-2 bg-secondary text-white">
            <div className="container">
                <div className="display-4"> React App created for studying</div>
                <p>ver.1.0.42</p>
                <div>
                    This application is made using technologies such as:
                    <ul>
                        <li> Hooks: useState, useEffect, useContext.</li>
                        <li> Post creation form. Managed components.</li>
                        <li> Creation of a UI library. Children props.</li>
                        <li> Prevent the page from being refreshed on form submit.</li>
                        <li> Animations. React transition group.</li>
                        <li> Decomposition.</li>
                        <li> Working with the server. Axios. Indication of loading data from the server.</li>
                        <li>Using Firebase . Hosting</li>
                        <li> Loader component. Animations.</li>
                        <li> React router. Page navigation. BrowserRouter, Route, Switch, Redirect.</li>
                        <li>Using Bootstrap</li>
                    </ul>
                </div>
            </div>

        </div>
    );
};

export default About;