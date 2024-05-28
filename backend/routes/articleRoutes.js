const express = require('express');
const multer = require('multer');
const path = require('path');
const { addArticle, getAllArticles, getArticleById, updateArticle, deleteArticle } = require('../controllers/articleController');

const router = express.Router();

// Configurer multer pour stocker les fichiers images
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
        cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname))
    }
});

const upload = multer({ storage: storage });

// Définir les routes et lier les contrôleurs
router.post('/articles', upload.single('image'), addArticle);
router.get('/articles', getAllArticles);
router.get('/articles/:id', getArticleById);
router.put('/articles/:id', upload.single('image'), updateArticle);
router.delete('/articles/:id', deleteArticle);

module.exports = router;
