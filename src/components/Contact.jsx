import React from 'react';
import github from '../../public/assets/images/icons/github-branco.png';
import linkedin from '../../public/assets/images/icons/linkedin-branco.png';
import whatsapp from '../../public/assets/images/icons/whatsapp-branco.png';

const Contact = () => {
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div id='contact' className='contact'>
            <h1 className='contact_title subtitle section-title'>CONTATO</h1>
            <p className='contact_text'>Em caso de interesse no meu trabalho ou se houver qualquer dúvida, clique no botão abaixo para entrar em contato comigo pelo WhatsApp.<br/>
            Caso preferir, entre em contato pelo LinkedIn (link no rodapé) ou envie um e-mail (lxavier.dev@hotmail.com).</p>
            <a className='btn' href="https://wa.me/5547992880006">ENTRAR EM CONTATO</a>
            <div className='contact_footer'>
                <div className='footer_seta'>
                    <img src='../assets/images/seta.png' alt="" />
                    <img src='../assets/images/seta.png' alt="" />
                </div>
                <p onClick={scrollToTop} className='back-to-top'>VOLTAR PARA O TOPO</p>
                <div className='content_icons'>
                    <a href="https://wa.me/5547992880006">
                        <img className='icons' src={whatsapp} alt="Logo whatsapp" />
                    </a>
                    <a href="https://github.com/lnxavier">
                        <img className='icons' src={github} alt="Logo github" />
                    </a>
                    <a href="https://www.linkedin.com/in/lucasnathaniell/">
                        <img className='icons' src={linkedin} alt="Logo linkedin" />
                    </a>   
                </div>
                <p><strong>Desenvolvido</strong> por Lucas Nathaniel Xavier</p>
            </div>
        </div>
    );
};

export default Contact;
