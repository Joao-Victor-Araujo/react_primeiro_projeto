import React from "react";
import './Login.css';
import face from './face.png';

export default function Login(){
    return(
        <div id="divLogin">
            <img alt="icone do facebook" src={face} />
            <form>
                <div className="espaco-campos">
                    Username <input type="text"/>
                </div>
                <div className="espaco-campos">
                    Senha <input type="password"/>
                </div>
                <br />
                <button>Login</button>
            </form> 

        </div>
    );
};
