function Product(name, category, origin, price, shortDescription, longDescription, size, image) {
    this.name = name;
    this.category = category;
    this.origin = origin;
    this.price = price;
    this.shortDescription = shortDescription;
    this.longDescription = longDescription;
    this.size = size;
    this.image = image;
}

export const crystals = [
    new Product(
        "celestine",
        "crystals",
        "Madagascar",
        "200", 
        "Promotes clarity of mind and communication.",
        "Celestine is known as the stone of angels, promoting mental clarity, spiritual growth, and communication with divine entities. Its gentle energy brings harmony and balance to the mind, body, and spirit.",
        "Approx. 50g"
    ),
    new Product(
        "blue apatite",
        "crystals",
        "Brazil",
        "150",
        "Enhances intuition and personal power.",
        "Blue Apatite is a stone of manifestation, helping to stimulate psychic abilities and enhance communication. It aids in personal development and spiritual attunement, promoting a sense of confidence and self-expression.",
        "Approx. 30g"
    ),
    new Product(
        "agate",
        "crystals",
        "India",
        "100",
        "Brings stability and emotional balance.",
        "Agate is a grounding stone that brings stability and emotional balance. It harmonizes yin and yang energies, promoting self-acceptance, confidence, and inner strength.",
        "Approx. 50g"
    ),
    new Product(
        "rose quartz",
        "crystals",
        "Brazil",
        "180",
        "Promotes love, compassion, and emotional healing.",
        "Rose Quartz is the stone of love, compassion, and emotional healing. It opens the heart chakra, promoting self-love, forgiveness, and deep emotional healing. It radiates a gentle, soothing energy that calms the mind and nurtures the soul.",
        "Approx. 40g"
    ),
    new Product(
        "rock crystal",
        "crystals",
        "Brazil",
        "120",
        "Amplifies energy and promotes clarity.",
        "Rock Crystal, also known as Clear Quartz, is a powerful amplifier of energy and intention. It enhances clarity of mind, spiritual awareness, and intuition. It is a versatile stone that can be used for healing, meditation, and manifestation.",
        "Approx. 60g"
    )
];

export const essentialOils = [
    new Product(
        "lavender",
        "essentialoils",
        "France",
        "150", 
        "Calming and relaxing scent, great for stress relief.",
        "Lavender essential oil is renowned for its calming and relaxing properties. It promotes restful sleep, reduces stress and anxiety, and soothes the mind and body. Its gentle floral aroma makes it a popular choice for aromatherapy and natural healing practices.",
        "10 ml"
    ),
    new Product(
        "rosemary",
        "essentialoils",
        "Spain",
        "120",
        "Invigorating and stimulating scent, aids concentration.",
        "Rosemary essential oil has a fresh, herbaceous scent that invigorates the senses and promotes mental clarity. It stimulates cognitive function, improves memory, and enhances concentration. It is also known for its uplifting and energizing properties.",
        "15 ml"
    ),
    new Product(
        "orange",
        "essentialoils",
        "Italy",
        "100",
        "Uplifting and refreshing citrus aroma, boosts mood.",
        "Orange essential oil has a bright, uplifting aroma that uplifts the spirit and promotes a positive mood. It is known for its energizing and revitalizing properties, helping to alleviate stress, anxiety, and depression. Its sweet citrus scent also makes it a popular choice for natural cleaning products and air fresheners.",
        "10 ml"
    ),
    new Product(
        "mint",
        "essentialoils",
        "USA",
        "130",
        "Cooling and refreshing scent, aids digestion.",
        "Mint essential oil has a cooling and refreshing aroma that invigorates the senses and promotes mental clarity. It aids digestion, relieves headaches, and alleviates nausea. Its stimulating properties make it a popular choice for aromatherapy and natural healing practices.",
        "10 ml"
    ),
    new Product(
        "tea tree",
        "essentialoils",
        "Australia",
        "160",
        "Antimicrobial and purifying properties, supports skin health.",
        "Tea Tree essential oil is renowned for its powerful antimicrobial and purifying properties. It supports skin health, soothes minor cuts, burns, and insect bites, and helps to clear acne and blemishes. Its fresh, medicinal aroma makes it a versatile oil for household cleaning and natural skincare.",
        "10 ml"
    ),
    new Product(
        "lemon",
        "essentialoils",
        "Italy",
        "110",
        "Uplifting and energizing citrus scent, promotes detoxification.",
        "Lemon essential oil has a bright, uplifting aroma that energizes the mind and uplifts the spirit. It promotes detoxification, cleanses the body, and supports immune function. Its refreshing scent also helps to alleviate stress, anxiety, and fatigue.",
        "10 ml"
    ),
    new Product(
        "eucalyptus",
        "essentialoils",
        "Australia",
        "140",
        "Clears congestion and supports respiratory health.",
        "Eucalyptus essential oil has a fresh, invigorating aroma that clears congestion and supports respiratory health. It helps to relieve coughs, colds, and sinus congestion, and promotes deep breathing and relaxation. Its antibacterial and antiviral properties make it a popular choice for natural cleaning products and cold remedies.",
        "10 ml"
    )
];

