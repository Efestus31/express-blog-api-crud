const products = [
    {
        "id": 1,
        "title": "Laptop Dell XPS 13",
        "slug": "laptop-dell-xps-13",
        "content": "Il Dell XPS 13 è un laptop ultracompatto e potente, ideale per professionisti e studenti. Con un display InfinityEdge da 13 pollici, processore Intel Core i7 di 11ª generazione, 16 GB di RAM e un SSD da 512 GB, è progettato per offrire prestazioni elevate e una lunga durata della batteria. Perfetto per lavoro, studio e intrattenimento, è uno dei migliori modelli ultrabook disponibili sul mercato.",
        "image": "dell_xps_13.jpeg",
        "tags": [
            "Laptop",
            "Computer portatili",
            "Tecnologia"
        ]
    },
    {
        "id": 2,
        "title": "Apple iMac 24\" M1",
        "slug": "apple-imac-24-m1",
        "content": "L'Apple iMac 24\" con chip M1 è un all-in-one che unisce potenza, design elegante e prestazioni sorprendenti. Con un display Retina 4.5K da 24 pollici, 8 GB di RAM e 256 GB di SSD, è perfetto per il lavoro creativo, la gestione di file multimediali e attività quotidiane. Il chip M1 garantisce performance superiori e maggiore efficienza energetica, il tutto in un design sottile e colorato.",
        "image": "apple_imac_24_m1.jpeg",
        "tags": [
            "Desktop",
            "Apple",
            "Tecnologia"
        ]
    },
    {
        "id": 3,
        "title": "Samsung Galaxy Tab S8",
        "slug": "samsung-galaxy-tab-s8",
        "content": "Il Samsung Galaxy Tab S8 è un tablet premium con display Super AMOLED da 11 pollici, supporto 5G e processore Qualcomm Snapdragon 8 Gen 1. Con 8 GB di RAM e 128 GB di spazio di archiviazione, è perfetto per il lavoro, il gioco e la creatività. L'accurata penna S Pen inclusa permette una scrittura fluida e precisa, ideale per disegnare e prendere appunti.",
        "image": "samsung_galaxy_tab_s8.jpeg",
        "tags": [
            "Tablet",
            "Samsung",
            "Tecnologia"
        ]
    },
    {
        "id": 4,
        "title": "Sony PlayStation 5",
        "slug": "sony-playstation-5",
        "content": "La PlayStation 5 di Sony è la console di gioco di ultima generazione, dotata di un processore custom AMD, GPU RDNA 2, 16 GB di RAM e un SSD ultra-veloce da 825 GB. La PS5 offre esperienze di gioco straordinarie con risoluzione 4K e frame rate fino a 120 fps. Con il controller DualSense, che introduce feedback aptico avanzato, ogni gioco sarà un'esperienza coinvolgente come mai prima d'ora.",
        "image": "sony_playstation_5.jpeg",
        "tags": [
            "Console",
            "Videogiochi",
            "Tecnologia"
        ]
    },
    {
        "id": 5,
        "title": "Microsoft Surface Pro 8",
        "slug": "microsoft-surface-pro-8",
        "content": "Il Microsoft Surface Pro 8 è un tablet 2-in-1 potente e versatile, dotato di uno schermo PixelSense da 13 pollici, processore Intel Core i7 di 11ª generazione e 16 GB di RAM. Con Windows 11 e una tastiera staccabile, è la soluzione ideale per chi cerca un dispositivo compatto e potente per lavorare e intrattenersi in movimento.",
        "image": "microsoft_surface_pro_8.jpeg",
        "tags": [
            "Tablet",
            "Microsoft",
            "Tecnologia"
        ]
    },
    {
        "id": 6,
        "title": "Logitech MX Master 3",
        "slug": "logitech-mx-master-3",
        "content": "Il Logitech MX Master 3 è un mouse wireless premium progettato per professionisti e creativi. Con un design ergonomico, sensore ad alta precisione e supporto per più dispositivi contemporaneamente, è perfetto per lunghe sessioni di lavoro. La batteria ricaricabile dura fino a 70 giorni con una singola carica, e la ruota di scorrimento offre un'esperienza fluida e precisa.",
        "image": "logitech_mx_master_3.jpeg",
        "tags": [
            "Accessori",
            "Mouse",
            "Tecnologia"
        ]
    },
    {
        "id": 7,
        "title": "HP Omen 15",
        "slug": "hp-omen-15",
        "content": "L'HP Omen 15 è un laptop da gioco potente, con un display FHD da 15,6 pollici e una GPU NVIDIA GeForce RTX 3060. Equipaggiato con un processore Intel Core i7 di 11ª generazione e 16 GB di RAM, è perfetto per il gaming ad alte prestazioni. Il sistema di raffreddamento avanzato e la tastiera retroilluminata offrono un'esperienza di gioco eccezionale.",
        "image": "hp_omen_15.jpeg",
        "tags": [
            "Laptop",
            "Gaming",
            "Tecnologia"
        ]
    },
    {
        "id": 8,
        "title": "Bose QuietComfort 35 II",
        "slug": "bose-quietcomfort-35-ii",
        "content": "Le cuffie Bose QuietComfort 35 II sono dotate di cancellazione attiva del rumore e audio di alta qualità. Con la connettività Bluetooth e fino a 20 ore di autonomia, sono perfette per ascoltare musica o fare chiamate anche in ambienti rumorosi. L'assistente vocale integrato consente un facile accesso a funzioni come la gestione della musica e delle chiamate.",
        "image": "bose_quietcomfort_35_ii.jpeg",
        "tags": [
            "Cuffie",
            "Audio",
            "Tecnologia"
        ]
    },
    {
        "id": 9,
        "title": "Apple AirPods Pro",
        "slug": "apple-airpods-pro",
        "content": "Gli Apple AirPods Pro offrono un'esperienza audio immersiva grazie alla cancellazione attiva del rumore e al suono ad alta fedeltà. Con un design in-ear e comodi gommini intercambiabili, si adattano perfettamente a ogni orecchio. L'autonomia è di circa 4,5 ore di ascolto continuo, e la modalità trasparenza permette di ascoltare l'ambiente circostante quando necessario.",
        "image": "apple_airpods_pro.jpeg",
        "tags": [
            "Cuffie",
            "Audio",
            "Apple"
        ]
    },
    {
        "id": 10,
        "title": "Razer Kraken Ultimate",
        "slug": "razer-kraken-ultimate",
        "content": "Le cuffie Razer Kraken Ultimate sono progettate per offrire un audio surround 7.1 virtuale eccezionale, ideale per i giocatori. Con microfono retrattile e sistema di illuminazione RGB personalizzabile, sono perfette per un'esperienza di gioco immersiva. Le sue padiglioni in memory foam offrono un comfort superiore per sessioni di gioco prolungate.",
        "image": "razer_kraken_ultimate.jpeg",
        "tags": [
            "Cuffie",
            "Gaming",
            "Tecnologia"
        ]
    }
]

module.exports = products;
