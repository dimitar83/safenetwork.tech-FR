import CONSTANT from 'constant'

export default {
  title: 'C’est l’aube d’un nouveau web.\n Aidez-nous à le créer.',
  pageDesc: 'Le réseau SAFE est un Open Source (source ouverte) et un effort de collaboration entre les développeurs et la communauté qui l’utilise. Vous pouvez vous impliquer en testant, en suggérant, en codant ou en faisant la promotion. Voici comment.',
  develop: {
    trySafeNet: {
      title: 'Essayez le réseau SAFE',
      para: [
        'SAFE changera la façon dont nous interagirons avec le Web et nos propres données. Un saut aussi grand que cela nécessite des tests et des commentaires continus de la part des personnes pour lesquelles il est conçu - et c’est là que vous pouvez aider.',
        'Téléchargez le navigateur SAFE pour parcourir le réseau, ou pourquoi ne pas rejoindre la communauté et être l’un des nombreux à fournir des commentaires, à contribuer au code et, essentiellement, à façonner le réseau.'
      ]
    },
    startDevelop: {
      title: 'Commencez à développer sur SAFE',
      para: [
        'The SAFE Network is a platform for creating decentralised apps. It is secure, privacy focussed, has a built-in revenue stream, and next to no infrastructure costs.',
        'Right now development of simpler, dev-facing APIs is underway. As such documentation is still to be finalised, but you can access the latest SAFE API documentation in this repo.'
      ],
      CTA: {
        name: 'SAFE API GitHub Repo',
        url: 'https://github.com/maidsafe/safe-api/blob/master/README.md'
      }
    },
    joinForum: {
      title: 'Rejoignez la communauté des développeurs',
      para: [
        'En plus du hub des développeurs, nous avons également un forum de développeurs en pleine croissance. C’est un excellent moyen d’obtenir du soutien et de collaborer.'
      ],
      CTA: {
        name: 'Forum des développeurs',
        url: 'https://forum.safedev.org'
      }
    },
    coreNetwork: {
      title: 'Aider à bâtir le réseau central',
      para: [
        'Vous pouvez également vous impliquer en aidant à maintenir les réseaux sous-jacents aux bibliothèques open source. À l’approche du lancement de la version bêta, il sera possible d’être compensé en Safecoin pour la correction des erreurs, l’optimisation du code et le développement de nouvelles fonctionnalités.'
      ],
      CTA: {
        name: 'Contribuer sur GitHub',
        url: 'https://github.com/maidsafe/'
      }
    }
  },
  engage: {
    community: {
      title: 'Faites partie de la communauté',
      para: [
        'La communauté SAFE Network est composée de milliers de personnes du monde entier passionnées par l’accès et le partage sans entrave des données.',
        'Safenetforum.org est le principal forum de discussion de cette communauté en pleine croissance et est un excellent endroit pour aider à tester les nouvelles versions par les équipes de développement, recevoir du soutien, discuter des dernières tendances Internet et lire les mises à jour hebdomadaires des développeurs. Pour rencontrer d’autres personnes en personne, jetez un œil aux différentes rencontres qui se déroulent dans le monde.'
      ],
      CTA: {
        name: 'Rejoignez le Forum',
        url: 'https://safenetforum.org'
      }
    },
    subscribe: {
      title: 'Tiens-toi à jour'
    }
  },
  invite: {
    title: 'COMMENCER',
    joinNetwork: {
      id: 'joinNetwork',
      title: 'Connecter à Baby Fleming Public Shared Section',
      para: 'Cette section partagée est hébergée sur DigitalOcean et se compose de huit coffres-forts sur huit gouttelettes distinctes, tous connectés ensemble dans une section. Veuillez noter que ce testnet peut nécessiter d’être retiré.',
      CTA: {
        button: {
          name: 'Apprendre encore plus',
          url: 'https://safenetforum.org/t/baby-fleming-public-shared-section/31377'
        },
        link: {
          name: 'CLI Guide de l’utilisateur',
          url: 'https://github.com/maidsafe/safe-api/blob/master/safe-cli/README.md#download'
        }
      }
    },
    installBrowser: {
      id: 'installBrowser',
      title: 'Installez le navigateur SAFE',
      para: 'Prenez le dernier navigateur SAFE pour commencer à naviguer sur le réseau dès aujourd’hui!',
      CTA: {
        button: {
          name: 'Télécharger pour',
          url: '/'
        },
        link: {
          name: 'Plus d’options',
          url: CONSTANT.downloadApps.browser.others
        }
      }
    },
    feedback: {
      id: 'feedback',
      title: 'Commentaires et contribution',
      para: 'La construction du réseau SAFE est un travail d’équipe. Vous pouvez nous aider en faisant des suggestions, en signalant des erreurs ou en contribuant au code.',
      CTA: {
        button: {
          name: 'Rejoignez le Forum',
          url: 'https://safenetforum.org'
        }
      }
    }
  },
  faqs: {
   sections: [
    {
      title: 'Mise en route: questions fréquemment posées',
      items: [
        {
          question: 'Comment m’impliquer dans la communauté SAFE Network?',
          answer: [
            'La communauté est la plus active sur le [forum du réseau SAFE](https://safenetforum.org/) et nous vous suggérons de commencer dans la [section débutants](https://safenetforum.org/c/beginners )',
            '_[Visitez le Forum](https://safenetforum.org/)_'
          ]
        },
        {
          question: 'Comment obtenir de l’aide?',
          answer: [
            'Le [forum du réseau SAFE](https://safenetforum.org) est l’endroit où se diriger pour toutes les questions sur le réseau.',
            '_[Visitez le Forum](https://safenetforum.org/)_'
          ]
        }
      ]
    },
   ],
   CTA: {
     name: 'Plus de FAQ',
     url: '/faq'
   }
  }
}
