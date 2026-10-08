const products = {

    /* =========================
       SMARTPHONES
    ========================= */

    "iphone-15-pro-max": {
        category: "smartphone",
        name: "iPhone 15 Pro Max",
        brand: "Apple",
        badge: "Apple",
        description: "Флагманский смартфон с титановым корпусом и профессиональной системой камер.",
        price: 1479,
        memory: ["256 GB", "512 GB", "1 TB"],
        colors: ["Titanium Black", "Titanium Blue", "Titanium Natural"],
        specs: {
            "Экран": "6.7″ OLED",
            "Частота": "120 Hz",
            "Камера": "48 MP",
            "Чип": "A17 Pro"
        }
    },

    "iphone-16-pro-max": {
        category: "smartphone",
        name: "iPhone 16 Pro Max",
        brand: "Apple",
        badge: "Apple",
        description: "Большой Pro-дисплей, мощный процессор и продвинутая система камер.",
        price: 899,
        memory: ["256 GB", "512 GB", "1 TB"],
        colors: ["Black Titanium", "Desert Titanium", "Natural Titanium"],
        specs: {
            "Экран": "6.9″ OLED",
            "Частота": "120 Hz",
            "Камера": "48 MP",
            "Чип": "A18 Pro"
        }
    },

    "iphone-17-pro-max": {
        category: "smartphone",
        name: "iPhone 17 Pro Max",
        brand: "Apple",
        badge: "NOVA NEW",
        description: "Новый уровень производительности, камеры и премиального мобильного опыта.",
        price: 1285,
        memory: ["256 GB", "512 GB", "1 TB"],
        colors: ["Black", "Silver", "Titanium"],
        specs: {
            "Экран": "6.9″ OLED",
            "Частота": "120 Hz",
            "Камера": "48 MP",
            "Чип": "A19 Pro"
        }
    },

    "iphone-18-pro": {
        category: "smartphone",
        name: "iPhone 18 Pro",
        brand: "Apple",
        badge: "NEW",
        description: "Следующее поколение Pro с максимальной производительностью и современной камерой.",
        price: 1449,
        memory: ["256 GB", "512 GB", "1 TB"],
        colors: ["Black", "Silver", "Deep Blue"],
        specs: {
            "Экран": "6.3″ OLED",
            "Частота": "120 Hz",
            "Камера": "48 MP",
            "Чип": "A20 Pro"
        }
    },

    "iphone-18-pro-max": {
        category: "smartphone",
        name: "iPhone 18 Pro Max",
        brand: "Apple",
        badge: "NEW",
        description: "Максимальный Pro-опыт NOVA: большой дисплей, мощный чип и профессиональная камера.",
        price: 1599,
        memory: ["256 GB", "512 GB", "1 TB"],
        colors: ["Black", "Silver", "Deep Blue"],
        specs: {
            "Экран": "6.9″ OLED",
            "Частота": "120 Hz",
            "Камера": "48 MP",
            "Чип": "A20 Pro"
        }
    },


    /* =========================
       LAPTOPS
    ========================= */

    "nova-book-pro-16": {
        category: "laptop",
        name: "NOVA Book Pro 16",
        brand: "NOVA",
        badge: "PRO",
        description: "Большой профессиональный ноутбук для работы, творчества и высокой производительности.",
        price: 1799,
        memory: ["16 GB / 512 GB", "32 GB / 1 TB"],
        colors: ["Space Black", "Silver"],
        specs: {
            "Экран": "16″ OLED",
            "Память": "16–32 GB",
            "Накопитель": "512 GB–1 TB",
            "Класс": "Professional"
        }
    },

    "nova-book-air": {
        category: "laptop",
        name: "NOVA Book Air",
        brand: "NOVA",
        badge: "AIR",
        description: "Тонкий и лёгкий ноутбук для учёбы, работы и повседневных задач.",
        price: 1099,
        memory: ["8 GB / 256 GB", "16 GB / 512 GB"],
        colors: ["Silver", "Midnight"],
        specs: {
            "Экран": "15″ Retina",
            "Память": "8–16 GB",
            "Накопитель": "256–512 GB",
            "Вес": "1.4 кг"
        }
    },

    "nova-book-ultra": {
        category: "laptop",
        name: "NOVA Book Ultra",
        brand: "NOVA",
        badge: "ULTRA",
        description: "Максимальная производительность NOVA в мощном корпусе для тяжёлых задач.",
        price: 2299,
        memory: ["32 GB / 1 TB", "64 GB / 2 TB"],
        colors: ["Graphite", "Black"],
        specs: {
            "Экран": "16″ Mini-LED",
            "Память": "32–64 GB",
            "Накопитель": "1–2 TB",
            "Класс": "Ultra Performance"
        }
    },


    /* =========================
       TABLETS
    ========================= */

    "nova-tab-pro": {
        category: "tablet",
        name: "NOVA Tab Pro",
        brand: "NOVA",
        badge: "PRO",
        description: "Большой дисплей и высокая производительность в компактном планшете.",
        price: 799,
        memory: ["128 GB", "256 GB", "512 GB"],
        colors: ["Silver", "Space Gray"],
        specs: {
            "Экран": "12.9″ OLED",
            "Частота": "120 Hz",
            "Память": "128–512 GB",
            "USB": "USB-C"
        }
    },

    "nova-tab-air": {
        category: "tablet",
        name: "NOVA Tab Air",
        brand: "NOVA",
        badge: "AIR",
        description: "Лёгкий планшет для фильмов, учёбы, заметок и повседневного использования.",
        price: 549,
        memory: ["128 GB", "256 GB"],
        colors: ["Silver", "Blue"],
        specs: {
            "Экран": "11″ OLED",
            "Частота": "120 Hz",
            "Память": "128–256 GB",
            "USB": "USB-C"
        }
    },


    /* =========================
       AUDIO
    ========================= */

    "airpods-pro": {
        category: "audio",
        name: "AirPods Pro",
        brand: "Apple",
        badge: "TWS",
        description: "Компактные беспроводные наушники с активным шумоподавлением.",
        price: 249,
        memory: [],
        colors: ["White"],
        specs: {
            "Тип": "TWS",
            "ANC": "Да",
            "Подключение": "Bluetooth",
            "Зарядка": "USB-C"
        }
    },

    "airpods": {
        category: "audio",
        name: "AirPods",
        brand: "Apple",
        badge: "TWS",
        description: "Лёгкие беспроводные наушники для повседневного использования.",
        price: 169,
        memory: [],
        colors: ["White"],
        specs: {
            "Тип": "TWS",
            "ANC": "Нет",
            "Подключение": "Bluetooth",
            "Зарядка": "USB-C"
        }
    },

    "airpods-max": {
        category: "audio",
        name: "AirPods Max",
        brand: "Apple",
        badge: "OVER-EAR",
        description: "Премиальные полноразмерные наушники с пространственным звучанием.",
        price: 599,
        memory: [],
        colors: ["Black", "Silver", "Blue"],
        specs: {
            "Тип": "Over-Ear",
            "ANC": "Да",
            "Подключение": "Bluetooth",
            "Вес": "386 г"
        }
    },

    "sony-wh-1000xm6": {
        category: "audio",
        name: "Sony WH-1000XM6",
        brand: "Sony",
        badge: "PREMIUM",
        description: "Премиальные полноразмерные наушники с продвинутым шумоподавлением.",
        price: 449,
        memory: [],
        colors: ["Black", "Silver"],
        specs: {
            "Тип": "Over-Ear",
            "ANC": "Да",
            "Подключение": "Bluetooth",
            "Автономность": "До 30 ч"
        }
    },

    "nova-buds-pro": {
        category: "audio",
        name: "NOVA Buds Pro",
        brand: "NOVA",
        badge: "NOVA",
        description: "Фирменные беспроводные наушники NOVA с чистым звуком и шумоподавлением.",
        price: 249,
        memory: [],
        colors: ["Black", "White"],
        specs: {
            "Тип": "TWS",
            "ANC": "Да",
            "Подключение": "Bluetooth",
            "Зарядка": "USB-C"
        }
    },

    "nova-sound-one": {
        category: "audio",
        name: "NOVA Sound One",
        brand: "NOVA",
        badge: "SPEAKER",
        description: "Компактная беспроводная акустика NOVA для дома и путешествий.",
        price: 299,
        memory: [],
        colors: ["Black", "Gray"],
        specs: {
            "Тип": "Акустика",
            "Мощность": "40 W",
            "Подключение": "Bluetooth",
            "USB": "USB-C"
        }
    },


    /* =========================
       WATCHES
    ========================= */

    "apple-watch-ultra-3": {
        category: "watch",
        name: "Apple Watch Ultra 3",
        brand: "Apple",
        badge: "ULTRA",
        description: "Премиальные спортивные часы для активного образа жизни.",
        price: 899,
        memory: ["49 mm"],
        colors: ["Titanium"],
        specs: {
            "Корпус": "Titanium",
            "Экран": "OLED",
            "GPS": "Да",
            "Защита": "Water Resistant"
        }
    },

    "apple-watch-pro": {
        category: "watch",
        name: "Apple Watch Pro",
        brand: "Apple",
        badge: "PRO",
        description: "Универсальные умные часы для спорта, работы и повседневной жизни.",
        price: 599,
        memory: ["45 mm", "49 mm"],
        colors: ["Black", "Silver"],
        specs: {
            "Корпус": "Aluminium",
            "Экран": "OLED",
            "GPS": "Да",
            "Связь": "Bluetooth"
        }
    },

    "galaxy-watch-ultra": {
        category: "watch",
        name: "Galaxy Watch Ultra",
        brand: "Samsung",
        badge: "ULTRA",
        description: "Мощные смарт-часы Samsung с большим экраном и спортивными функциями.",
        price: 699,
        memory: ["47 mm"],
        colors: ["Titanium Gray", "White"],
        specs: {
            "Корпус": "Titanium",
            "Экран": "Super AMOLED",
            "GPS": "Да",
            "Защита": "Water Resistant"
        }
    },

    "nova-watch-pro": {
        category: "watch",
        name: "NOVA Watch Pro",
        brand: "NOVA",
        badge: "PRO",
        description: "Фирменные умные часы NOVA с премиальным дизайном.",
        price: 399,
        memory: ["45 mm"],
        colors: ["Black", "Silver"],
        specs: {
            "Корпус": "Aluminium",
            "Экран": "AMOLED",
            "GPS": "Да",
            "Связь": "Bluetooth"
        }
    },

    "nova-watch-classic": {
        category: "watch",
        name: "NOVA Watch Classic",
        brand: "NOVA",
        badge: "CLASSIC",
        description: "Минималистичные умные часы NOVA в классическом стиле.",
        price: 299,
        memory: ["42 mm", "45 mm"],
        colors: ["Black", "Silver"],
        specs: {
            "Корпус": "Aluminium",
            "Экран": "AMOLED",
            "GPS": "Да",
            "Связь": "Bluetooth"
        }
    },

    "galaxy-watch-pro": {
        category: "watch",
        name: "Galaxy Watch Pro",
        brand: "Samsung",
        badge: "PRO",
        description: "Продвинутые смарт-часы Samsung для спорта и повседневного использования.",
        price: 499,
        memory: ["44 mm", "46 mm"],
        colors: ["Black", "Silver"],
        specs: {
            "Корпус": "Aluminium",
            "Экран": "AMOLED",
            "GPS": "Да",
            "Защита": "Water Resistant"
        }
    },


    /* =========================
       ACCESSORIES
    ========================= */

    "nova-power-hub": {
        category: "accessory",
        name: "NOVA Power Hub",
        brand: "NOVA",
        badge: "ACCESSORY",
        description: "Компактный зарядный хаб для нескольких устройств.",
        price: 99,
        memory: [],
        colors: ["Black", "White"],
        specs: {
            "Порты": "USB-C / USB-A",
            "Мощность": "100 W",
            "Тип": "Charging Hub",
            "Материал": "Aluminium"
        }
    },

    "nova-mag-dock": {
        category: "accessory",
        name: "NOVA Mag Dock",
        brand: "NOVA",
        badge: "MAGNETIC",
        description: "Минималистичная магнитная зарядная станция для рабочего стола.",
        price: 69,
        memory: [],
        colors: ["Black", "Silver"],
        specs: {
            "Тип": "Magnetic Dock",
            "Мощность": "30 W",
            "Подключение": "USB-C",
            "Материал": "Aluminium"
        }
    }

};
