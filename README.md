# COSMOS

L'univers en 3D et en zoom continu, dans le navigateur : système solaire en temps réel, étoiles proches et exoplanètes, nébuleuses, trous noirs, pulsars, Voie lactée et galaxies.

## Mise en ligne

Le dépôt se publie tel quel avec GitHub Pages : *Settings → Pages → Deploy from a branch → `main` / root*. Il n'y a aucune étape de compilation. Une fois ouverte, l'application peut être installée et fonctionne hors ligne.

Après une modification, changer `VERSION` dans `sw.js` pour que les appareils déjà installés reçoivent la mise à jour.

## Contenu

- **Système solaire** : Soleil, 8 planètes, Pluton, 20 lunes, ceinture principale, troyens et ceinture de Kuiper. Positions calculées à la date affichée (éléments képlériens JPL).
- **Engins** : ISS, Hubble, James Webb, Voyager 1 et 2, New Horizons, en maquettes simplifiées.
- **Étoiles** : 41 000 étoiles réelles jusqu'à la magnitude 8, 19 étoiles où se rendre, TRAPPIST-1 et ses 7 planètes.
- **Nébuleuses** : images d'observatoire placées à leur distance et à leur taille réelles.
- **Extrêmes** : trous noirs avec déviation de la lumière calculée rayon par rayon, pulsars, magnétar, quasar.
- **Galaxies** : modèle 3D de la Voie lactée, Andromède, Triangle, Tourbillon, Sombrero, M87.
- Recherche par nom, fiches détaillées, contrôle du temps, quatre visites guidées.

## Fichiers

- `index.html` : toute l'application (interface, moteur, shaders, données).
- `stars.json` : catalogue d'étoiles compacté (5 valeurs par étoile : direction x, y, z, magnitude × 100, indice B−V × 1000).
- `earth-*.jpg/png` : textures de la Terre. `img-*.jpg` : nébuleuses et galaxies.
- `manifest.json`, `sw.js`, `icon-*.png` : installation et fonctionnement hors ligne.

## Limites connues

- Les sondes lointaines suivent une trajectoire rectiligne approchée, valable autour de la date actuelle ; la position de l'ISS et de Hubble sur leur orbite est indicative.
- Les lunes autres que la Lune ont la bonne orbite et la bonne période, mais une position indicative le long de l'orbite.
- Les nébuleuses et galaxies lointaines sont des images plates qui font face à la caméra.
- La surface des exoplanètes est imaginée. La forme des bras de la Voie lactée est un modèle.
- Le ciel derrière un trou noir n'est pas déformé ; les trous noirs sont traités sans rotation.

## Crédits

- Three.js r128.
- Textures de la Terre : NASA Blue Marble / Earth Observatory, via le paquet `three-globe`.
- Catalogue d'étoiles : paquet `d3-celestial`.
- Piliers de la Création, nébuleuse du Crabe, nébuleuse de l'Anneau, galaxie du Sombrero : NASA, ESA, Hubble (STScI).
- Autres images du catalogue Messier : reprises du dépôt `Odiend1/messier-api`. Leur origine exacte reste à vérifier avant toute diffusion large ; les crédits affichés dans l'application pour ces images sont indicatifs.
