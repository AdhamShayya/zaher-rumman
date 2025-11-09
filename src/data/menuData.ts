// Menu data based on restaurant menu
export interface MenuItem {
  id: number;
  nameEn: string;
  nameAr: string;
  category: string;
  size: string;
  descriptionEn: string;
  descriptionAr: string;
  price: number;
  calories: number;
  image?: string;
}

export interface MenuCategory {
  id: string;
  nameEn: string;
  nameAr: string;
  descriptionEn: string;
  descriptionAr: string;
  items: MenuItem[];
}

// All menu items
export const menuItems: MenuItem[] = [
  // Cold Appetizers
  {
    id: 1,
    nameEn: "Hummus",
    nameAr: "حمص",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Hummus with tahini and natural lemon juice and olive oil",
    descriptionAr: "حمص بالطحينة وعصير الليمون الطبيعي وزيت الزيتون",
    price: 8.53,
    calories: 482,
    image: "/images/appetizers/hommos.jpg"
  },
  {
    id: 2,
    nameEn: "Hummus Meat",
    nameAr: "حمص باللحمة",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Hummus with tahini with fried lamb pieces and pine nuts",
    descriptionAr: "حمص بالطحينة مع قطع لحم الغنم المقلية والصنوبر",
    price: 11.2,
    calories: 690,
    image: "/images/appetizers/hommos lahme.jpg"
  },
  {
    id: 3,
    nameEn: "Eggplant Fatteh",
    nameAr: "فتة باذنجان",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Bread and fried eggplant and chickpeas covered with yogurt and tahini with lemon and garlic",
    descriptionAr: "خبز وباذنجان مقلي والحمص مغطاة باللبن والطحينة بالإضافة الى الحامض والثوم",
    price: 9.6,
    calories: 482,
    image: "/images/appetizers/2022-06-19-099-2.jpg"
  },
  {
    id: 4,
    nameEn: "Mutabal",
    nameAr: "متبل",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Grilled eggplant with tahini and pomegranate seeds",
    descriptionAr: "باذنجان مشوي مع الطحينة وحبوب الرمان",
    price: 8.53,
    calories: 335,
    image: "/images/appetizers/moutabal.jpg"
  },
  {
    id: 5,
    nameEn: "Muhammara",
    nameAr: "محمرة",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Delicious blend of sweet, salty, hot and sour flavors with fresh wild thyme",
    descriptionAr: "لطة لذيذة من الطعم الحامض والحلو والمالح والحار إضافة إلى نكهة الزعتر البري الطازج",
    price: 8.27,
    calories: 345,
    image: "/images/appetizers/mouhamara.jpg"
  },
  {
    id: 6,
    nameEn: "Pickles",
    nameAr: "مخلل",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Assortment of pickled vegetables",
    descriptionAr: "تشكيلة من الخضروات المخللة",
    price: 4.8,
    calories: 211,
    image: "/images/appetizers/2022-06-19-020.jpg"
  },
  {
    id: 7,
    nameEn: "Warak Enab Bzeit",
    nameAr: "ورق عنب بالزيت",
    category: "Cold Appetizers",
    size: "Regular",
    descriptionEn: "Stuffed with rice and fresh vegetables cooked in olive oil and pomegranate molasses",
    descriptionAr: "محشي بالأرز والخضروات الطازجة مطهي بزيت الزيتون ودبس الرمان",
    price: 8.8,
    calories: 323,
    image: "/images/appetizers/waraa enab.jpg"
  },
  
  // Salads
  {
    id: 8,
    nameEn: "Fatouch",
    nameAr: "فتوش",
    category: "Salads",
    size: "Regular",
    descriptionEn: "Fresh vegetables with herbs, fried bread and pomegranate seeds",
    descriptionAr: "خضراوات طازجة مع الأعشاب بالإضافة الى الخبز المقلي وحبوب الرمان",
    price: 9.07,
    calories: 409,
    image: "/images/salads/fattouch.jpg"
  },
  {
    id: 9,
    nameEn: "Tabuleh",
    nameAr: "تبولة",
    category: "Salads",
    size: "Regular",
    descriptionEn: "Parsley, tomatoes and green onions with bulgur, olive oil and lemon juice",
    descriptionAr: "بقدونس، طماطم وبصل أخضر مع البرغل بالإضافة الى زيت الزيتون وعصير الليمون",
    price: 8.53,
    calories: 290,
    image: "/images/salads/tabouleh.jpg"
  },
  {
    id: 10,
    nameEn: "Quinoa Salad",
    nameAr: "سلطة الكينوا",
    category: "Salads",
    size: "Regular",
    descriptionEn: "Lettuce, grapes, apple and orange slices, walnuts and cherry tomatoes with fresh lemon juice and olive oil",
    descriptionAr: "خس، عنب وشرائح التفاح والبرتقال والجوز والطماطم الكرزية متبل بعصير الليمون الطازج وزيت الزيتون",
    price: 9.6,
    calories: 570,
    image: "/images/salads/quinoa.jpg"
  },
  {
    id: 11,
    nameEn: "Fatouch Zahr Rumman",
    nameAr: "فتوش زهر رمان",
    category: "Salads",
    size: "Regular",
    descriptionEn: "Vegetables, herbs and fried eggplant with pomegranate seeds and tahini sauce",
    descriptionAr: "طبق من الخضار والأعشاب والباذنجان المقلي المزين بحبوب الرمان بالإضافة الى صلصة الطحينة",
    price: 10.4,
    calories: 429,
    image: "/images/salads/fatouch zahr remen (1).JPG"
  },
  {
    id: 12,
    nameEn: "Caesar Salad",
    nameAr: "سلطة السيزر",
    category: "Salads",
    size: "Regular",
    descriptionEn: "Lettuce with parmesan cheese and toasted herb bread",
    descriptionAr: "خس مع جبن البارميزان وقطع الخبز المحمص بالأعشاب",
    price: 9.07,
    calories: 290,
    image: "/images/salads/ceaser.jpg"
  },
  
  // Hot Appetizers
  {
    id: 13,
    nameEn: "Hummus Zahr Rumman",
    nameAr: "حمص زهر رمان",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Traditional hummus with small fried kibbeh discs",
    descriptionAr: "حمص تقليدي مع أقراص صغيرة من الكبة المقلية",
    price: 10.4,
    calories: 670,
    image: "/images/appetizers/hommos zahr remen.jpg"
  },
  {
    id: 14,
    nameEn: "Fried Kebbeh",
    nameAr: "كبة مقلية",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "A mixture of spiced bulgur stuffed with meat",
    descriptionAr: "خليط من البرغل المتبل المحشو باللحم",
    price: 10.13,
    calories: 439,
    image: "/images/appetizers/2022-06-19-042.jpg"
  },
  {
    id: 15,
    nameEn: "Halloum Cheese with Pesto",
    nameAr: "حلوم بيستو",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Grilled halloumi cheese with herbs and pesto",
    descriptionAr: "جبنة حلوم مشوية بالأعشاب والبيستو",
    price: 9.87,
    calories: 585,
    image: "/images/appetizers/halloum with pesto.jpg"
  },
  {
    id: 16,
    nameEn: "Dynamite Shrimp",
    nameAr: "دينامايت شرمب",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Crispy shrimp covered with spicy dynamite sauce",
    descriptionAr: "جمبري مقرمش مغطى بصلصة الدينامايت الحارة",
    price: 11.2,
    calories: 620,
    image: "/images/appetizers/hommos shrimp.png"
  },
  {
    id: 17,
    nameEn: "Spicy Potatoes",
    nameAr: "بطاطس حرة",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Fried potato cubes seasoned with coriander, chili and garlic",
    descriptionAr: "مكعبات البطاطا المقلية متبلة بالكزبرة والحر والثوم",
    price: 9.6,
    calories: 320,
    image: "/images/appetizers/spicy potato (1).jpg"
  },
  {
    id: 18,
    nameEn: "French Fries",
    nameAr: "بطاطس مقلية",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "French fries",
    descriptionAr: "بطاطس مقلية",
    price: 6.67,
    calories: 523,
    image: "/images/appetizers/2022-06-19-020.jpg"
  },
  {
    id: 19,
    nameEn: "Grilled Chicken Wings",
    nameAr: "جوانح دجاج مشوية",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Grilled marinated chicken wings with lemon and garlic sauce",
    descriptionAr: "جوانح دجاج متبلة مشوي على الفحم مع صلصة الليمون والثوم",
    price: 10.4,
    calories: 570,
    image: "/images/appetizers/wings (1).jpg"
  },
  {
    id: 20,
    nameEn: "Chicken Liver",
    nameAr: "كبدة دجاج",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Chicken liver with pomegranate molasses",
    descriptionAr: "كبدة دجاج مع دبس الرمان",
    price: 9.6,
    calories: 500,
    image: "/images/appetizers/liver.jpg"
  },
  {
    id: 21,
    nameEn: "Makanik",
    nameAr: "نقانق",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Sausages with pomegranate molasses",
    descriptionAr: "نقانق مع دبس الرمان",
    price: 10.4,
    calories: 322,
    image: "/images/appetizers/makanek.jpg"
  },
  {
    id: 22,
    nameEn: "Arayes",
    nameAr: "عرايس",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Minced lamb stuffed in Arabic bread grilled on charcoal",
    descriptionAr: "لحم غنم مفروم محشو بخبز عربي مشوي على الفحم",
    price: 13.87,
    calories: 398,
    image: "/images/appetizers/2022-06-19-061.jpg"
  },
  {
    id: 23,
    nameEn: "Mixed Fatayer",
    nameAr: "فطاير مشكلة",
    category: "Hot Appetizers",
    size: "Regular",
    descriptionEn: "Meat, spinach and cheese pies",
    descriptionAr: "فطاير باللحم والسبناخ والجبن",
    price: 9.6,
    calories: 467,
    image: "/images/appetizers/mixed fatayer.jpg"
  },
  
  // Sandwiches
  {
    id: 24,
    nameEn: "Beef Burger",
    nameAr: "برغر لحم",
    category: "Sandwiches",
    size: "Regular",
    descriptionEn: "Angus beef patty with lettuce, tomato and pickles with special sauce and french fries",
    descriptionAr: "قطعة من لحم الانجوس مع الخس والطماطم ومخلل خيار بالاضافة الى الصوص الخاص مع بطاطس مقلية",
    price: 12,
    calories: 620,
    image: "/images/burgers/beef burger.jpg"
  },
  {
    id: 25,
    nameEn: "Chicken Burger",
    nameAr: "برغر دجاج",
    category: "Sandwiches",
    size: "Regular",
    descriptionEn: "Crispy chicken breast with cheddar cheese, lettuce, tomato, pickles and special sauce with french fries",
    descriptionAr: "صدر دجاج مقرمش مع شرائح جبنة الشيدر بلاضافة الى خس طماطم مخلل خيار والصوص الخاص مع بطاطس مقلية",
    price: 10.4,
    calories: 430,
    image: "/images/burgers/chicken burger.jpg"
  },
  
  // Main Dishes
  {
    id: 26,
    nameEn: "Hummus Meat",
    nameAr: "حمص باللحمة",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Hummus with tahini with fried lamb pieces and pine nuts",
    descriptionAr: "حمص بالطحينة مع قطع لحم الغنم المقلية والصنوبر",
    price: 11.2,
    calories: 690,
    image: "/images/appetizers/hommos lahme.jpg"
  },
  {
    id: 27,
    nameEn: "Mixed Machawi",
    nameAr: "مشاوي مشكلة",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Mixed grill: 1 skewer shish taouk - 1 skewer kafta - 1 skewer awsal - lamb chops (1 piece) with french fries served with baiwaz",
    descriptionAr: "مشاوي مشكلة: ١ سيخ شيش طاووق - ١سيخ كفتة لحم - ١ سيخ اوصال - ريش غنم (عدد ١) مع بطاطس مقلية تقدم مع البيواز",
    price: 23.73,
    calories: 528,
    image: "/images/main dish/mix mashewe.jpg"
  },
  {
    id: 28,
    nameEn: "Chich Taouk",
    nameAr: "شيش طاووق",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Shish taouk: (4 skewers with french fries and garlic)",
    descriptionAr: "شيش طاووق: (٤ سياخ مع بطاطس مقلية والثوم)",
    price: 21.07,
    calories: 402,
    image: "/images/main dish/mashewee (1).jpg"
  },
  {
    id: 29,
    nameEn: "Kebbeh with Laban & Rice",
    nameAr: "كبة باللبن مع رز",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Kibbeh discs cooked in yogurt served with rice",
    descriptionAr: "أقراص كبة مطبوخة بالزبادي تقدم مع أرز",
    price: 18.4,
    calories: 630,
    image: "/images/main dish/kebbe b laban.jpg"
  },
  {
    id: 30,
    nameEn: "Chicken Escalope",
    nameAr: "اسكالوب دجاج",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Breaded chicken breast with french fries",
    descriptionAr: "صدر دجاج پانيه مع بطاطس مقلية",
    price: 18.4,
    calories: 980,
    image: "/images/main dish/escalope.jpg"
  },
  {
    id: 31,
    nameEn: "Awsal",
    nameAr: "اوصال",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Awsal meat (4 skewers with french fries served with baiwaz)",
    descriptionAr: "اوصال لحم (٤ سياخ مع بطاطس مقلية تقدم مع البيواز",
    price: 23.47,
    calories: 406,
    image: "/images/main dish/awsal.jpg"
  },
  {
    id: 32,
    nameEn: "Mashawi Zahr Rumman",
    nameAr: "مشاوي زهر رمان",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Mix of awsal, kafta meat, grilled sausages, shish taouk, arayes and ribs, served with french fries and grilled vegetables",
    descriptionAr: "تشكيلة من اوصال وكفتة اللحم, نقانق مشوية, شيش طاووق وعرايس وريش, تقدم مع بطاطس مقلية وخضار مشوية",
    price: 97.33,
    calories: 2152,
    image: "/images/main dish/mashewe zahr rmen.jpg"
  },
  {
    id: 33,
    nameEn: "Kaftah",
    nameAr: "كفتة",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Kafta meat (4 skewers with french fries served with baiwaz)",
    descriptionAr: "كفتة لحم (٤ سياخ مع بطاطس مقلية تقدم مع البيواز",
    price: 21.6,
    calories: 618,
    image: "/images/main dish/kafta.jpg"
  },
  {
    id: 34,
    nameEn: "Fettuccini Alfredo",
    nameAr: "فتوشيني الفريدو",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Pasta, parmesan, mushrooms, chicken",
    descriptionAr: "باستا ، بارميزان ، فطر ، دجاج",
    price: 15.2,
    calories: 720,
    image: "/images/pasta/fettuccini alfredo2.jpg"
  },
  {
    id: 35,
    nameEn: "Shawarma Plate Chicken",
    nameAr: "صحن شاورما دجاج",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Chicken shawarma served with french fries, garlic and pickles",
    descriptionAr: "شاورما دجاج يقدم مع بطاطس مقلية, ثوم ومخلل",
    price: 16,
    calories: 820,
    image: "/images/shawarma/13cdc5af-1453-4e6b-b3db-4bcc1d9e682f.jpg"
  },
  {
    id: 36,
    nameEn: "Shawarma Plate Beef",
    nameAr: "صحن شاورما لحم",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Beef shawarma served with french fries, tahini and pickles",
    descriptionAr: "شاورما لحم يقدم مع بطاطس مقلية,طحينة ومخلل",
    price: 18.67,
    calories: 920,
    image: "/images/shawarma/bc151ceb-42d5-4326-b8a7-65d98652ba0f.jpg"
  },
  {
    id: 37,
    nameEn: "Shawarma Mix Plate",
    nameAr: "صحن شاورما مشكل",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Mixed shawarma (chicken and beef) served with french fries, garlic, tahini and pickles",
    descriptionAr: "شاورما مشكل (دجاج ولحم) يقدم مع بطاطس مقلية, ثوم, طحينة ومخلل",
    price: 17.33,
    calories: 980,
    image: "/images/shawarma/e63f941c-d0f6-434d-9b0c-87643ec546a9.jpg"
  },
  {
    id: 38,
    nameEn: "Lamb Shank",
    nameAr: "موزات لحم غنم",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Lamb shanks with brown sauce and saffron rice",
    descriptionAr: "موزات لحم غنم مع الصلصة البنية والارز بالزعفران",
    price: 27.73,
    calories: 596,
    image: "/images/main dish/lamb shank.jpg"
  },
  {
    id: 39,
    nameEn: "Lamb Chops",
    nameAr: "ريش غنم",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Lamb chops served with french fries and chef sauce",
    descriptionAr: "ريش غنم تقدم مع البطاطس المقلية وصلصة الشيف",
    price: 25.33,
    calories: 686,
    image: "/images/main dish/mashewee (4).jpg"
  },
  {
    id: 40,
    nameEn: "Salmon With Honey Sauce",
    nameAr: "سلمون مع العسل",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Grilled salmon with honey",
    descriptionAr: "سمك سلمون مشوي مع العسل",
    price: 25.6,
    calories: 468,
    image: "/images/main dish/salmon 1.jpg"
  },
  {
    id: 41,
    nameEn: "Lamb Chops with Mashed Potatoes",
    nameAr: "موزات غنم مع بطاطس مهروسة",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Lamb shanks with mashed potatoes and brown sauce",
    descriptionAr: "موزات لحم الغنم مع بطاطس مهروسة وصلصة البنية",
    price: 27.73,
    calories: 645,
    image: "/images/main dish/lamb shank2.jpg"
  },
  {
    id: 42,
    nameEn: "Kafta Chicken",
    nameAr: "كفتة دجاج",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Chicken kafta served with french fries and grilled vegetables",
    descriptionAr: "كفتة دجاج تقدم مع البطاطس المقلية والخضار المشوية",
    price: 21.07,
    calories: 420,
    image: "/images/main dish/grilled wings.jpg"
  },
  {
    id: 43,
    nameEn: "White Rice with Vermicelli",
    nameAr: "ارز ابيض بالشعيرية",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "White rice with vermicelli",
    descriptionAr: "ارز ابيض بالشعيرية",
    price: 2.67,
    calories: 130,
    image: "/images/main dish/1z3a4553.jpg"
  },
  {
    id: 44,
    nameEn: "Yellow Rice",
    nameAr: "ارز اصفر بالزعفران",
    category: "Main Dishes",
    size: "Regular",
    descriptionEn: "Saffron yellow rice",
    descriptionAr: "ارز اصفر بالزعفران",
    price: 2.67,
    calories: 130,
    image: "/images/main dish/1z3a4553.jpg"
  },
  
  // Soups
  {
    id: 45,
    nameEn: "Harira",
    nameAr: "حريرة",
    category: "Soups",
    size: "Regular",
    descriptionEn: "Protein-rich lentils and chickpeas with vermicelli, meat and tomato sauce",
    descriptionAr: "حبوب غنية بالبروتين من العدس والحمص مع الشعيرية واللحم وصلصة الطماطم",
    price: 8.53,
    calories: 125,
    image: "/images/soups/harira2.jpg"
  },
  {
    id: 46,
    nameEn: "Lentil",
    nameAr: "عدس",
    category: "Soups",
    size: "Regular",
    descriptionEn: "Traditional lentil soup",
    descriptionAr: "شوربة العدس التقليدية",
    price: 7.47,
    calories: 136,
    image: "/images/soups/adas.jpg"
  },
  {
    id: 47,
    nameEn: "Mushroom",
    nameAr: "فطر",
    category: "Soups",
    size: "Regular",
    descriptionEn: "Mushroom with cream and fresh wild thyme",
    descriptionAr: "فطر مع الكريمة والزعتر البري الطازج",
    price: 8.53,
    calories: 140,
    image: "/images/soups/mushroom (1).JPG"
  },
  
  // Desserts
  {
    id: 48,
    nameEn: "Ice Cream",
    nameAr: "ايس كريم",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "You can choose two flavors (chocolate - vanilla - strawberry - pistachio)",
    descriptionAr: "يمكنك اختيار نكهتين (شوكولاتة - فانيلا - فرولة - فستق)",
    price: 10.13,
    calories: 450,
    image: "/images/sweets/1-149.jpg"
  },
  {
    id: 49,
    nameEn: "Fondant Chocolate",
    nameAr: "فوندان الشكولاتة",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "Molten chocolate fondant",
    descriptionAr: "فوندان الشكولاتة",
    price: 13.07,
    calories: 720,
    image: "/images/sweets/fondant2.jpg"
  },
  {
    id: 50,
    nameEn: "Zahr Rumman Desserts",
    nameAr: "حلى زهر رمان",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "Special Zahr Rumman dessert",
    descriptionAr: "حلى زهر رمان",
    price: 11.73,
    calories: 640,
    image: "/images/sweets/zahr remen sweet2.jpg"
  },
  {
    id: 51,
    nameEn: "Halawet Jebn",
    nameAr: "حلاوة الجبن",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "Traditional cheese dessert",
    descriptionAr: "حلاوة الجبن",
    price: 11.2,
    calories: 280,
    image: "/images/sweets/gazel.png"
  },
  {
    id: 52,
    nameEn: "Mixed Fruits (2p)",
    nameAr: "فواكة موسمية (شخصين)",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "Mixed seasonal fruit plate (2 persons)",
    descriptionAr: "صحن فواكة موسمي مشكل (شخصين)",
    price: 12,
    calories: 220,
    image: "/images/sweets/1-150.jpg"
  },
  {
    id: 53,
    nameEn: "Mixed Fruits (4p)",
    nameAr: "فواكة موسمية (4 اشخاص)",
    category: "Desserts",
    size: "Regular",
    descriptionEn: "Mixed seasonal fruit plate (4 persons)",
    descriptionAr: "صحن فواكة موسمي مشكل (4 اشخاص)",
    price: 23.73,
    calories: 440,
    image: "/images/sweets/1-151.jpg"
  }
];

