export default {
  title: 'Fondamentaux du réseau',
  desc: 'Il y a certains concepts qui ont guidé chaque étape de la conception du réseau depuis le début du projet en 2006. Depuis ce temps, la communauté SAFE a grandi et nous sommes ravis de voir combien de personnes et de projets sont venus reconnaître le importance vitale d’une plate-forme mondiale, sécurisée et privée décentralisée pour le stockage et la communication.',
  qa: {
    section: {
      title: 'Le réseau...',
      items: [
        {
          question: 'Autorise une personne à créer un compte et à se connecter de manière anonyme et sans intervention',
          answer: [
            'La création d’un nouveau compte et la connexion au réseau n’auront jamais besoin d’un tiers. Ces processus seront toujours effectués directement entre l’utilisateur et le réseau. Il convient de noter que (pour des raisons techniques) la création de compte peut nécessiter la présence de Safecoin dans le compte de l’utilisateur dans certaines circonstances (si cela, par exemple, minimise la possibilité qu’une entité crée des millions de nouveaux comptes pour attaquer le réseau).'
          ]
        },
        {
          question: 'Permet aux utilisateurs de partager en toute sécurité et sans aucun contrôle des informations et des messages',
          answer: [
            'Le réseau SAFE n’aura jamais de tiers ayant la capacité de lire ou de stocker les informations envoyées par un utilisateur (sauf si cet utilisateur y consent d’une manière ou d’une autre).'
          ]
        },
        {
          question: 'Autorise le transfert de Safecoin à tout utilisateur sans frais de transaction',
          answer: [
            'Chaque utilisateur pourra utiliser n’importe laquelle de ses identités comme adresse de portefeuille afin de pouvoir envoyer et recevoir Safecoin.'
          ]
        },
        {
          question: 'Permet aux utilisateurs de créer et de partager des données de manière anonyme dans le monde entier',
          answer: [
            'Le Réseau s’assurera toujours que l’Utilisateur a la possibilité d’envoyer des messages et des messages de transaction avec un ID temporaire et à usage unique qui n’est lié à aucune identité connue sur le Réseau.'
          ]
        },
        {
          question: 'Permet à quiconque de parcourir le contenu de manière anonyme et gratuite',
          answer: [
            'Il est crucial que le nouveau web décentralisé soit sans barrières. L’un des fondements les plus importants d’une plate-forme collaborative mondiale est que tout le monde peut accéder gratuitement et à tout moment au contenu public sans avoir à créer un compte.'
          ]
        },
        {
          question: 'Autorise les utilisateurs à associer plusieurs identités à leur compte',
          answer: [
            'Chaque compte client gère des informations sur l’utilisateur qui comprendront plusieurs identités. Ces identités sont susceptibles d’être des paires de clés cryptographiques.'
          ]
        },
        {
          question: 'Permet aux utilisateurs d’utiliser n’importe laquelle de leurs identités pour envoyer / recevoir Safecoin',
          answer: [
            'Chaque personne doit pouvoir utiliser n’importe laquelle de ses identités comme adresse de portefeuille afin de pouvoir envoyer et recevoir Safecoin.'
          ]
        },
        {
          question: 'Stocke les données à perpétuité',
          answer: [
            'Toutes les données publiques / publiées sur le réseau seront immuables et disponibles à perpétuité sur le réseau. De la même manière que les archives Internet stockent des versions du site Web qui ont été publiées avec des erreurs, il sera impossible de supprimer les données du réseau après leur téléchargement. Cela ne signifie pas que vous ne pourrez pas modifier les données - vous pourrez apporter des modifications uniquement à l’ajout, c’est-à-dire que les versions historiques des données antérieures resteront toujours stockées sur le réseau (qu’elles soient accessibles ou non).'
          ]
        },
        {
          question: 'Ne jamais exigera que les mots de passe soient stockés sur le réseau ou sur les machines utilisées par les clients pour accéder au réseau',
          answer: [
            'Le réseau lui-même ne conservera jamais de mots de passe car il s’agit d’une cause courante de perte de données. Au lieu de cela, un utilisateur ne sera jamais tenu de saisir un mot de passe localement sur l’appareil qu’il utilise pour accéder au réseau.'
          ]
        },
        {
          question: 'Autorise n’importe quel utilisateur, sur n’importe quelle machine, à accéder au réseau et ne laisser aucune trace de cet utilisateur sur la machine',
          answer: [
            'Le réseau doit en fin de compte être accessible à tout utilisateur sur n’importe quel appareil. Lorsque cet utilisateur se déconnecte du réseau et quitte cette machine, il ne doit y avoir aucune preuve (autre que tout logiciel téléchargé pour accéder au réseau, tel que le navigateur) qui montre quelle activité l’utilisateur a entreprise sur le réseau SAFE.'
          ]
        },
        {
          question: 'Frotte toutes les adresses IP client du Hop 1 du réseau de superposition (c’est-à-dire sur SAFE)',
          answer: [
            'Une fois qu’un utilisateur a commencé à communiquer directement avec quiconque après le premier nœud du réseau SAFE auquel il se connecte, l’adresse IP de l’utilisateur est nettoyée et introuvable. Pour plus de clarté, nous utilisons l’expression «Hop 1» pour faire référence au transfert directement après cette connexion au premier nœud du réseau SAFE (pas le saut qui peut avoir lieu de votre ordinateur vers votre routeur WiFi domestique, par exemple).'
          ]
        },
        {
          question: 'N’accepte plus de coffres-forts que lorsqu’il en a besoin',
          answer: [
            'Comme toute espèce ou groupe d’organismes, une croissance illimitée mène à la disparition. Le réseau SAFE pourrait être attaqué par un mauvais acteur en ajoutant simplement des millions de nœuds puis en les fermant (ou pire). Pour éviter cela, le réseau n’autorise la connexion de nouveaux nœuds que lorsqu’il en a besoin. Cela ralentit également bien tout attaquant et les dilue avec de bons acteurs qui tentent également de se joindre. Le réseau peut alors équilibrer l’offre et la demande comme bon lui semble plutôt que de s’appuyer sur des contrôles externes.'
          ]
        },
        {
          question: 'Augmente les récompenses agricoles lorsqu’il a besoin de plus de ressources (chambres fortes) et diminuer les récompenses lorsque les ressources sont abondantes',
          answer: [
            'Si le réseau acceptait simplement tout coffre-fort qui voulait se joindre, il serait probablement ciblé par une attaque de botnet ou un attaquant pourrait tenter de configurer un nombre écrasant de nœuds malveillants au départ alors que la taille du réseau est petite au lancement. Le Réseau doit être en mesure d’équilibrer lui-même cet approvisionnement en Vaults (coffre-forts) pour éviter qu’il y ait un grand nombre de nœuds disposant de très peu de données, car cela ferait baisser les tarifs agricoles.'
          ]
        },
        {
          question: 'Classe les nœuds au fil du temps et accroître la confiance dans les nœuds de rang supérieur',
          answer: [
            'Une partie cruciale du vieillissement des nœuds (l’un des moyens par lesquels le réseau SAFE empêche les attaques Sybil) vient du fait que le réseau est conçu pour permettre uniquement aux nœuds les plus fiables au sein de chacun des groupes proches de voter sur les décisions du réseau.'
          ]
        },
        {
          question: 'Pas de serveurs',
          answer: [
            'Le réseau SAFE ne s’appuiera jamais sur des serveurs (comme le terme est traditionnellement compris) car cela introduit une faiblesse de tierce partie qui sape l’ensemble du réseau.'
          ]
        },
        {
          question: 'Signe numériquement toutes les transactions',
          answer: [
            'En s’assurant que toutes les transactions sont signées numériquement, le Réseau est en mesure de garantir que les transactions ont été autorisées conformément aux règles du Réseau.'
          ]
        },
        {
          question: 'Assure que les messages directs client à client sont gratuits. Il facturera toutefois les messages client à client impliquant une traversée du réseau SAFE',
          answer: [
            'Les clients sont des logiciels qui permettent aux utilisateurs de se connecter au réseau SAFE. Le Réseau ne facturera jamais de frais si les messages sont envoyés directement entre deux Clients. Cependant, tous les messages indirects envoyés entre les clients et impliquant des déplacements sur le réseau entraîneront un coût.'
          ]
        },
        {
          question: 'N’utilisera jamais le temps comme outil réseau (bien que les nœuds puissent utiliser des durées locales)',
          answer: [
            'Il n’y a pas de notion de temps dans un réseau décentralisé tel que SAFE à moins qu’il n’atteigne des serveurs et des services centralisés. SAFE utilise un paradigme entièrement piloté par les événements pour contourner la nécessité d’essayer de synchroniser, puis d’utiliser les périodes de temps comme outils valides sur le réseau. Ces périodes nécessitent des nombres magiques qui devraient être définis par les développeurs et c’est quelque chose que le réseau évite avec rigueur.'
          ]
        },
        {
          question: 'N’utilise que des services cryptés et du trafic crypté',
          answer: [
            'Les services ou le trafic doivent être chiffrés s’ils doivent être utilisés par le réseau SAFE.'
          ]
        },
        {
          question: 'Autorise les mises à niveau en temps réel de manière sécurisée (c’est-à-dire que le réseau refusera les mises à niveau qui pourraient les interrompre)',
          answer: [
            'Le Réseau doit pouvoir déployer des améliorations compatibles avec au moins la version précédente du logiciel Réseau, afin de garantir que la nouvelle itération soit une amélioration dans la pratique. Comme cela nécessitera un effort important, chaque nœud peut exécuter des mises à niveau en parallèle au code de travail existant avant la mise à niveau.'
          ]
        },
      ]
    }
  },
  safecoin: {
    title: 'Safecoin',
    lists: [
      {
        name: 'A.',
        para: 'Safecoin est le mécanisme d’incitation unique intégré au réseau SAFE. Tous les Safecoins sont recyclés lorsqu’ils sont payés au Réseau en échange de ressources. Au lancement, Safecoin sera distribué comme suit: (1) Verser aux créateurs du réseau (actionnaires de MaidSafe) 5% du total Safecoin; (2) Verser aux investisseurs crowdsale 2014 du réseau 10% du total Safecoin.'
      },
      {
        name: 'B.',
        para: 'Safecoin sera distribué sur une base continue: (1) des coffres-forts pour la prestation de services (85% des récompenses); (2) Les développeurs payants qui produisent des applications que les gens utilisent (10% des récompenses); (3) Payer les mainteneurs du code réseau (5% des récompenses)'
      },
    ],
    notes: {
      title: 'Remarque:',
      para: 'Bien que l’explication ci-dessus soit une approximation pratique de la répartition, les récompenses seront en fait ajustées dynamiquement en fonction du taux d’agriculture déterminé par le réseau:',
      points: [
        'Les agriculteurs qui gèrent les chambres fortes sont payés à 100% du taux d’agriculture pour tous les GET sur le réseau. C’est à dire. 86,95% (100/115) de toutes les récompenses.',
        'Les développeurs d’applications sont payés à 10% du taux d’agriculture pour tous les GET sur le réseau (qui se rapportent à leurs applications). C’est à dire. 8,695% (10/115) de toutes les récompenses.',
        'Les développeurs mainteneurs sont payés à 5% du taux de production pour tous les GET du réseau. C’est à dire. 4.348% (5/115) de toutes les récompenses.'
      ]
    }
  }
}
