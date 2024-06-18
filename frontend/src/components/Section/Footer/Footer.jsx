import React from 'react';
import './Footer.css';
import Facebook from './uploads/facebook.png';
import Instagram from './uploads/instagram.png';
import Watsapp from './uploads/watsapp.png';
import Modal from 'react-modal';

Modal.setAppElement('#root');

const Footer = ({ isCGVModalOpen, openCGVModal, closeCGVModal, isMentionsModalOpen, openMentionsModal, closeMentionsModal }) => {
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
          <a href="#" onClick={openMentionsModal}>Mentions Légales</a>
          <a href="#" onClick={openCGVModal}>CGV</a>
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
        isOpen={isCGVModalOpen}
        onRequestClose={closeCGVModal}
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
        <button onClick={closeCGVModal}>Close</button>
      </Modal>

      <Modal
        isOpen={isMentionsModalOpen}
        onRequestClose={closeMentionsModal}
        contentLabel="Mentions Légales Modal"
      >
        <h2>Mentions Légales</h2>
        <h3>Éditeur du site</h3>
        <p><strong>Soutien Plus</strong><br />
        Adresse : [Adresse de l'entreprise]<br />
        Téléphone : [Numéro de téléphone]<br />
        Email : contact@soutienplus.ovh<br />
        Numéro SIRET : [Numéro SIRET]</p>
        
        <h3>Hébergement</h3>
        <p><strong>Hébergeur</strong><br />
        Nom de l'hébergeur : [Nom de l'hébergeur]<br />
        Adresse : [Adresse de l'hébergeur]<br />
        Téléphone : [Numéro de téléphone de l'hébergeur]<br />
        Email : [Email de l'hébergeur]</p>
        
        <h3>Propriété intellectuelle</h3>
        <p>Tous les contenus présents sur ce site sont la propriété exclusive de Soutien Plus, sauf mention contraire. Toute reproduction, distribution, modification, adaptation, retransmission ou publication de ces contenus, même partielle, est strictement interdite sans l'accord écrit de Soutien Plus.</p>
        
        <h3>Données personnelles</h3>
        <p>Conformément à la loi Informatique et Libertés du 6 janvier 1978 et au RGPD, vous disposez d’un droit d’accès, de rectification et de suppression des données vous concernant. Pour exercer ce droit, veuillez nous contacter à l’adresse suivante : dpo@soutienplus.ovh.</p>
        
        <h3>Responsabilité</h3>
        <p>Soutien Plus s’efforce d’assurer au mieux de ses possibilités, l’exactitude et la mise à jour des informations diffusées sur ce site. Toutefois, l’éditeur décline toute responsabilité pour toute inexactitude, omission ou modification des informations disponibles sur ce site.</p>
        
        <h3>Liens hypertextes</h3>
        <p>Le site peut contenir des liens hypertextes vers d’autres sites. Soutien Plus n’exerce aucun contrôle sur ces sites et ne peut être tenu responsable de leur contenu.</p>
        
        <h3>Cookies</h3>
        <p>Le site Soutien Plus peut être amené à utiliser des cookies pour améliorer l’expérience de l’utilisateur et réaliser des statistiques de visites. Vous pouvez désactiver les cookies en modifiant les paramètres de votre navigateur.</p>
        
        <button onClick={closeMentionsModal}>Close</button>
      </Modal>
    </footer>
  );
};

export default Footer;