export const incenses = [
    new Product(
        "yagra",
        "incenses",
        "India",
        "80", 
        "Balances energy and promotes relaxation.",
        "Yagra incense is handcrafted in India using traditional methods and natural ingredients. Its unique blend of herbs and resins creates a harmonious aroma that balances energy and promotes relaxation. Ideal for meditation, yoga, and spiritual practices.",
        "Approx. 60 minutes"
    ),
    new Product(
        "myrrh",
        "incenses",
        "Somalia",
        "100",
        "Purifies the air and uplifts the spirit.",
        "Myrrh incense has been used since ancient times for its purifying and uplifting properties. It creates a warm, earthy aroma that purifies the air and uplifts the spirit. Ideal for meditation, prayer, and spiritual rituals.",
        "Approx. 45 minutes"
    ),
    new Product(
        "patchouli",
        "incenses",
        "Indonesia",
        "90",
        "Grounding and calming scent, enhances creativity.",
        "Patchouli incense has a rich, earthy aroma that grounds the spirit and calms the mind. It enhances creativity, promotes relaxation, and balances emotions. Ideal for meditation, yoga, and creative pursuits.",
        "Approx. 50 minutes"
    ),
    new Product(
        "cedar",
        "incenses",
        "USA",
        "110",
        "Purifies the environment and promotes clarity.",
        "Cedar incense has a cleansing and purifying aroma that clears negative energy and promotes mental clarity. It creates a peaceful atmosphere, enhances focus, and supports spiritual growth. Ideal for meditation, prayer, and ritual ceremonies.",
        "Approx. 60 minutes"
    ),
    new Product(
        "lily",
        "incenses",
        "Japan",
        "120",
        "Calming and soothing scent, promotes emotional balance.",
        "Lily incense has a delicate floral aroma that calms the senses and promotes emotional balance. It creates a serene atmosphere, reduces stress and anxiety, and enhances relaxation. Ideal for meditation, relaxation, and aromatherapy.",
        "Approx. 40 minutes"
    ),
    new Product(
        "frankincense",
        "incenses",
        "Oman",
        "130",
        "Elevates consciousness and deepens spiritual connection.",
        "Frankincense incense has been used for centuries in spiritual ceremonies for its purifying and elevating properties. It creates a sacred atmosphere, enhances meditation, and deepens spiritual connection. Ideal for prayer, ritual, and spiritual practices.",
        "Approx. 60 minutes"
    ),
    new Product(
        "palo santo",
        "incenses",
        "Peru",
        "150",
        "Clears negative energy and promotes healing.",
        "Palo Santo incense has a sweet, woody aroma that clears negative energy and promotes healing. It creates a protective shield, purifies the environment, and enhances spiritual awareness. Ideal for energy clearing, meditation, and spiritual rituals.",
        "Approx. 45 minutes"
    )
];

export const allProducts = [...crystals, ...essentialOils, ...incenses];
export const productNames = allProducts.map((product => product.name));