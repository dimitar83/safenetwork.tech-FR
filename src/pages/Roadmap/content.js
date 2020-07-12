export default {
  banner: {
    pageTitle: 'Le réseau ~~Im~~Possible',
    pageDesc: `14 ans de recherche et développement se concrétisent alors que nous rassemblons les derniers éléments de base de ce que certains ont dit impossible: un accès sécurisé pour tous.`,
    latestUpdate: {
      overline: 'DERNIÈRE MISE',
      date: 'À JOUR 29 août 2019',
      title: 'Voûtes de phase 1',
      para: `La dernière pièce du puzzle est terminée et nous avons maintenant la CLI SAFE, les bibliothèques client SAFE, le coffre-fort SAFE et le navigateur SAFE.`,
       CTA: {
         name: 'Forum du réseau SAFE',
         url: 'https://safenetforum.org/t/safe-network-dev-update-march-26-2020/31360'
       }
    }
  },
  subscribe: {
    title: 'Abonnez-vous pour les mises à jour:'
  },
  releases: {
    release1: {
      overline: 'VIS MAINTENANT',
      title: 'Voûtes de phase 1',
      para:[
        `Cette version de Phase 1 Vault est principalement destinée à présenter les fonctionnalités du réseau aux consommateurs (personnes utilisant le réseau pour parcourir, partager des données, etc.) et aux créateurs (développeurs ou éditeurs de contenu). Il permet aux utilisateurs de tester des fonctionnalités telles que SAFE CLI et SAFE Client Libs, ainsi que d’introduire les nouveaux types de données.`,
        'C’est simple à utiliser. Téléchargez simplement un binaire Vault qui s’exécutera localement sur votre ordinateur. Les détails et les liens peuvent être trouvés dans cet article du forum.'
      ],
      // accordion: {
      //   header: [
      //     'The Share Vault Network Feature',
      //     'Description',
      //     'Status'
      //   ],
      //   items: [
      //   ]
      // }
    },
    release2: {
      overline: 'Jalon à venir',
      title: 'Fleming SAFE Network',
      para: ['La prochaine étape importante pour le réseau SAFE. Alors que le réseau de coffre-fort partagé continuera de fonctionner, il s’agira d’un réseau autonome qui permettra aux particuliers d’exécuter des coffres-forts - stockage décentralisé à partir d’ordinateurs personnels. La sortie de Fleming sera notable pour de nombreuses raisons, notamment le fait qu’avec le stockage de données, le réseau contiendra désormais également Test Safecoin.'],
      accordion: {
        header: [
          'Fonction Fleming',
          'La description',
          'Statut'
        ],
        items: [
          {
            feature: 'L’auto-authentification',
            desc: 'La possibilité de se connecter à un réseau décentralisé sans l’autorisation ou l’existence d’un tiers',
            status: 'Achevé',
            para: [
              'MaidSafe a inventé la technologie qui permet à une personne de se connecter à un réseau décentralisé en toute sécurité sans nécessiter l’intervention d’un tiers. Le réseau Shared Vault est le seul endroit au monde où vous pouvez le voir en action.'
            ],
            // CTA: {
            //   name: 'Read More',
            //   url: 'https://safenetwork.tech/roadmap/#self-authentication'
            // },
          }, {
            feature: 'Auto-cryptage',
            desc: 'Les données sont cryptées sur votre ordinateur avant d’être stockées sur le réseau: aucune clé ni mot de passe ne quitte votre machine',
            status: 'Achevé',
            para: [
              'Inventé par MaidSafe, c’est le processus par lequel tout fichier à stocker dans le réseau est d’abord divisé en morceaux, haché, puis crypté. Ces morceaux sont ensuite eux-mêmes chiffrés à l’aide du hachage d’un autre morceau du même fichier.'
            ],
            video: {
              url: 'https://s3.eu-west-2.amazonaws.com/ms-marketing/website-videos/Self+Encryption+on+the+SAFE+Network.mp4',
              caption: 'Explication de l’auto-chiffrement'
            }
          }, {
            feature: 'Sections disjointes',
            desc: 'Autrement connu sous le nom de Sharding, cela permet au réseau d’évoluer en répartissant les responsabilités pour des fonctions spécifiques du réseau.',
            status: 'Achevé',
            para: [
              'Garantit que le réseau peut évoluer en gérant les responsabilités et les emplacements de chaque nœud sans nécessiter aucune intervention humaine. Cela agit également comme une mesure de sécurité pour garantir qu’un attaquant ne puisse pas choisir son emplacement ou ses responsabilités.'
            ],
            CTA: {
              name: 'Lire la suite',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-6-disjoint-sections/28530'
            },
          }, {
            feature: 'Relais de messages',
            desc: 'Garantit qu’un message peut être envoyé entre les nœuds dans différentes sections disjointes',
            status: 'Achevé',
            para: [
              'Garantit qu’un message peut être envoyé entre des nœuds dans différentes sections disjointes. Dans cette première itération, chaque message contient les signatures des membres des sections disjointes mais ne vérifie pas encore les signatures elles-mêmes.'
            ],
          },
          {
            feature: 'PARSEC',
            desc: 'Algorithme de consensus asynchrone',
            status: 'Achevé',
            para: [
              'Garantit qu’un réseau mondial décentralisé et sans autorisation peut parvenir à un accord sur les événements autorisés et l’ordre dans lequel ils doivent être enregistrés. Un algorithme basé sur DAG qui atteint le plus haut niveau de sécurité possible, inventé par MaidSafe de manière à garantir qu’il est mathématiquement certain que chaque partie du réseau parviendra à un accord final. À Fleming, nous publierons une version hautement asynchrone de PARSEC, avec une asynchronicité complète à venir plus tard.'
            ],
            CTA: {
              name: 'Lire la suite',
              url: 'https://hub.safedev.org/parsec/'
            },
          }, {
            feature: 'Vieillissement des nœuds',
            desc: 'Un système décentralisé pour classer le comportement, les performances et les capacités des nœuds sur le réseau qui ne nécessite aucune intervention humaine.',
            status: 'Achevé',
            para: [
              'Chaque nœud du réseau SAFE se voit attribuer un âge par le réseau lui-même. L’âge du nœud augmente chaque fois qu’un nœud se déplace entre les sections disjointes, seuls les plus âgés (aînés) ayant le droit de voter pendant l’algorithme de consensus PARSEC.',
              'Plongez dans les détails du RFC et [rejoignez la discussion](https://forum.safedev.org/t/rfc-45-node-ageing/157) sur le forum.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0045-node-ageing/0045-node-ageing.md'
            },
          }, {
            feature: 'Livraison sécurisée des messages',
            desc: 'Communication sécurisée entre les nœuds - messages avec source authentifiée',
            status: 'Achevé',
            para: [
              'Garantit que les messages sont envoyés et signés de manière à permettre aux nœuds de s’appuyer sur le contenu de chaque message malgré l’absence de relation préalable avec l’expéditeur. Cela résout un problème rencontré par de nombreux projets existants basés sur la blockchain et est essentiel lorsque vous avez un réseau qui déplacera de manière autonome les nœuds selon les besoins.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0056-secure-message-delivery/0056-secure-message-delivery.md'
            },
          }, {
            feature: 'Livraison fiable des messages',
            desc: 'Communication garantissant la bonne transmission des messages.',
            status: 'Achevé',
            para: [
              'Garantit que tous les messages envoyés seront livrés avec succès vers leurs destinations, même lorsque certains nœuds responsables de la remise échouent.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0058-reliable-message-delivery/0058-reliable-message-delivery.md'
            },
          }, {
            feature: 'QUIC-P2P',
            desc: 'Le langage de bas niveau que les utilisateurs se connectant à SAFE utiliseront pour toutes les communications réseau',
            status: 'Achevé',
            para: [
              'Logiciel qui permet aux ordinateurs de communiquer de manière cryptée sur le réseau SAFE. Le logiciel fournit l’infrastructure permettant aux messages de voyager tandis que la couche de routage du réseau définit les règles dans lesquelles les messages peuvent voyager.'
            ],
          }, {
            feature: 'Détection de malice',
            desc: 'Empêcher les nœuds malveillants de renverser l’algorithme de consensus, PARSEC',
            status: 'Achevé',
            para: [
              'La façon dont les nœuds identifient les nœuds malveillants qui endommagent le réseau au sein d’une section disjointe et le mécanisme par lequel ils acceptent d’éjecter ce nœud ou d’atténuer le risque.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/maidsafe/rfcs/blob/master/text/0050-malice_in_parsec/0050-malice_in_parsec.md'
            }
          }, {
            feature: 'Testez Safecoin & Wallet',
            desc: 'Permettre au réseau de facturer et à un utilisateur d’envoyer et de recevoir des paiements vers un portefeuille, en unités appelées Test Safecoins',
            status: 'Achevé',
            para: [
              'Safecoin est le mécanisme d’incitation qui encourage les individus à fournir les ressources informatiques dont le réseau a besoin: stockage, large bande et ressources CPU.',
            ]
          }, {
            feature: 'Agriculture',
            desc: 'Le processus de fourniture de ressources et de réception de Safecoin en retour',
            status: 'Développement',
            para: [
              'Les personnes qui choisissent de fournir les ressources dont le réseau a besoin ont la possibilité d’être récompensées par Safecoin. Ce travail garantit que le Réseau récompense ceux qui lui fournissent des ressources précieuses.',
            ],
          }, {
            feature: 'Voûtes de la maison',
            desc: 'La possibilité pour n’importe qui de télécharger des logiciels et d’exécuter des coffres-forts à partir de la maison, créant un stockage décentralisé pour le réseau',
            status: 'Développement',
            para: [
              'Le stockage décentralisé des données est un élément clé du réseau SAFE. Cette version permettra aux nœuds de participer quelles que soient les ressources qu’ils offrent.'
            ],
          }, {
            feature: 'Types de données publiés et non publiés',
            desc: 'Autoriser le réseau à stocker des données publiées et non publiées via les types AppendOnlyData ou MutableData',
            status: 'Achevé',
            para: [
              'Les données publiées se réfèrent au contenu qui est publié (rendu disponible) pour tout le monde, comme les sites Web, les blogs ou les articles de recherche. Pour un tel contenu public, il devient important de conserver un historique des changements. L’historique ne doit pas être altéré et les données publiées doivent rester éternelles. Les données non publiées sont des données dont la publication n’est pas souhaitée, telles que les données personnelles ou les données d’organisations stockées sur le réseau.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0054-published-and-unpublished-mutable-data/0054-published-and-unpublished-mutable-data.md'
            //},
          }, {
            feature: 'Type de données ImmutableData non publié',
            desc: 'Améliorez ImmutableData pour en faire un non publié ou publié, à la différence que le non publié peut être supprimé',
            status: 'Achevé',
            para: [
              'Il existe de nombreuses fois où un utilisateur devra créer des données immuables pour stocker du contenu privé. Tant que ce contenu n’est pas publié (mis à la disposition de tiers), il ne pourra être supprimé que par le propriétaire des données.'
            ],
            //CTA: {
              //name: 'Read the RFC',
              //url: 'https://github.com/maidsafe/rfcs/blob/master/text/0055-unpublished-immutable-data/0055-unpublished-immutable-data.md'
            //},
          }
        ]
      }
    },
    release3: {
      overline: 'SUIVANT',
      title: 'SAFE Network Maxwell',
      para: ['La sortie de SAFE Maxwell s’appuie sur Fleming et permet au réseau de se mettre à niveau, améliore la sécurité et prépare le terrain pour passer le test SAFE Coin à un véritable SAFEcoin.'],
      accordion: {
        header: [
          'Fonction Maxwell',
          'La description',
          'Statut'
        ],
        items: [
          {
            feature: 'Traitement du spam',
            desc: 'Capacité à gérer les attaques de spam',
            status: 'Idée',
            para: [
              'Le spam comprend les nœuds tentant d’exécuter des activités qu’ils ne devraient pas ou des activités valides à une échelle destinée à étouffer le réseau. Le réseau devrait pouvoir résister à un volume raisonnable de telles attaques.'
            ],
          }, {
            feature: 'Gestion d’identité',
            desc: 'Possibilité pour les utilisateurs de créer et de gérer plusieurs identités à utiliser sur le réseau',
            status: 'Idée',
            para: [
              'Les utilisateurs pourront créer plusieurs identités dans le réseau. Chaque identité peut être utilisée selon les besoins de l’utilisateur et chacune doit être indépendante, sauf si l’utilisateur souhaite explicitement les connecter. Cela permet de protéger l’identité et la confidentialité.'
            ],
          },
          {
            feature: 'Mises à jour',
            desc: 'La capacité du réseau à se mettre à niveau sans causer de dommages',
            status: 'Idée',
            para: [
              'Le réseau aura la capacité de se mettre à niveau afin de permettre aux fonctionnalités et aux améliorations de se diffuser à travers le réseau. Les mises à niveau doivent être effectuées de manière à ne pas nuire au réseau.',
              'Il s’agit d’une étape importante dans l’évolution du réseau car elle signifie que de nouveaux logiciels peuvent ensuite être déployés sur le réseau existant sans perturber les fonctionnalités existantes.'
            ],
            CTA: {
              name: 'Follow the Discussion',
              url: 'https://safenetforum.org/t/step-by-step-the-road-to-fleming-5-network-upgrades/28319'
            }
          }
        ]
      }
    },
    release4: {
      overline: 'BIENTÔT DISPONIBLE',
      title: 'Fonctionnalités réseau à venir',
      para: ['La liste suivante représente le travail de réseau qui reste à terminer. La commande ne doit en aucun cas être considérée comme fixe car dans certains cas, les travaux seront effectués en parallèle par différentes équipes.'],
      accordion: {
        header: [
          'Fonctionnalité',
          'La description',
          'Statut'
        ],
        items: [
          {
            feature: 'Enclaves sécurisées',
            desc: 'Un environnement exécutable fiable dans les ordinateurs existants',
            status: 'Idée',
            para: [
              'Crée une zone au sein du matériel d’un ordinateur qui est un environnement sécurisé et fiable qui est séparé du reste de l’ordinateur. Il fonctionne comme un mini-ordinateur à l’intérieur des ordinateurs existants qui ne peuvent pas être ouverts.'
            ],
          }, {
            feature: 'Croissance du réseau',
            desc: 'Permettre au réseau de croître et d’évoluer de manière durable',
            status: 'Idée',
            para: [
              'Le réseau permet une croissance contrôlée pour garantir que la majorité des décideurs sont des nœuds sains qui suivent les règles du réseau. Cette croissance devrait être durable afin d’éviter des fusions inutiles entre les sections.'
            ],
          }, {
            feature: 'Redémarrages du réseau',
            desc: 'Possibilité pour le réseau de redémarrer après une catastrophe',
            status: 'Idée',
            para: [
              'En cas de panne catastrophique, le réseau devrait pouvoir se reconstruire car il maintient l’intégrité des données essentielles (telles que l’historique de la chaîne), ce qui lui permet de recommencer à fonctionner sur la base du dernier état connu du réseau.'
            ],
          }, {
            feature: 'Prise en charge RDF',
            desc: 'Le réseau aura un support natif pour RDF, permettant aux données d’être compatibles avec le Web sémantique',
            status: 'RFC',
            para: [
              'Garantit que les données sur le réseau SAFE sont stockées de manière à ce que le format puisse être compris par d’autres projets Web sémantiques, tels que Solid.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obscurcir les données stockées',
            desc: 'Toutes les données stockées dans un coffre-fort sur l’ordinateur d’une personne doivent être entièrement cryptées et illisibles',
            status: 'Idée',
            para: [
              'Garantit que même la plus petite donnée stockée dans un coffre-fort ne peut pas être lue par la personne contrôlant l’ordinateur sur lequel elle est stockée.'
            ],
          }, {
            feature: 'Pièce commune',
            desc: 'Remplacez notre pièce en béton par une pièce commune pour rendre le PARSEC entièrement asynchrone',
            status: 'Conception',
            para: [
              'La monnaie commune est un appareil que les nœuds peuvent utiliser pour générer une valeur binaire «aléatoire» (vraie ou fausse). Chaque fois qu’un nœud lance la pièce, tous les autres nœuds sont garantis d’observer la même valeur pour leur lancer de pièce. De plus, la valeur doit être imprévisible, ce qui signifie qu’aucun nœud malveillant ne peut connaître le résultat avant qu’un nœud honnête ne l’ait observé.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Applications et expérience utilisateur',
    list: [
      {
        id: 'safeBrowser',
        name: 'Navigateur SAFE',
        para: 'La dernière version inclut certains des débuts du Web perpétuel, ainsi que l’Authenticator: vous permettant de vous connecter en toute sécurité au réseau SAFE et de gérer l’accès et les autorisations des applications SAFE.',
        status: 'DERNIÈRE VERSION v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'Jalon actuel',
      title: 'Le Web perpétuel',
      para: 'Le réseau SAFE est conçu pour garantir que les données publiques sont permanentes et ne peuvent jamais être supprimées. Les individus et les groupes peuvent choisir de garder leurs données privées, mais une fois publiées, elles resteront disponibles en permanence. Ce jalon vise à mettre en valeur l’incroyable puissance de cette facette du réseau, en construisant l’expérience utilisateur et en l’itérant jusqu’au lancement.',
      accordion: {
        header: [
          'Caractéristiques du jalon',
          'La description',
          'Statut'
        ],
        items: [
          {
            feature: 'Navigateur SAFE',
            desc: 'Améliorations du navigateur conçues spécifiquement pour tirer parti des fonctionnalités du Web perpétuel',
            status: 'Achevé',
            para: [
              'La fonctionnalité du navigateur SAFE sera étendue pour intégrer de nouvelles fonctionnalités uniques au Web perpétuel, telles que la possibilité de revenir en arrière dans l’historique des versions de tout site Web ou élément SAFE.'
            ],
          },
          {
            feature: 'Navigateur mobile',
            desc: 'Version mobile du navigateur SAFE qui se limite à parcourir les données publiées du réseau SAFE',
            status: 'Achevé',
            para: [
              'Permet aux particuliers d’accéder directement au réseau SAFE en utilisant un navigateur sur leur téléphone mobile'
            ],
          },
          {
            feature: 'Gestionnaire de données',
            desc: 'Publication rationalisée des sites SAFE et des données perpétuelles',
            status: 'Développement',
            para: [
              'Une suite d’outils qui fournit les fonctionnalités nécessaires pour ajouter des données au réseau SAFE, publier des données perpétuelles et gérer les noms publics. Cela remplacera le gestionnaire d’hébergement Web.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'Une CLI avancée pour gérer les comptes et les données',
            status: 'Achevé',
            para: [
              'Un outil en ligne de commande pour gérer les données sur le réseau SAFE. Il permettra à l’utilisateur de stocker des données sur le réseau et de gérer les comptes, les identités et les autorisations. Il s’agit de l’outil sur lequel les applications et fonctionnalités frontales, telles que le gestionnaire de données, s’appuieront.'
            ],
          },
          {
            feature: 'Système de noms publics',
            desc: 'Le contenu stocké doit être accessible avec des URL lisibles par l’homme, via un système de noms de domaine décentralisé: le système de noms publics',
            status: 'Achevé',
            para: [
              'Un système de noms de domaine traduit les adresses IP numériques dans un format qui peut être lu par les humains (par exemple, http // 216.58.206.35 se résout en Google.com). Le Web actuel s’appuie sur une organisation centralisée pour conserver cet enregistrement. Le réseau SAFE exige que ce processus soit indépendant de la volonté d’un seul parti afin d’éviter la censure et la repression.'
            ],
            CTA: {
              name: 'Lire le RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'ÉTAPES À VENIR',
      list: [
        {
          title: 'Communications privées',
          para: 'Si nous voulons un monde dans lequel les individus peuvent communiquer librement quand ils le souhaitent, la vie privée est essentielle. Cette étape importante vise précisément à cela.',
          accordion: {
            header: [
              'Caractéristiques du jalon',
              'La description',
              'Statut'
            ],
            items: [
              {
                feature: 'Messagerie privée',
                desc: 'Envoyer des messages privés sécurisés entre les clients',
                status: 'Idée',
                para: [
                  'L’une des fonctionnalités les plus recherchées du réseau SAFE: messagerie instantanée sécurisée et privée.'
                ],
              },
              {
                feature: 'Gestion d’identité',
                desc: 'Possibilité pour les utilisateurs de créer et de gérer plusieurs identités',
                status: 'Idée',
                para: [
                  'Améliore l’expérience utilisateur des individus lorsqu’ils basculent entre les identités (ou profils) avec lesquels ils choisissent de se représenter sur le réseau SAFE, sans avoir besoin de créer plusieurs comptes.'
                ],
              },
              {
                feature: 'Gestion des contacts',
                desc: 'Trouvez, connectez-vous et restez à jour avec les autres utilisateurs du réseau SAFE',
                status: 'Idée',
                para: [
                  'Permet aux utilisateurs SAFE de trouver et de se connecter avec d’autres personnes à travers une gamme d’applications de manière cohérente.'
                ],
              },
            ]
          }
        },
        {
          title: 'Prenez le contrôle de vos données',
          para: 'Le réseau SAFE renverse le modèle actuel de propriété des données. Les informations personnelles ne seront plus stockées sur les serveurs d’entreprise. L’auto-authentification vous donne un contrôle complet sur vos données. Vous pouvez accorder (et révoquer) l’autorisation aux applications d’utiliser vos données à tout moment et empêcher toute entreprise non autorisée ou un tiers d’y accéder.',
          accordion: {
            header: [
              'Caractéristiques du jalon',
              'La description',
              'Statut'
            ],
            items: [
              {
                feature: 'Gestionnaire de données',
                desc: 'Une gestion fine de vos données personnelles',
                status: 'Idée',
                para: [
                  'L’extension de l’outil Data Manager pour permettre aux individus un contrôle précis sur leurs données privées et non publiées.'
                ],
              },
              {
                feature: 'Prise en charge RDF',
                desc: 'Prise en charge du stockage et de l’interrogation des ressources RDF dans SAFE-Core',
                status: 'RFC',
                para: [
                  'S’assure que le réseau SAFE comprend une façon de décrire l’architecture des données qui est comprise par d’autres projets, tels que Solid'
                ],
                CTA: {
                  name: 'Lire le RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'Prise en charge de SPARQL',
                desc: 'Ajout de la prise en charge native de SPARQL pour permettre la recherche de données',
                status: 'Idée',
                para: [
                  'Améliore la fonctionnalité de SAFE en ajoutant la prise en charge SPARQL aux bibliothèques client SAFE et SAFE Vault (coffre-fort). Cela garantit que le réseau peut comprendre un langage de requête sémantique bien connu et permet aux utilisateurs d’effectuer des recherches.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Outils pour permettre la collaboration via le partage et les autorisations de groupe sur les données privées non publiées',
                status: 'Idée',
                para: [
                  'Gérez le partage et les autorisations des données et des fichiers privés non publiés pour la collaboration entre les individus et les groupes.'
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'Un moyen de partager et d’accéder aux fichiers du réseau SAFE sans avoir besoin d’un nom public',
                status: 'Achevé',
                para: [
                  'Créez un système d’URL normalisées sur le réseau SAFE qui sont basées sur l’adresse XOR du contenu référencé. Garantit que les individus peuvent accéder et localiser les données et les fichiers de manière plus conviviale.'
                ],
              }
            ]
          }
        },
        {
          title: 'La nouvelle économie numérique',
          para: 'La nouvelle économie numérique vise à garantir que vous ne payez plus votre vie numérique avec des données. Au lieu de cela, vous utilisez une crypto-monnaie intégrée et distribuée par le réseau SAFE. Vous gagnez de la valeur en échange de la fourniture de ressources au réseau.',
          accordion: {
            header: [
              'Caractéristiques du jalon',
              'La description',
              'Statut'
            ],
            items: [
              {
                feature: 'Testez le portefeuille Safecoin',
                desc: 'Transaction en utilisant Test Safecoins',
                status: 'Développement',
                para: [
                  'Les utilisateurs pourront utiliser Test Safecoin dans le réseau, permettant à un écosystème de se construire autour du mécanisme d’incitation SAFE. La possibilité de créer plusieurs portefeuilles, de les associer à une identité, ainsi que des portefeuilles à usage unique pour permettre des transactions anonymes, feront tous partie de cela.',
                ],
              },
              {
                feature: 'Interface utilisateur Vault (coffre-fort)',
                desc: 'Configurez, exécutez et gérez facilement un coffre-fort',
                status: 'Idée',
                para: [
                  'Les utilisateurs verront l’expérience utilisateur Vault considérablement améliorée. Quiconque fournit du stockage au réseau peut s’attendre à voir un certain nombre d’améliorations de la convivialité, ce qui facilite l’offre de ressources et le démarrage de l’agriculture sur les ordinateurs et appareils domestiques quotidiens.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