// Organized by categories
export const menuCategories: MenuCategory[] = [
  {
    id: "cold-appetizers",
    nameEn: "Cold Appetizers",
    nameAr: "المقبلات الباردة",
    descriptionEn: "Fresh and traditional Middle Eastern cold appetizers",
    descriptionAr: "مقبلات باردة طازجة وتقليدية من الشرق الأوسط",
    items: menuItems.filter(item => item.category === "Cold Appetizers")
  },
  {
    id: "salads",
    nameEn: "Salads",
    nameAr: "السلطات",
    descriptionEn: "Fresh and healthy salads with authentic flavors",
    descriptionAr: "سلطات طازجة وصحية بنكهات أصيلة",
    items: menuItems.filter(item => item.category === "Salads")
  },
  {
    id: "hot-appetizers",
    nameEn: "Hot Appetizers",
    nameAr: "المقبلات الساخنة",
    descriptionEn: "Delicious hot appetizers and starters",
    descriptionAr: "مقبلات ساخنة ومشهيات لذيذة",
    items: menuItems.filter(item => item.category === "Hot Appetizers")
  },
  {
    id: "sandwiches",
    nameEn: "Sandwiches",
    nameAr: "السندويشات",
    descriptionEn: "Tasty burgers and sandwiches",
    descriptionAr: "برغر وسندويشات شهية",
    items: menuItems.filter(item => item.category === "Sandwiches")
  },
  {
    id: "main-dishes",
    nameEn: "Main Dishes",
    nameAr: "الأطباق الرئيسية",
    descriptionEn: "Signature main courses and grilled specialties",
    descriptionAr: "الأطباق الرئيسية المميزة والمشاوي الخاصة",
    items: menuItems.filter(item => item.category === "Main Dishes")
  },
  {
    id: "soups",
    nameEn: "Soups",
    nameAr: "الشوربات",
    descriptionEn: "Warm and comforting traditional soups",
    descriptionAr: "شوربات تقليدية دافئة ومريحة",
    items: menuItems.filter(item => item.category === "Soups")
  },
  {
    id: "desserts",
    nameEn: "Desserts",
    nameAr: "الحلويات",
    descriptionEn: "Sweet treats and traditional desserts",
    descriptionAr: "حلويات وتحليات تقليدية",
    items: menuItems.filter(item => item.category === "Desserts")
  }
];

// Helper function to get item by ID
export const getMenuItemById = (id: number): MenuItem | undefined => {
  return menuItems.find(item => item.id === id);
};

// Helper function to get items by category
export const getMenuItemsByCategory = (category: string): MenuItem[] => {
  return menuItems.filter(item => item.category === category);
};

// Helper function to get featured items (for homepage)
export const getFeaturedItems = (): MenuItem[] => {
  // Return some popular main dishes
  return [
    getMenuItemById(27), // Mixed Machawi
    getMenuItemById(32), // Mashawi Zahr Rumman
    getMenuItemById(38), // Lamb Shank
    getMenuItemById(28), // Shish Taouk
    getMenuItemById(40), // Salmon
    getMenuItemById(34), // Fettuccini Alfredo
  ].filter((item): item is MenuItem => item !== undefined);
};
