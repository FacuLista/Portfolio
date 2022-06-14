import React, { Component } from 'react';
import { ImGithub, ImInstagram, ImFacebook2, ImLinkedin } from "react-icons/im";


class Social extends Component {
    render() {
        return (
            <div class="social">
            <a href="https://github.com/FacuLista" target="_blank" rel="noopener noreferrer"><i class="fab fa-github"><ImGithub/></i></a>
            <a href="https://Instagram.com/faculista" target="_blank" rel="noopener noreferrer"><i class="fab fa-instagram"><ImInstagram/></i></a>
            <a href="https://www.facebook.com/facundopier.lista" target="_blank" rel="noopener noreferrer"><i class="fab fa-facebook-f"><ImFacebook2/></i></a>
            <a href="https://www.linkedin.com/in/facundo-lista-pagu%C3%A9s-06951a231/" target="_blank" rel="noopener noreferrer"><i class="fab fa-linkedin-in"><ImLinkedin/></i></a>
            </div>
            )
        }
    }
    
export default Social
    