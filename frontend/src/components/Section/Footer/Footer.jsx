import React from 'react';
import './Footer.css';
import Facebook from './uploads/facebook.png';
import Instagram from './uploads/instagram.png';
import Watsapp from './uploads/watsapp.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Footer = ({ isModalOpen, openModal, closeModal }) => {
  return (
    <footer className="footerContainer">
      <div className="footerContent">
        <div className="aboutSection">
          <h4>Soutien Plus</h4>
          <p>© 2024 Soutien Plus </p>
        </div>
        <div className="linksSection">
          <h4>Soutien Plus</h4>
          <a href="#">À propos</a>
          <a href="#">Devenir bénévole</a>
          <a href="#">Événements</a>
          <a href="#">Conseils</a>
        </div>
        <div className="linksSection">
          <h4>Aide</h4>
          <a href="#">FAQ</a>
          <a href="#">Situation de crise</a>
          <a href="#">Contact</a>
          <a href="#">Partenariat</a>
        </div>
        <div className="linksSection">
          <h4>Termes</h4>
          <a href="#">Données personnelles</a>
          <a href="#">Modération des avis</a>
          <a href="#">Mentions Légales</a>
          <a href="#" onClick={openModal}>CGV</a>
        </div>
        <div className="socialMediaSection">
          <h4>Restez connecté</h4>
          <div className="socialIcons">
            <img src={Facebook} />
            <img src={Instagram} />
            <img src={Watsapp} />
          </div>
        </div>
      </div>
      
      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="CGV Modal"
      >
        <h2>Conditions Générales de Vente</h2>
        <p>Bienvenue sur Soutien Plus. En utilisant notre site, vous acceptez nos conditions générales de vente détaillées ci-dessous.</p>
        <h3>Objet</h3>
        <p>Les présentes CGV visent à définir les droits et obligations des parties dans le cadre de la vente en ligne de services proposés par Soutien Plus.</p>
        <h3>Services</h3>
        <p>Soutien Plus propose des services d'accompagnement, de conseil et de soutien aux individus et organisations.</p>
        <h3>Tarifs</h3>
        <p>Les prix de nos services sont indiqués en euros et toutes taxes comprises (TTC). Soutien Plus se réserve le droit de modifier les prix à tout moment.</p>
        <h3>Commandes</h3>
        <p>Les commandes sont effectuées en ligne via notre site web. Vous recevrez une confirmation par email une fois la commande validée.</p>
        <h3>Paiement</h3>
        <p>Le paiement s'effectue par carte bancaire ou tout autre moyen proposé sur le site. Le paiement est sécurisé par notre prestataire de service.</p>
        <h3>Rétractation</h3>
        <p>Vous disposez d'un délai de 14 jours pour exercer votre droit de rétractation sans avoir à justifier de motifs ni à payer de pénalités.</p>
        <h3>Livraison</h3>
        <p>Les services sont délivrés selon les modalités et délais spécifiés lors de la commande.</p>
        <h3>Responsabilité</h3>
        <p>Soutien Plus n'est pas responsable des dommages indirects pouvant survenir du fait de l'achat des services.</p>
        <h3>Données Personnelles</h3>
        <p>Nous respectons la confidentialité de vos données personnelles conformément à notre politique de confidentialité.</p>
        <h3>Litiges</h3>
        <p>En cas de litige, une solution amiable sera recherchée avant toute action judiciaire. Les présentes CGV sont soumises à la loi française.</p>
        <h3>Contact</h3>
        <p>Pour toute question ou réclamation, veuillez nous contacter à support@soutienplus.ovh.</p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </footer>
  );
};

export default Footer;
