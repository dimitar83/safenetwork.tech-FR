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
      overline: 'Coming Soon',
      title: 'Upcoming Network Features',
      para: ['The following list represents network work that remains to be completed. The order should not be seen as fixed in any way as in certain cases, work will be carried out in parallel by different teams.'],
      accordion: {
        header: [
          'Feature',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'Secure Enclaves',
            desc: 'A trusted executable environment within existing computers',
            status: 'Idée',
            para: [
              'Creates an area within the hardware of a computer that is a secure, trusted environment that stands separate from the rest of the computer. It functions like a mini-computer inside existing computers that cannot be opened.'
            ],
          }, {
            feature: 'Network Growth',
            desc: 'Allow the network to grow and scale in a sustainable way',
            status: 'Idée',
            para: [
              'The Network allows controlled growth to ensure that the majority of decision-makers are healthy nodes that follow the rules of the Network. This growth should be sustainable in order to avoid unnecessary mergers between Sections.'
            ],
          }, {
            feature: 'Network Restarts',
            desc: 'Ability for the network to restart after a catastrophe',
            status: 'Idée',
            para: [
              'In the event of a catastrophic outage, the Network should be able to rebuild itself because it maintains the integrity of essential data (such as chain history) which enables it to start functioning again on the basis of the last known state of the Network.'
            ],
          }, {
            feature: 'RDF Support',
            desc: 'The Network will have native support for RDF, enabling data to be compatible with the Semantic Web',
            status: 'RFC',
            para: [
              'Ensures that data on the SAFE Network is stored in such a way that the format can be understood by other Semantic Web projects, such as Solid.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/nbaksalyar/rfcs/blob/master/text/0000-rdf-in-client-libs/0000-rdf-in-client-libs.md'
            },
          }, {
            feature: 'Obfuscating stored data',
            desc: 'All data stored within a Vault on an individual’s computer must be entirely encrypted and unreadable',
            status: 'Concept',
            para: [
              'Ensures that even the smallest piece of data that is stored in a Vault cannot be read by the person controlling the computer on which it is stored.'
            ],
          }, {
            feature: 'Common Coin',
            desc: 'Replace our concrete coin with a common coin to make PARSEC fully asynchronous',
            status: 'Design',
            para: [
              'Common coin is a device that nodes can use to generate a “random” binary value (true or false). Every time a node flips the coin, all other nodes are guaranteed to observe the same value for their coin flip. Also, the value must be unpredictable, which means that no malicious node can know the outcome before a honest node has observed it.'
            ],
          }
        ]
      }
    }
  },
  apps: {
    title: 'Apps and User Experience',
    list: [
      {
        id: 'safeBrowser',
        name: 'SAFE Browser',
        para: 'The latest release includes some of the beginnings of the Perpetual Web. Please note that it\'s only compatible with the Vaults Phase 1 release.',
        status: 'Latest Version v0.16.0'
      }
    ],
    currentMilestone: {
      status: 'Current Milestone',
      title: 'The Perpetual Web',
      para: 'The SAFE Network is designed to ensure that public data is permanent and can never be deleted. Individuals and groups can choose to keep their data private, but once it’s been published, it will remain permanently available. This milestone aims to showcase the incredible power of this facet of the Network, by building out the User Experience, and iterating on it right through to launch.',
      accordion: {
        header: [
          'Milestone Features',
          'Description',
          'Status'
        ],
        items: [
          {
            feature: 'SAFE Browser',
            desc: 'Enhancements to the browser designed specifically to take advantage of the functionalities of the Perpetual Web',
            status: 'Complete',
            para: [
              'The SAFE Browser functionality will be extended to incorporate new features that are unique to the Perpetual Web, such as the ability to roll-back through the version history of any SAFE website or asset.'
            ],
          },
          {
            feature: 'Mobile Browser',
            desc: 'Mobile version of SAFE browser which is limited to browsing published data from the SAFE Network',
            status: 'Complete',
            para: [
              'Enables individuals to access the SAFE Network directly by using a browser on their mobile phone'
            ],
          },
          {
            feature: 'Data Manager',
            desc: 'Streamlined publishing of SAFE sites and Perpetual Data',
            status: 'Development',
            para: [
              'A suite of tools which provides the necessary functionality to add data to the SAFE Network, publish perpetual data, and manage Public Names. This will supersede the Web Hosting Manager.'
            ],
          },
          {
            feature: 'SAFE CLI',
            desc: 'An advanced CLI to manage accounts and data',
            status: 'Complete',
            para: [
              'A command line tool to manage data on the SAFE Network. It will allow the user to store data on the network and manage accounts, identities, and permissions. This is the tool that the frontend apps and features—such as the Data Manager—will build upon.'
            ],
          },
          {
            feature: 'Public Name System',
            desc: 'Content stored should be accessible with human-readable URLs, via a decentralised domain name system: the Public Name System',
            status: 'Complete',
            para: [
              'A domain name system translates numerical IP addresses into a format that can be read by humans (eg. http//216.58.206.35 resolves to Google.com). The current web relies on a centralised organisation to maintain that record. The SAFE Network requires this process to be outside the control of a single party in order to avoid censorship and repression.'
            ],
            CTA: {
              name: 'Read the RFC',
              url: 'https://github.com/maidsafe/rfcs/issues/283'
            },
          },
        ]
      }
    },
    upcomingMilestones: {
      status: 'Upcoming Milestones',
      list: [
        {
          title: 'Private Communications',
          para: 'If we want a world in which individuals can communicate freely whenever they choose, privacy is essential. This milestone aims to deliver just that.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Private Messaging',
                desc: 'Send secure private messages between clients',
                status: 'Concept',
                para: [
                  'One of the most sought after features of the SAFE Network: secure, private, instant messaging.'
                ],
              },
              {
                feature: 'Identity Management',
                desc: 'Ability for users to create and manage multiple identities',
                status: 'Concept',
                para: [
                  'Improves the user experience for individuals as they switch between the identities (or profiles) that they choose to represent themselves with on the SAFE Network, without the need to create multiple accounts.'
                ],
              },
              {
                feature: 'Contacts Management',
                desc: 'Find, connect and stay up-to-date with other SAFE Network users  ',
                status: 'Concept',
                para: [
                  'Enables SAFE users to find and connect with other people across a range of applications in a consistent way.'
                ],
              },
            ]
          }
        },
        {
          title: 'Take Control of Your Data',
          para: 'The SAFE Network turns the current data ownership model on its head. Personal information will no longer be stored on corporate servers. Self Authentication gives you complete control over your data. You can grant (and revoke) permission for apps to use your data at any time and prevent any unauthorised company or third party ever gaining access.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Data Manager',
                desc: 'Fine-grained management of your personal data',
                status: 'Concept',
                para: [
                  'The extension of the Data Manager tool to allow fine-grained control by individuals over their private and unpublished data.'
                ],
              },
              {
                feature: 'RDF Support',
                desc: 'Support storing and querying RDF resources in SAFE-Core',
                status: 'RFC',
                para: [
                  'Ensures that the SAFE Network understands a way of describing the architecture of data that is understood by other projects, such as Solid'
                ],
                CTA: {
                  name: 'Read the RFC',
                  url: 'https://github.com/maidsafe/rfcs/issues/289'
                },
              },
              {
                feature: 'SPARQL Support',
                desc: 'Add native support for SPARQL to allow searching of data',
                status: 'Concept',
                para: [
                  'Enhances the functionality of SAFE by adding SPARQL support to SAFE Client Libs and SAFE Vault.  This ensures that the Network can understand a well-known semantic query language, and enables users to search.'
                ],
              },
              {
                feature: 'Collaboration',
                desc: 'Tools to enable collaboration through sharing and group permissions on private unpublished data',
                status: 'Concept',
                para: [
                  'Manage sharing and permissions of private, unpublised data and files, for collaboration between individuals and groups. '
                ],
              },
              {
                feature: 'XOR URLs',
                desc: 'A way of sharing and accessing SAFE Network files without the need for a Public Name',
                status: 'Complete',
                para: [
                  'Create a system of standardised URL’s on the SAFE Network that are based on the XOR address of the content being referenced. Ensures that individuals can access and locate  data and files in a more user-friendly manner.'
                ],
              }
            ]
          }
        },
        {
          title: 'The New Digital Economy',
          para: 'The new digital economy is all about ensuring that you no longer pay for your digital life with data. Instead, you use a cryptocurrency that’s integral and distributed by the SAFE Network. You earn value in return for providing resources to the Network.',
          accordion: {
            header: [
              'Milestone Features',
              'Description',
              'Status'
            ],
            items: [
              {
                feature: 'Test Safecoin Wallet',
                desc: 'Transact using Test Safecoins',
                status: 'Development',
                para: [
                  'Users will be able to use Test Safecoin in the Network, allowing an ecosystem to built around the SAFE incentive mechanism. The ability to create multiple wallets, associate them with an identity, and also one-time-use wallets to enable anonymous transactions, will all be part of this.',
                ],
              },
              {
                feature: 'Vault User Interface',
                desc: 'Easily set up, run, and manage a Vault',
                status: 'Concept',
                para: [
                  'Users will see greatly-improved Vault User Experience. Anyone providing storage to the Network can expect to see a number of usability improvements, making it easy to offer resources and start farming on everyday home computers and devices.'
                ],
              },
            ]
          }
        }
      ]
    }
  }
}
